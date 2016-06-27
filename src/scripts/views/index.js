//引入模板
var tplIndex = require('../templates/index.string');

//引用公共方法
var util = require('../utils/fn.js');

//定义视图
SPA.defineView('index', {
	
	//装载html模板
  html: tplIndex,

	//载入插件列表
	//delegated 实现tab事件的绑定
	plugins:['delegated'],
	
	//初始化一些属性和方法
	init:{
//		setFocus: function (e) {
//       		$(e.el).addClass('active').siblings().removeClass('active');
//     }
	},
	
	//定义子视图
	modules:[{
		name:'content',
		views:['home','huangou','search','shopcar','my'],
		defaultTag:'home',
		container:'.l-container'
	}],
	
	//绑定TAB事件
	bindActions:{
		'switch.tabs':function(e,data){
			//设置当前Tab高亮
			util.setFocus(e.el);
			
			//切换子视图
			this.modules.content.launch(data.tag);
		},
		
		'tap.my':function(){
			SPA.open('my');
		},
		
		'tap.shopcar':function(){
			SPA.open('shopcar',{
				ani:{
				 name:'actionSheet',
				 distance:300
//				 name:'dialog',
//				 width:0
				}
			});
		}
		
	},
	
	//绑定视图事件
  bindEvents: {
    show: function () {
//    var myScroll = new IScroll('#home-scroll');
    }
  }
});
