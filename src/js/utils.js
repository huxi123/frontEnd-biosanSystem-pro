var BIOSAN = BIOSAN || {};
(function(){
    MainJS = {
        token : "",
        isFunc : function (fun) {
            return (fun != null && typeof fun == "function");
        },
        postData : function(url,data,success,error,type,asy,cache){
            var _this = this;
            if (error == "GET" || error == "POST") {
                cache = asy;
                asy = type;
                type = error;
                error = undefined;
            }
            type = type == undefined?"GET":"POST";
            asy = asy == undefined?false:asy;
            cache = cache == undefined?false:cache;
            $.ajax({
                url: url,
                type: type,
                data: data,
                async: asy,
                cache: cache,
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function (b) {
                    if (_this.isFunc(success)) {
                        success(b);
                    }
                },
                error : function (xhr, status, err) {
                    if (_this.isFunc(error)) {
                        error(xhr,status,err)
                    }
                }
            })
        },
        postFile : function(url,data,callback){
            var that = this;
            $.ajax({
                url: url, 
                data: data,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (ret) {
                    if(that.isFunc(callback)){
                        callback(ret);
                    }
                }
            });
        },
        postDataWithToken : function(url,data,success,error,type,asy,cache){
            var _this = this;
            data = $.extend({
                login_token : _this.token?this.token:''
            }, data);
            _this.postData(url,data,success,error,type,asy,cache);
        }
    };
    BIOSAN.utils = MainJS;
})();