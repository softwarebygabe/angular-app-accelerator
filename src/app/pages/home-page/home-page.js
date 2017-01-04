/* eslint-disable */
require('./home-page.scss');

module.exports = {
  template: require('./home-page.html'),
  controller: homePageCtrl
};

/** @ngInject */
function homePageCtrl(appScope) {
	var that = this;

	that.hello = appScope.hello;

};
