var tplMy = require('../templates/my.string');

SPA.defineView('my',{
	html:tplMy,
	
	plugins:['delegated'],
	
	bindActions: {
    'back': function () {
      this.hide();
    },
    
    'tap.register':function(){
 		SPA.open('register');
 	}
    
 },
 	bindEvents:{
 		
 	}
	
});
