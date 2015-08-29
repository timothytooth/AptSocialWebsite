function submitInterest() {
	var emailField = $("#emailField").val();
	var serializedData = { "EMAIL" : emailField };

	$.post("php/insertInterest.php", serializedData, function(response) {
    	// Log the response to the console
    	console.log("Response: "+response);
	}, "text");
}