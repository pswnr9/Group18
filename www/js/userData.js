var currentUser = {};
var getUserData = function() {
	var currentUser = {
		'user_id' : window.localStorage.getItem('user_id')
	};

	console.dir(currentUser);
}