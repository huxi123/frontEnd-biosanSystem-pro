"use strict"

function Timer(){
    /**
     * idlist保存倒计时id
     */
    this.idList=[];
}

Timer.prototype = {
    /**
     * obj指向发送按钮；wait是倒计时时间
     */
    init:function(obj,wait){
        this.obj=obj;
        this.wait=wait;
        this.onSetTime();
    },
    onSetTime:function(){
        let that = this;
        if(typeof that.obj=='object'){
            if (that.wait == 0){
                that.configSend();
            }else{
                that.obj.setAttribute('disabled',true);
                that.obj.style.cursor='not-allowed';
                that.obj.value=that.wait + 's后重发';
                sessionStorage.setItem('countDown',that.wait);
                that.wait--;
                let tempId=setTimeout(function() {
                    that.onSetTime();
                },1000);
                that.idList.push(tempId);
            }
        }
    },
    configSend:function(){
        let that = this;
        that.wait=60;
        that.clearTimer();
        sessionStorage.setItem('countDown',0);
        that.obj.removeAttribute("disabled");
        that.obj.style.cursor='pointer'; 
        that.obj.value="发送验证码";
    },
    //清除倒计时
    clearTimer:function(){
        let that = this;
        let idList=that.idList;
        for(let i in idList){
            clearTimeout(idList[i]);
        }
    },
}




$("#validationcode").focus(function(){
    $(".vali-input").removeClass("vali-border").addClass("vali1-border");
})
$("#validationcode").blur(function(){
    $(".vali-input").removeClass("vali1-border").addClass("vali-border");
})
    $("#newPassword").focus(function(){
    $(".pass-warp").removeClass("pass-border").addClass("pass1-border");
})
$("#newPassword").blur(function(){
    $(".pass-warp").removeClass("pass1-border").addClass("pass-border");
})
    $("#again-newPassword").focus(function(){
    $(".again-pass-warp").removeClass("agagin-pass-border").addClass("agagin1-pass-border");
})
$("#again-newPassword").blur(function(){
    $(".again-pass-warp").removeClass("agagin1-pass-border").addClass("agagin-pass-border");
})


var timer = new Timer();
var url=window.location.href;
var mobile=url.split('=')[1]?url.split('=')[1]:'';
var timeConfig = timeConfig || {};
timeConfig.sendObj=document.getElementById('send-validation');

$(document).ready(function() {
    let str1 = mobile.slice(0,3);
    let str2 = mobile.slice()
    $(".mobileNumber").html(mobile);
})

function getTime(){
    let time=sessionStorage.getItem('countDown');
    timeConfig.wait = time&&time!= 0?time:60;
    if(time && time!=0){ 
        timer.init(timeConfig.sendObj,timeConfig.wait);
    }
}
function sendVal(){
    $(".warning").html('');
    timer.init(timeConfig.sendObj,60);
    $.ajax({
        type : 'post',
        url : '../message/sendCheckCode',
        contentType : "application/x-www-form-urlencoded;charset=utf-8;",
        data:{mobile:'',type:'1'},
        async : true,
        success : function (data) {
            if(data.result=='success'){
                return;
            }else{
                $(".warning").html(data.message);
                timer.configSend();
            }
        },
        error:function (xhr, status, err) {
            timer.configSend();
        }
    })
}

function Login(){
    var validcode = $.trim($("#validationcode").val());
    var pwd = $.trim($("#newPassword").val());
    var aga_pwd = $.trim($("#again-newPassword").val());
    let flag1=/\d/.test(pwd);
    let flag2=/[a-z]|[A-Z]/.test(pwd);
    if(!validcode){
        $("#validationcode").select().focus();
        $(".warning").html('请输入验证码');
        return;
    }

    if(!pwd){
        $("#newPassword").select().focus();
        $(".warning").html('请输入6~30 位新密码');
        return;
    }
    if(pwd.length<6||pwd.length>30){
        $("#newPassword").select().focus();
        $(".warning").html('请输入6~30 位新密码');
        return; 
    }
    if(!flag1 || !flag2){
        $("#newPassword").select().focus();
        $(".warning").html('密码不能是纯数字或纯字母');
        return;
    }
    if(pwd!==aga_pwd){
        $("#again-newPassword").select().focus();
        $(".warning").html('两次输入的密码不一致，请重新录入');
        return; 
    }
    $(".warning").html('');
    
    let obj={
        mobile:"",
        verification_code:validcode,
        password:pwd,
        pwdagain:aga_pwd
        
    }


    $.ajax({
        type : 'post',
        url : '../employee/resetPWD',
        data : {"params":JSON.stringify(obj),"type":'1'},
        contentType : "application/x-www-form-urlencoded;charset=utf-8;",
        async : true,
        success : function (data) {
            if(data.result=='success'){
                window.close();
                alert('修改成功');
            }else
                $(".warning").html(data.message)
        },
        error:function (xhr, status, err) {
            console.log(err);
        }
    })
}

function closeWin(){
    window.close();
}