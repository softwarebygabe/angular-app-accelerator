/* eslint-disable */

/** @ngInject */
module.exports = function ($http) {

	var vm = {};

	vm.queryService = {
		host: 'http://54.152.94.59',
		port: 80
	};

	const base = vm.queryService.host+':'+vm.queryService.port;

	vm.searchExact = function(searchPayload) {
		const endpoint = base + '/search/exact';
		return new Promise(function(resolve, reject){
			$http.post(endpoint, searchPayload).then(function ( res, err){
				if(err) {
					console.log(err);
				}
				resolve(res.data); // get the actual list of results and return those
			});
		});
	}

	vm.createNodeQuery = function(degrees, node) {
		return {degrees:degrees, node:node};
	}

	vm.getConnectedData = function(queryPayload) {
		const endpoint = base + '/query/klnodes';
		return new Promise(function(resolve, reject){
			$http.post(endpoint, queryPayload).then(function(res, err) {
				if(err){
					console.log(err);
				}
				resolve(res.data); // return the nodes and links in keylines format
			});
		});
	}

	return vm;
};