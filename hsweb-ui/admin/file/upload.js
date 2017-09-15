require(["css!plugin/webuploader/webuploader.css", "css!/admin/css/common.css"]);

importMiniui(function () {
    require(["plugin/webuploader/webuploader.min", "message", "request", "miniui-tools"], function (WebUploader, message, request, tools) {
        if (!WebUploader.Uploader.support()) {
            mini.alert("您的浏览器太旧不支持文件上传!<br/>" +
                "如果你使用的是IE浏览器,请<a href='https://www.baidu.com/s?wd=ie%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9B%B4%E6%96%B0flash%20player' target='_blank'>升级flash版本</a>!");
            throw new Error("");
        }
        mini.parse();
        var accepts = {
            img: {
                title: '图片',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },
            excel: {
                title: 'EXCEL',
                extensions: 'xls,xlsx',
                mimeTypes: 'application/excel'
            },
            word: {
                title: 'WORD',
                extensions: 'doc,docx',
                mimeTypes: '*/*'
            }, json: {
                title: 'JSON',
                extensions: 'json',
                mimeTypes: 'application/json'
            },
            all: {
                title: '文件',
                extensions: '*',
                mimeTypes: '*/*'
            }
        };
        var accept = "";
        var maxFileSize = 100 * 1024 * 1024;

        var grid = mini.get('grid');
        var uploader = WebUploader.create({
            swf: BASE_PATH + 'plugins/webuploader/Uploader.swf',
            server: BASE_PATH + "file/upload",
            pick: '#addFile',
            compress: false,
            dnd: document.body,
            paste: document.body,
            accept: accepts[accept],
            resize: false
        });

        function getRow(id) {
            return grid.findRow(function (row) {
                if (row.id == id)return true;
            });
        }

        uploader.on('fileQueued', function (file) {
            if (maxFileSize <= file.size) {
                uploader.removeFile(file.id);
                message.showTips("文件大小不能超过:" + bytesToSize(maxFileSize));
                return;
            }
            grid.addRow({id: file.id, name: file.name, status: "等待上传", size: bytesToSize(file.size)});
            var row = getRow(file.id);
            var md5File = uploader.md5File(file);
            if (md5File)
                md5File
                // 及时显示进度
                    .progress(function (percentage) {
                        var range = ( percentage * 100).toFixed(1);
                        row.status = range >= 100 ? "等待服务器响应..." : "检测文件中" + range + "%";

                        grid.updateRow(row);
                    })
                    // 完成
                    .then(function (val) {
                        row.md5 = val;
                        request.get("file/md5/" + val, {}, function (data) {
                            if (data.status == 200) {
                                uploader.removeFile(file.id);
                                row.status = "文件秒传成功";
                                row.fileId = data.result.id;
                                grid.acceptRecord(row);
                                grid.updateRow(row);
                            } else {
                                row.status = "等待上传";
                                grid.updateRow(row);
                            }
                        });
                    });
        });
        function bytesToSize(bytes) {
            if (bytes === 0) return '0 B';
            if (bytes < 1024)return bytes + 'b';
            var k = 1024, // or 1024
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));
            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
        }

        uploader.on('uploadProgress', function (file, percentage) {
            var range = ( percentage * 100).toFixed(1);
            var row = getRow(file.id);
            if (percentage < 1) {
                row.status = "上传中" + range + "%";
            } else {
                row.status = "等待服务器回应...";
            }
            grid.updateRow(row);
        });
        uploader.on('uploadSuccess', function (file, message) {
            var row = getRow(file.id);
            if (message && message.status == 200 && message.result) {
                row.status = "上传成功!";
                row.fileId = message.result.id;
                grid.acceptRecord(row);
            } else {
                row.status = "上传失败!";
                grid.updateRow(row);
            }

        });

        uploader.on('uploadError', function (file) {
            var row = getRow(file.id);
            //解决ie下,由于mediaType问题导致文件上传成功,但是抛出异常的问题
            if (row.md5) {
                request.get("file-info/" + row.md5, {}, function (data) {
                    if (data && data.status == 200) {
                        uploader.removeFile(file.id);
                        row.status = "上传成功!";
                        row.fileId = data.result.id;
                        grid.acceptRecord(row);
                        grid.updateRow(row);
                    } else {
                        row.status = "上传失败!";
                        grid.updateRow(row);
                    }
                });
            } else {
                row.status = "上传失败";
                grid.updateRow(row);
            }
        });

        uploader.on('uploadComplete', function (file) {
        });

        $(".start-button").on("click", function () {
            uploader.upload();
        });

        function ok() {
            var data = grid.getData();
            var list = [];
            for (var i = 0; i < data.length; i++) {
                if (!data[i].fileId) {
                    message.showTips("文件:" + data[i].name + " 还未上传!");
                    return;
                }
                list.push({name: data[i].name, id: data[i].fileId, size: data[i].size});
            }
            tools.closeWindow(list);
        }

        $(".ok-button").on("click", ok);
        grid.getColumn("action").renderer = function (e) {
            return tools.createActionButton("删除", "icon-remove", function () {
                e.sender.removeRow(e.record);
            });
        };
        function removeFile(id) {
            var row = getRow(id);
            try {
                uploader.removeFile(id);
            } catch (e) {
            }
            grid.removeRow(row);
        }

        if (window.init) {
            window.init(grid);
        }
    });
});