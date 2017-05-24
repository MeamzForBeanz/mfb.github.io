function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
		var tuser = document.getElementById('username');
	var tpass = document.getElementById('password');
	
	var coruser = "test";
	var corpass = "123";
	
		var testuser = "test";
	var testpass = "1234";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		

		
			window.alert("You are downloading " + user.value);
			window.open("http://download1074.mediafireuserdownload.com/qxaf2ca4gbsg/u7ix3r8bykqeddd/It+works%21.txt");
		
		} else {
		
			if(user.value == testuser) {
	
		if(pass.value == testpass) {
		
			window.alert("You are downloading " + tuser.value);
			window.open("http://download944.mediafireuserdownload.com/ntjh77damryg/64859wtpwdbi7k5/I+can+finally+sleep_cc3f29_3809294.jpg");
		
		}
	
	} else {
	
			window.alert("Incorrect");
	
	}

}		
	
	} else {
	
			window.alert("Incorrect");
	
	}

}