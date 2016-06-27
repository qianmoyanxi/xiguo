var tplRegister = require('../templates/register.string');

SPA.defineView('register',{
	html:tplRegister,
	
	plugins:['delegated'],
	
	bindActions:{
		'back':function(){
			this.hide();
		},
		'tap.my':function(){
			SPA.open('my');
		}
	},
	
	bindEvents:{
		
	}
});
