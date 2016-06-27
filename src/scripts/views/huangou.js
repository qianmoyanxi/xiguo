var tplHuangou = require('../templates/huangou.string');

SPA.defineView('huangou',{
	html:tplHuangou,
	
	plugins:['delegated'],
	
	bindActions:{
	  
	},
	
	bindEvents:{
		'show':function(){
			
		}
	}
});
