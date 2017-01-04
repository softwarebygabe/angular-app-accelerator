/* eslint-disable */
require('./page-one.scss');

module.exports = {
  template: require('./page-one.html'),
  controller: pageOneCtrl
};

/** @ngInject */
function pageOneCtrl(appScope) {
	var that = this;

	that.hello = appScope.hello;

};