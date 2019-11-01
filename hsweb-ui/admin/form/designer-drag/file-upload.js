(function () {
    var maxFileSize = 100 * 1024 * 1024;
    var BASE_PATH=window.BASE_PATH||'/';
    function bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        if (bytes < 1024) return bytes + 'b';
        var k = 1024, // or 1024
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }

    function FileUploader(WebUploader) {
        this.initUploader = function (uploadButton, uploadCallback, staticFile) {
            var uploader = WebUploader.create({
                swf: BASE_PATH + 'plugins/webuploader/Uploader.swf',
                //文件上传地址
                server: BASE_PATH + "file/upload" + (staticFile ? "-static" : ""),
                pick: {
                    id: uploadButton,
                    multiple: false
                },
                compress: false,
                // dnd: document.body,
                // paste: document.body,
                // accept: accepts[accept],
                resize: false
            });
            uploader.on('fileQueued', function (file) {
                if (maxFileSize <= file.size) {
                    uploader.removeFile(file.id);
                    message.showTips("文件大小不能超过:" + bytesToSize(maxFileSize));
                    return;
                }
                var md5File = uploader.md5File(file);
                if (md5File) {
                    md5File
                    // 及时显示进度
                        .progress(function (percentage) {
                        })
                        // 完成
                        .then(function (md5) {
                            //todo 校验md5
                            uploader.upload();
                        });
                }
            });
            uploader.on('uploadSuccess', function (file, response) {
                if (response.result) {
                    uploadCallback(response.result);
                }
            });
        }
    }

    if (window.define) {
        define(["plugin/webuploader/webuploader.min"], function (WebUploader) {
            return new FileUploader(WebUploader);
        });
    }

    window.FileUploader = new FileUploader(window.WebUploader);
})();

