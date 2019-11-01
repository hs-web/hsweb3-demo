(function () {
    var maxFileSize = 100 * 1024 * 1024;
    var BASE_PATH = window.BASE_PATH || '/';

    var accepts = {
        image: {
            title: 'Images',
            extensions: 'gif,jpg,bmp,png',
            mimeTypes: 'image/gif,image/jpg,image/bmp,image/png'
        },
        excel:{
            title: 'Excel',
            extensions: 'xls,xlsx',
            mimeTypes: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        },
        word:{
            title: 'Word',
            extensions: 'doc,docx',
            mimeTypes: 'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }
    }

    function bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        if (bytes < 1024) return bytes + 'b';
        var k = 1024, // or 1024
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }

    function FileUploader(WebUploader) {
        this.initUploader = function (conf) {

            var uploadCallback = conf.callback;
            var uploader = WebUploader.create({
                swf: BASE_PATH + 'plugins/webuploader/Uploader.swf',
                //文件上传地址
                server: BASE_PATH + "file/upload-static",

                pick: conf.pick,
                compress: false,
                dnd: conf.container,
                paste: conf.container,
                accept: accepts[conf.accept] || conf.accept || "*",
                resize: false
            });


            require(["storejs"], function (storejs) {
                uploader.on('uploadBeforeSend', function (e, param, headers) {
                    var token = storejs.get("hsweb-user");
                    if (token) {
                        headers['hsweb-user'] = token;
                    }
                });
            });
            if (conf.process) {
                uploader.on("uploadProgress", conf.process);
            }
            uploader.on('fileQueued', function (file) {
                if (maxFileSize <= file.size) {
                    uploader.removeFile(file.id);
                    message.showTips("文件大小不能超过:" + bytesToSize(maxFileSize));
                    return;
                }
                if (conf.onAdd) {
                    conf.onAdd(file);
                }
                if (conf.autoUpload !== false) {
                    uploader.upload();
                }
            });
            uploader.on('uploadSuccess', function (file, response) {
                if (response.status === 200 && response.result) {
                    uploadCallback(file, response.result);
                } else {
                    if (conf.uploadError) {
                        conf.uploadError(file, response);
                    }
                }
            });
            uploader.on('uploadError', function (file, response) {
                if (response.status === 200 && response.result) {
                    uploadCallback(file, response.result);
                } else {
                    if (conf.uploadError) {
                        conf.uploadError(file, {message: "服务器繁忙"});
                    }
                }
            });
            return uploader;
        }
    }

    if (window.define) {
        define(["plugin/webuploader/webuploader.min"], function (WebUploader) {
            return new FileUploader(WebUploader);
        });
    }

    window.FileUploader = new FileUploader(window.WebUploader);
})();

