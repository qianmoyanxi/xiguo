// 引入spa类库
require('./lib/spa.min.js');
require('./lib/iscroll-probe.js');
require('./lib/swiper-3.3.1.min.js');
//require('./lib/swiper.animate1.0.2.min.js');

// 引入views
require('./views/index.js');
require('./views/my.js');
require('./views/register.js');
require('./views/guide.js');
require('./views/home.js');
require('./views/shopcar.js');
require('./views/detail.js');
require('./views/huangou.js');
require('./views/search.js');

//SPA设置
SPA.config({
	indexView:'guide'   //设置起始页
});
