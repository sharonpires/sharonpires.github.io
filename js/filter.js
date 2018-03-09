u(".filter a").on("click", function(){
	var id = u(this).attr('id');
	if(u(this).hasClass("filter_active")) {
	} 
	else if (id === "all"){
		u(".filter a").removeClass("filter_active");
		u(this).addClass('filter_active');
		u('.item').addClass('fadeout');
		setTimeout(function(){
			u('.item').removeClass('hide');
		}, 300);
		setTimeout(function(){
			u(".item").removeClass('fadeout');
		}, 400);
	}
	else {
		u(".filter a").removeClass("filter_active");
		u(this).addClass('filter_active');
		u('.item').addClass('fadeout');
		setTimeout(function(){
			u('.item').addClass('hide');
		}, 300);
		setTimeout(function(){
			u(".item."+id).removeClass('hide');
		}, 350);
		setTimeout(function(){
			u(".item."+id).removeClass('fadeout');
		}, 400);
	}
});