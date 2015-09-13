function submitInterest() {
	var emailField = $("#emailField").val();
	var serializedData = { "EMAIL" : emailField };

	if (emailField.trim()) {
		$.post("php/insertInterest.php", serializedData, function(response) {
    		$("#thanksContainer").html("<div id='thanksDialog' class='center'>Thanks! We'll be in touch.</div>");
			$("#thanksDialog").fadeIn("slow").delay(4000).fadeOut("fadeOut");
		}, "text");
	}
}