$(function(){
	$('.wrapper').load('./pages/highcharts.html');
	$('.left ul li').click(function(){
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		if($(this).text() == '顾客管理'){
			$('.wrapper').load('./pages/customer.html');
		}else if($(this).text() == '员工管理'){
			$('.wrapper').load('./pages/waiter.html');
		}else if($(this).text() == '订单管理'){
			$('.wrapper').load('./pages/order.html');
		}else if($(this).text() == '地址管理'){
			$('.wrapper').load('./pages/address.html');
		}else if($(this).text() == '栏目管理'){
			$('.wrapper').load('./pages/category.html');
		}else if($(this).text() == '产品管理'){
			$('.wrapper').load('./pages/product.html');
		}else if($(this).text() == '评论管理'){
			$('.wrapper').load('./pages/comment.html');
		}
	})
	 
	$(".left ul li:first").trigger("click");
})