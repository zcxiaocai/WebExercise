$(document).ready(function(){
	$(".buttom").hover(function(){
	  	$(this).html("Continue Reading →")
	},function(){
	  	$(this).html("Continue Reading");
	});
	
	var i = 1;
	var l = $(".pages").length; //获取页面的数量
	$('.on').off().on("click",function(){
		i--;
		if(i < 1){
		i++;
		}  //跳转到第一页的时候继续点击上一页不改变 i 的值
		$('.page'+ i).show().siblings('.pages').hide();
	});
	$('.under').off().on("click",function(){
		i++;
		if(i > l){
		i--;
		}  //跳转到最后一页的时候继续点击下一页不改变 i 的值
		$('.page'+ i).show().siblings('.pages').hide();
	});
	
	$(".click").off().on("click",function(){
		$(this).addClass("green").siblings().removeClass('green');
	});
	
});

