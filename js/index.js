var mySwiper = new Swiper('.swiper-container', {
	loop:true,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
})

$(function(){
	// 1/2屏幕高度
	var middleHeight = $(window).height()/2
	// 监听鼠标滚轮
	$(window).scroll(function(){
		// 根据高度选择header透明度
		let topp = $(document).scrollTop()
		let opacityp = topp/540
		$("header").css("background-color","rgba(255,255,255," + opacityp + ")")
		if(opacityp > .5 ){
			$(".a").removeClass("white")
			$(".header_content").find('img').attr("src","images/ioc1.png")
		}else{
			$(".a").addClass("white")
			$(".header_content").find('img').attr("src","images/ioc2.png")
		}

		// 滚轮不同高度执行不同动画效果
		if(topp >= 200){
			$(".about_content").addClass('toScale')
		}
		if(topp >= 700){
			$(".facts").addClass('toOpacity')
		}
		if(topp >= 1400){
			$(".team").find("p").addClass('toOpacity')
			$(".team").find("h5").addClass('toOpacity')
			$(".team").find("li").addClass('toScale')
		}
		if(topp >= 2200){
			$(".service_content").find("p").addClass("toOpacity")
			$(".service_content").find("li").addClass("toSkewX")
		}
		if(topp >= 4000){
			$(".contact").find("img").addClass("toScale")
			$(".contact").find("p").addClass('toOpacity')
			$(".contact").find("h5").addClass('toOpacity')
		}

		// 产品图片滚动到屏幕正中间执行动画效果
		var liTop = $(".product li").offset().top - $(window).scrollTop();
		var obj = $(".product").find('li')
		for(let i =0 ; i < obj.length ; i++){
			// let x = obj[i].offset().top - $(window).scrollTop()
			let x = obj.eq(i).offset().top-$(window).scrollTop()
			if(x <= middleHeight){
				obj.eq(i).addClass('toRotate')
			}
		}
	})

	// 其他悬浮效果
	$(".service_content li").hover(function(){
		$(this).addClass('toBig')
	},function(){
		$(this).removeClass('toBig')
	})

	$(".team li").hover(function(){
		$(this).find('img').addClass('changeshow')
	},function(){
		$(this).find('img').removeClass('changeshow')
	})
	$(".product li").hover(function(){
		$(this).find("div").removeClass('hide')
		$(this).find("img").addClass('toBig')
	},function(){
		$(this).find("div").addClass('hide')
		$(this).find("img").removeClass('toBig')
	})

})