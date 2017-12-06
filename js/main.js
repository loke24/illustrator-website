var sc=$('.nai');
$(window).scroll(function(){
	var scroll=$(window).scrollTop();
	console.log(scroll);
	
	if(scroll>=460)
	{
		sc.addClass('navba');
	}
	else{
		sc.removeClass('navba');
	}
		

});