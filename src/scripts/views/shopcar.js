//第一种
//var tplShopcar = require('../templates/shopcar.string');
//
//SPA.defineView('shopcar',{
//	html:tplShopcar,
//	
//	plugins:['delegated'],
//	
//	bindActions:{
//	  
//	},
//	
//	bindEvents:{
//		'show':function(){
//			
//		}
//	}
//});

//第二种
var sa = require('../lib/swiper.animate1.0.2.min.js');
var tplShopcar = require('../templates/shopcar.string');

SPA.defineView('shopcar',{
	html:tplShopcar,
	
	plugins:['delegated'],
	
	bindActions:{
	'close':function(){
		this.hide();
	}
	},
	
	bindEvents:{
	show:function(){
		var lifenavScroll = this.widgets['lifenav-scroll'];
		lifenavScroll.options.scrollX = true;
		lifenavScroll.options.scrollY = false;
		
		console.log(sa.animate);
	}
	}
});

