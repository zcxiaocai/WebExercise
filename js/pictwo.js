$(document).ready(function(){
	//步骤轮播
	var i=0;
	var j=0;
	var l = $('.step-num').find('li').length;
	
	$('.step').mouseenter(function(){
		j=1;
	});
	$('.step').mouseleave(function(){
		j=0;
	});
	setInterval(function(){
		if(j==0){
			i+=235;
			if(i>=235*(l-4)){
				i=0;
			}
		$('.step-num').css("right",i+"px");
		};
	},1800);
	$('.bottom-r').click(function(){
		i+=235;
		if(i>=235*(l-5)){
			i=235*(l-5);
		}
		$('.step-num').css("right",i+"px");
	});
	$('.bottom-l').click(function(){
		i-=235;
		if(i<=0){
			i=0;
		}
		$('.step-num').css("right",i+"px");
	});
});


$(function() {
	var k = 0;
	var timer;
	
	$('.scroll-content').eq(0).show().siblings().hide();
		Show();
		
	showtimer();
	
	$('.tab').hover(function(){
		k = $(this).index();
		Show();
		clearInterval(timer); 
	},function(){
		showtimer();
	});
	
	$('.btn-l').click(function(){
		clearInterval(timer);
		if(k==0){
			k=4
		}
		k--;
		Show();
		showtimer();
	});
	$('.btn-r').click(function(){
		clearInterval(timer);
		if(k==3){
			k=-1;
		}
		k++;
		Show();
		showtimer();
	});
	function  Show(){
		$('.scroll-content').eq(k).fadeIn(100).siblings().fadeOut(0);
		$('.tab').eq(k).addClass('bg').siblings().removeClass('bg');
	}
	
	function showtimer(){
			timer =	setInterval(function() {
			k++;
			if(k == 4) {
				k = 0;
			}
			Show();
		}, 2000);
	}
})
