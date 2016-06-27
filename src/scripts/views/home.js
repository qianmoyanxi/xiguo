var tplHome = require('../templates/home.string');

//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home',{
	html:tplHome,
	
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist = [];
		}
	}],
	
	init: {
		vm:null,
		livelistArray:[],
   		mySwiper: null,
   		formatData:function(arr){
   			var tempArr = [];
   			for(var i = 0;i<Math.ceil(arr.length/2);i++){
   				tempArr[i] = [];
   				tempArr[i].push(arr[2*i]);
   				tempArr[i].push(arr[2*i+1]);
   			}
   			return tempArr;
   		}
  },
  	
	 bindActions: {
//	   'tap.slide': function (e, data) {
//	      	this.mySwiper.slideTo($(e.el).index())
//	    }
		'goto.detail':function(e,data){
			SPA.open('detail',{
				param:{
					data: data
				}
			});
		}
  },
  	
	bindEvents:{
		'beforeShow':function(){
			var that = this;
			
			//获取vm对象
			that.vm = that.getVM();
			
			$.ajax({
				
				url:'/api/getLivelist.php',
				type:'get',
				data:{
					rtype:'origin'
				},
				success:function(rs){
					that.livelistArray = rs.data;
          			that.vm.livelist = that.formatData(rs.data);
				}
			});
		},
		
		'show': function () {
			var that = this;
			
	      var mySwiper = new Swiper('#home-swiper', {
	        loop: true,
	        autoplay:2000

	      });
	      
	      //下拉刷新,上拉加载更多
	      var scrollSize = 30;
	      var myScroll = this.widgets.homeScroll;
	      myScroll.scrollBy(0,-scrollSize);
	      
	      var head = $('.head img');
	      topImgHasClass = head.hasClass('up');
	      var foot = $('.foot img');
	      bottomImgHasClass = foot.hasClass('dowm');
	      myScroll.on('scroll',function(){
	      	var y = this.y,
	      	maxY = this.maxScrollY - y;
	      	if(y >= 0){
	      		!topImgHasClass && head.addClass('up');
	      		return "";
	      	}
	      	if(maxY >= 0){
	      		!bottomImgHasClass && foot.addClass('down');
	      		return "";
	      	}
	      });
	      
	      myScroll.on('scrollEnd',function(){
	      	if(this.y >= -scrollSize && this.y < 0){
	      		myScroll.scrollTo(0,-scrollSize);
	      		head.removeClass('up');
	      	}else if (this.y >= 0){
	      		head.attr('src','/xiguo/images/ajax-loader.gif');
	      		
	      // ajax下拉刷新数据
//            setTimeout(function () {
//                myScroll.scrollTo(0, -scrollSize);
//                head.removeClass('up');
//                head.attr('src', '/xiguo/images/arrow.png');
//            }, 1000); 		
	     //数据
	     $.ajax({
                url: '/api/getLivelist.php',
                data: {
                  rtype: 'refresh'
                },
                success: function (rs) {
                  var newArray = rs.data.concat(that.livelistArray);
                  that.vm.livelist = that.formatData(newArray);
                  that.livelistArray = newArray;
                
                  myScroll.scrollTo(0, -scrollSize);
                  head.removeClass('up');
                  head.attr('src', '/xiguo/images/arrow.png');
                 }
            });
              
	      	}
	      	
	      	var maxY = this.maxScrollY - this.y;
	      	var self = this;
	      	if(maxY > -scrollSize && maxY < 0){
	      		myScroll.scrollTo(0,self.maxScrollY + scrollSize);
	      		foot.removeClass('down')
	      	}else if(maxY >= 0){
	      		foot.attr("src","/xiguo/images/ajax-loader.gif");
	      		
	    //ajax 上拉加载数据
	     $.ajax({
                url: '/api/getLivelist.php',
                data: {
                  rtype: 'more'
                },
                success: function (rs) {
                  var newArray = that.livelistArray.concat(rs.data);
                  that.vm.livelist = that.formatData(newArray);
                  that.livelistArray = newArray;
                }
              });
              
	      	}
	      });
    	}
	}
	
	
});
