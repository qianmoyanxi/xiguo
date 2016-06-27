var Util = {
	setFocus: function(e) {
		console.log(1);
		$(e).addClass('active').siblings().removeClass('active');
	}
};

module.exports = Util;