jQuery(document).ready(function($){

	
	// 做滚动到目标视频位置的效果
	$('.hidden_link').each(function(){
		
		$(this).click(function(){
			var destination = $(this).attr("href");
		
			$('html,body').animate({scrollTop: $(destination).offset().top}, 500);
		});
	});
});
