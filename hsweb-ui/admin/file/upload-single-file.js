define(["plugin/webuploader/webuploader.min", "message", "request"], function (WebUploader, message, request) {
    require(["css!plugin/webuploader/webuploader.css"]);
    var maxFileSize = 100 * 1024 * 1024;

    function bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        if (bytes < 1024)return bytes + 'b';
        var k = 1024, // or 1024
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }

    function initUploader(uploadButton, uploadCallback, staticFile) {
        var uploader = WebUploader.create({
            swf: BASE_PATH + 'plugins/webuploader/Uploader.swf',
            server: BASE_PATH + "file/upload" + (staticFile ? "-static" : ""),
            pick: {
                id: uploadButton,
                multiple: false
            },
            compress: false,
            dnd: document.body,
            paste: document.body,
            //TODO
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
                    .then(function (val) {
                        if (!staticFile) {
                            request.get("file/md5/" + val, {}, function (response) {
                                if (response.status == 200) {
                                    uploadCallback(response.result);
                                } else {
                                    uploader.upload();
                                }
                            });
                        } else {
                            uploader.upload();
                        }
                    });
            }
            ;
            uploader.on('uploadSuccess', function (file, response) {
                if (response.result) {
                    uploadCallback(response.result);
                }
            });
        });
    }

    return {
        initUploader: initUploader
    }
});