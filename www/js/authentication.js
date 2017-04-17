//testing user login

function login() {
	var uid = $('#uid').val();
	var pw = $('#pw').val();

	console.log("username: " + uid + "\n password: " + pw);

	console.log("enabling loading spinner..");
	$("#container").css("opacity",0.5);
	$('#loader').css( 'display', 'block');
	$.ajax({
		/* Need to do validation on the server side but how do to send password securely? Salt & hash on client? 
			@TODO: address security concern of passing the user's enter password to the server, for now passing as entered as a GET parameter*/
        url: "http://pockethsamanager.azurewebsites.net/tables/User?uid="
        + uid + "&pw=" + pw,
        headers: {
            'ZUMO-API-VERSION': '2.0.0'
        },
        method: "GET"
    }).done(function(data) {
        console.dir(data);              
        if(data.status == 200) {
        	var storage = window.localStorage;
        	storage.setItem('test', data.status);
        	storage.setItem('currentUserId', data.user_id);
        	storage.setItem('currentUserFname', data.f_name);
        	storage.setItem('currentUserLname', data.l_name);
        	storage.setItem('currentUserAcctNum', data.hsa_acct_num);
        	window.location = '../index.html';
        	//@TODO: need to cache user data somewhere...
        	//@TODO: Need to pass specific user data back from the server as well......
        } else {
        	window.alert("no matches found for provided username\n\tStatus: "
        	 + data.status + "\n\tMessage: " + data.statusText);
        		$("#container").css("opacity",1.0);

        }
    }).fail(function(err){
        console.log(err);               //if error, log to console
          
    }).then(function(){
		console.log("disabling loading spinner..");
		$('#loader').css( 'display', 'none').delay(1000);
	});

    // console.log("disabling loading spinner..");

	//$('#loader').css( 'display', 'none').delay(10000);

}

