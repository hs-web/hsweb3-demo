/////////////////////////////////////////////////
// Excel互操作插件：与Excel互拷贝、粘帖
/////////////////////////////////////////////////
var CopyExcel = function (grid) {

    var me = this;
    me.grid = grid;

    function getValueArrayFromClipboard(text) {

        var textArray = text.split("\n");
        if (textArray[textArray.length - 1].length == 0) {
            textArray.splice(textArray.length - 1, 1);
        }
        var array = [];
        for (var i = 0; i < textArray.length; i++) {
            array.push(textArray[i].split('\t'));
        }
        return array;
    }

    function copyClipboardToGrid(grid, text) {

        var valArray = getValueArrayFromClipboard(text);

        if (valArray.length > 0) {

            var columns = grid.getVisibleColumns();
            var cell = grid.getCurrentCell();
            var rowIndex = -1, columnIndex = -1;
            if (cell) {
                rowIndex = grid.indexOf(cell[0])
                columnIndex = columns.indexOf(cell[1]);
            }

            function setRowValues(row, columnIndex, values) {
                var valMap = {};
                for (var i = 0, l = values.length; i < l; i++) {
                    var column = columns[columnIndex + i];
                    if (!column) continue;
                    valMap[column.field] = values[i];
                }
                grid.updateRow(row, valMap);
            }

            for (var i = 0; i < valArray.length; i++) {
                var values = valArray[i];

                var row = grid.getAt(rowIndex + i);
                if (!row) {
                    grid.addRow({});
                    row = grid.getAt(rowIndex + i);
                }

                setRowValues(row, columnIndex, values);

            }
        }

    }

    /////////////////////////////////////////////////////////////////////////

    function getValueArrayFromGrid(grid) {
        var range = me.cellRange;
        var array = [];

        if (range) {
            var columns = grid.getVisibleColumns();

            for (var i = range.startRow, l = range.endRow; i <= l; i++) {
                var textArray = [];
                array.push(textArray);

                var row = grid.getAt(i);
                for (var j = range.startCol, k = range.endCol; j <= k; j++) {
                    var column = columns[j];
                    var val = row[column.field];
                    if (mini.isNull(val)) val = "";
                    textArray.push(val);
                }
            }
        }

        return array;
    }

    function copyGridToClipboard(grid) {

        var valArray = getValueArrayFromGrid(grid);
        var textArray = [];
        for (var i = 0, l = valArray.length; i < l; i++) {
            textArray.push(valArray[i].join('\t'));
        }
        copyToClipboard(textArray.join('\n'));

    }

    function copyToClipboard(text) {

        mini.setClipboard(text);

    }

    /////////////////////////////////////////////////////////////////////////

    if (!mini.isIE) {

        var input = $('<input style="position:absolute;left:10px;top:10px;width:0px;height:0px;z-index:1000;overflow:hidden;padding:0;border:0;"/>').appendTo(grid.el);
        me._input = input;

        $(grid.el).bind('focusin', function (e) {
            input[0].focus();

            //e.preventDefault();
        });

        $(input).bind('paste', function (e) {

            var text = mini.getClipboard(e.originalEvent);

            copyClipboardToGrid(grid, text);

            e.preventDefault();

        });

    }


    $(grid.el).bind("keydown", function (e) {

        if (mini.isIE) {
            if (e.ctrlKey && e.keyCode == 86) {   //ctrl + v

                var text = mini.getClipboard();
                copyClipboardToGrid(grid, text);
            }
        }

        if (e.ctrlKey && e.keyCode == 67) {   //ctrl + c

            copyGridToClipboard(grid);
        }


    });


    /////////////////////////////////////////////////////////////////////////

    this.initSelection();

}


CopyExcel.prototype = {

    currentCell: null,      //{row, col}
    cellRange: null,        //{startRow, endRow, startCol, endCol }

    initSelection: function () {

        var me = this,
            grid = this.grid,
            columns = grid.getVisibleColumns();


        function selectCellRange(cell1, cell2) {
            var range = {};

            range.startRow = Math.min(cell1.row, cell2.row);
            range.endRow = Math.max(cell1.row, cell2.row);
            range.startCol = Math.min(cell1.col, cell2.col);
            range.endCol = Math.max(cell1.col, cell2.col);

            //document.title = cell2.row + ":" + cell2.col;

            me.cellRange = range;

            $(grid.el).find(".excel-cell-selected").removeClass("excel-cell-selected");

            for (var i = range.startRow, l = range.endRow; i <= l; i++) {
                for (var j = range.startCol, k = range.endCol; j <= k; j++) {
                    var cellEl = grid.getCellEl(i, j);
                    $(cellEl).addClass("excel-cell-selected");
                }
            }

            //cell.addClass("cell-selected");
        }

        function getCellAddress(e) {
            var cell = e.length == 2 ? e : grid.getCellFromEvent(e);
            var rowIndex = -1;
            var colIndex = -1;
            if (cell) {
                rowIndex = grid.indexOf(cell[0]);
                colIndex = columns.indexOf(cell[1]);
            }
            return {row: rowIndex, col: colIndex};
        }


        var isMove = false, moveCell;

        function handleMove(e) {

            if (!isMove) {
                isMove = true;
            }

            var cell = $(e.target).closest('.mini-grid-cell')[0];
            if (cell) {
                moveCell = getCellAddress(e);
            }

            selectCellRange(me.currentCell, moveCell || me.currentCell);


            e.preventDefault();

        }

        function handleEnd(e) {

            isMove = false;
            moveCell = null;
            $(document).unbind(".excel-selection");
        }

        $(grid.el).bind("mousedown", function (e) {

            var cell = $(e.target).closest('.mini-grid-cell')[0];
            if (cell) {
                me.currentCell = getCellAddress(e);
                selectCellRange(me.currentCell, me.currentCell);
                //alert(me.currentCell.row+":"+me.currentCell.col);
                $(document).bind("mousemove.excel-selection", handleMove);
                $(document).bind("mouseup.excel-selection", handleEnd);
                e.preventDefault();
            }

        });

        ////////////////////////////////////////////////////////////////////
        grid.on('currentcellchanged', function (e) {
            //document.title = new Date().getTime();
            //$(grid.el).find(".excel-cell-selected").removeClass("excel-cell-selected");

            var cell = grid.getCurrentCell();
            me.currentCell = getCellAddress(cell);
            selectCellRange(me.currentCell, me.currentCell);

            if (me._input) {
                var box = grid.getCellBox(cell[0], cell[1]);
                mini.setXY(me._input, box.left, box.top);
            }
        });

    },

    getCurrentCell: function () {
        return this.currentCell;
    },

    getCellRange: function () {
        return this.cellRange;
    }

}