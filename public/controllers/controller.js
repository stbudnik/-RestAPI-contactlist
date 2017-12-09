var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	console.log("hello from ctrl")

	var refresh = function() {
	$http.get('/contactlist').then(function(response) {
		console.log("i got requested data");
		$scope.contactlist = response.data;
		$scope.contact = {};
	});
};

refresh();

	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).then(function(response){
			console.log(response);
			refresh();
		});
	};

$scope.remove = function(id) {
	console.log(id);
	$http.delete('/contactlist/' + id).then(function(response) {
		refresh();
	});
};

$scope.edit = function(id) {
	console.log(id);
	$http.get('/contactlist/' + id,).then(function(response) {
		$scope.contact = response.data;
	});
};

$scope.update = function() {
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
		refresh();
	})
};

$scope.deselect = function() {
	$scope.contact = {};
}
/*person1 = {
	name: 'Tim',
	email: 'tim@mail.com',
	number: '111-111-111'
};

person2 = {
	name: 'Jo',
	email: 'jo@mail.com',
	number: '222-222-222'
};

person3 = {
	name: 'Mi',
	email: 'mi@mail.com',
	number: '333-333-333'
};

	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;*/
	}]);