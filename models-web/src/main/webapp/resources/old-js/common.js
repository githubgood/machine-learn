$(function(){
fnMinHeight(); //页面高度设置
fnNav(); //头部导航
fnUserLogin(); //用户名下拉菜单
fnDownMenu(); //选择下拉菜单
fnTab(); //table表移入效果
fnTabCar('#card_btn li','#card_box .table_content_son'); //报表选项卡
fnTabCar('#card_btn1 li','#card_box1 .table_content_son'); //报表查看选项卡
fnTabCar('#present_btn_list li','#present_box .present_box_son'); //评级申请提交选项卡
})
//页面高度设置
function fnMinHeight(){
	var iH =$(document).height()-$('.header_height').height();
	$('.leftsideBar').css('min-height',iH);
	$('.right_content').css('min-height',iH);
	$(window).on('resize',function(){
		$('.leftsideBar').css('min-height',iH);
	});
}
//头部导航
function fnNav(){
	$('#header_nav a').hover(function(){
		$(this).css('color','#fff');
		$(this).find('span').addClass('nav_hover_span'+$(this).attr('data-id'));
	},function(){
		if($(this).parent().attr('class')!='active'){
			$(this).css('color','#7ba3ff');
			$(this).find('span').removeClass('nav_hover_span'+$(this).attr('data-id'));
		}
		
	})

}
//用户名下拉菜单
function fnUserLogin(){
	var oBtn =document.getElementById('header_login');
	var oMenu =document.getElementById('login_list');
	var iTimer =null;
	oMenu.onmouseover = oBtn.onmouseover =function(){
		clearTimeout(iTimer)
		oMenu.style.display ='block';
	};
	oMenu.onmouseout = oBtn.onmouseout =function(){
		iTimer =setTimeout(function(){
			oMenu.style.display ='none';
		},200);
	};
}
//选择下拉菜单
function fnDownMenu(){
	var oDiv,dis;
    /*修改函数全局绑定zhaotm
    $('.select_btn').hover(function(){
        $(this).addClass('borderColor');
    },function(){
        $(this).removeClass('borderColor');
    });*/
    $(document).on('mouseover mouseout', '.select_btn', function(event){
        if(event.type == "mouseover"){
            //鼠标悬浮
            $(this).addClass('borderColor');
        }else if(event.type == "mouseout"){
            //鼠标离开
            $(this).removeClass('borderColor');
        }

    });
    //$('.select_btn').on('click',function(ev){修改函数全局绑定zhaotm
    $(document).on('click', '.select_btn', function(ev){
		$('.provinceCityAll').hide(); //隐藏城市选择插件
		var This =$(this);
		oDiv =$(this).parent().find('.select_list');
		dis =$(oDiv).css('display');
		$('.select_list').hide();
		if(dis=='block'){
			$(oDiv).hide();
		}else{
			$(oDiv).show();
		}
		$(oDiv).on("mouseover","li",function(){
			$(oDiv).find('li').removeClass('active');
			$(this).addClass('active');
		});
        $(oDiv).off("click");
		$(oDiv).on("click","li",function(){
			$(This).find('span').html($(this).html());
			$(This).find('span').attr('data-id',$(this).attr('data-id'));
			$(This).find('input').eq(0).val($(this).attr('data-id'));
			$(oDiv).hide();
		});	

		ev.stopPropagation();
	})
		
	$(document).click(function(){
		$(oDiv).hide();
	});

}
//table表移入效果
function fnTab(){
    //zhaotm修改，全局hover效果
    $(document).on('mouseover mouseout', '.tbody_tr tr', function(event){
        if(event.type == "mouseover"){
            //鼠标悬浮
            $(this).addClass('active');
        }else if(event.type == "mouseout"){
            //鼠标离开
            $(this).removeClass('active');
        }
    });
}
//选项卡
function fnTabCar(btn,box){
	/*$(btn).click(function(){*/
    $(document).on('click', btn, function(){
		$(btn).attr('class','');
		$(this).attr('class','active');
		$(box).css('display','none');
		$(box).eq($(this).index()).css('display','block');	
	})
}
//显示弹窗操作
function fnDelete(obj,hint,b){
	$('#layer').show();
	$(obj).show();
	$(obj).find('a').eq(0).click(function(){
		fnColse(obj);
	});
	if(hint){
		$(obj).find('p').eq(0).html(hint);
	}

    /*后台修改不要覆盖,评级申请提交，方法移动到具体页面
    $('.popup_btn a:eq(0)').click(function(){
        fnColse(obj);
        if(b){
            fnDelete(b);
        }
    });*/
	$(obj).find('.popup_btn a:eq(1)').click(function(){
		fnColse(obj);
	});
}
//关闭弹窗
function fnColse(obj){
	$('#layer').hide();
	$(obj).hide();
}
//保存暂存(原名称：fnSave，不要替换了)
function alertMsg(hint){
	$('#layer').show();	
	$('#popup1').show();
	$('#popup1 h2:eq(0)').html(hint);
	setTimeout(function(){
		$('#layer').hide();	
		$('#popup1').hide();
	},1000)
}
//保存暂存
function fnSave(hint){
    $('#layer').show();
    $('#popup1').show();
    $('#popup1 h2:eq(0)').html(hint);
    setTimeout(function(){
        $('#layer').hide();
        $('#popup1').hide();
    },1000)
}
//alert函数(增加,zhaotm不要删除)
var zIndex = 5000;
function alert(msg, url, importFlag) {
    var alertDiv = "";
    var layerFlag = false;
    var layer = $("#layer");

    if (layer.length == 0) {
        alertDiv += "<div class='layer' id='layer' style='display: block;'></div>";
    } else {
        layer.css("display", "block");
    }
    $(".popup").each(function(){
        if ('none' == $(this).css("display")) {return;}
    	if (zIndex == $(this).css("z-index")) {
            layerFlag = true;
            $(this).css("z-index",0);
		}
    });
    alertDiv +=
        "<div class='popup' id='myPopupAlert' style='display: block;'>" +
        	"<a href='javaScript:;' class='colse' id='myCloseBtn'></a>" +
        	"<p class='popup_word' style='word-break:break-word;'>"+msg+"</p>" +
			"<div class='addBody_btn popup_btn clear' style='width:100px;'>" +
				"<a href='javaScript:;' id='myPopupAlertBtn' class='addBody_btn_a1'>确认</a>" +
			"</div>" +
        "</div>"
    $("body").append(alertDiv);

    //导入失败遮罩层处理
    if (importFlag == "import") {
        layerFlag = true;
	}

	//confirm btn
    $("#myPopupAlertBtn").click(function () {
		$(this).parent().parent().remove();
		if (!layerFlag){
			$("#layer").css("display", "none");
		}
		$(".popup").each(function(){
			$(this).css("z-index",zIndex);
		});
		//跳转列表页
		if (url) {
			window.location.href = url;
		}
	});

    //close btn
	$("#myCloseBtn").click(function () {
        $(this).parent().remove();
        $("#layer").css("display", "none");
    });
}
//清空
function fnClear(obj){
	$(obj).parent().parent().find('.statement_list input').val('');
}
//添加文件
function fnFile(obj){
	$(obj).parent().find('a').html($(obj).val().substr(12,$(obj).val().length));
    fileUpload(obj);
	/*$(obj).parent().parent().find('.file_div1').show();*/
	/*$(obj).hide();*/
}
//重新添加文件
function fnNewFile(obj){
	
	$(obj).parent().parent().find('.file_div a').html($(obj).val().substr(12,$(obj).val().length));

}
//格式化时间
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//主体信息更新页面滚动
function fnScroll(oDivPar,oDiv,oBtnPar,oBtn){
	var oListParent =document.getElementById(oDivPar);
	var oUl =document.getElementById(oDiv);
	var oScrollParent =document.getElementById(oBtnPar);
	var oScroll =document.getElementById(oBtn);
	var disY =0;
	var bBtn = true;
	
	oScroll.onmousedown =function(ev){
		var oEvent =ev || event;
		
		
		disY =oEvent.clientY -oScroll.offsetTop;
		
		document.onmousemove =function(ev){
			
			var oEvent =ev || event;
			
			var T =oEvent.clientY -disY;
			
			t(T);
			
			document.onmouseup =function(){
				document.onmousemove =null;
			};
		};
		
		return false;
		
	};

	if(oListParent.addEventListener){
		oListParent.addEventListener('DOMMouseScroll',show,false);
	}
	oListParent.onmousewheel =show;
	
	function show(ev){
		var oEvent =ev || event;
		
		var T = 0;
		
		if(ev.detail){
			bBtn = oEvent.detail>0 ? true : false;
		}else{
			bBtn = oEvent.wheelDelta<0 ? true : false;
		}
		
		if(bBtn){  
			T = oScroll.offsetTop + 30;
		}else{
			T = oScroll.offsetTop - 30;	
		}
		
		t(T);
		
		if(oEvent.preventDefault){
			oEvent.preventDefault();
		}else{
			return false;
		}
			
			
			
	};
	  function t(T){
		  
		  if(T<0){
			  T=0;
		  }else if(T>oListParent.offsetHeight-oScroll.offsetHeight){
			  
			  T=oListParent.offsetHeight-oScroll.offsetHeight;
		  
		  }
		  
		  oScroll.style.top = T+'px';
		  
		  var scale = T/(oScrollParent.offsetHeight-oScroll.offsetHeight);
		  
		  oUl.style.top = -scale * (oUl.offsetHeight-oListParent.offsetHeight) + 'px';
	  
	  
	  }
}
//去除空格共用方法 created by xzd
function trimSpace(obj) {
    return obj.replace(/(^\s+)|(\s+$)/g, "");
}






