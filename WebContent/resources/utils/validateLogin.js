		var username;
		var password;

	function validateLogin() {
	
		//alert("Inside Validate Login");
		username = document.getElementById("username").value;
		password = document.getElementById("password").value;

		$("#username").fadeOut(1000);
		$("#password").fadeOut(1000);
		$("#login").fadeOut(1000);
		$("#content").fadeOut(1000);
		
		sap.ui.localResources("mmpart");
		
		jQuery.sap.require("mmpart.resources.utils.connectivity");
		
	//	alert("service URL:" + serviceUrl);
	//	alert("Username: " + username);
	//	alert("password: " + password);
		
		var oModel = new sap.ui.model.odata.ODataModel(serviceUrl,true, username, password);
		sap.ui.getCore().setModel(oModel);
		
//		oModel.attachRequestCompleted(function(oEvent){
			
//		});
		
		oModel.attachRequestFailed(function(oEvent){
			alert("failed");
			displayError({
				message: oEvent.getParameter("message"),
				responseText:oEvent.getParameter("responseText"), 
				statusCode:oEvent.getParameter("statusCode"), 
				statusText:oEvent.getParameter("statusText")
			});
		});


		oModel.attachParseError(function(oEvent){
			alert("in Parse failed");
			displayError({
				message: oEvent.getParameter("message"),
				responseText:oEvent.getParameter("responseText"), 
				statusCode:oEvent.getParameter("statusCode"), 
				statusText:oEvent.getParameter("statusText")
			});
		});	
		
		
		
		window.location.href="landing.html";
       
	}
	
	
	function changeBg(){
		
		alert("inside Change Bg");
    	$("#changeBg").fadeOut();			
 		$("#bgImageIp").fadeIn();
  		$("#bgImageBtn").fadeIn();
  		$("#bgImage").css("display","inline");  		
	
	}
	
	function doChangeBg(){
		alert("inside Apply Change Bg");
	    var	bgUrl = document.getElementById("bgImageIp").value;
	    alert("bgURL:" + bgUrl );

	    $("#background").css( "background-image","url(bgUrl)" );		
  		
  	 //    $("#background").css("background-image","url(http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-front-back.jpg)");  		

	    alert("Done Changing Background");
	}	
	

	
	function matnrSelected(){
		
		alert("Material Selection Selected");
 		$("#con").fadeIn();
  		$("#section").fadeIn();
  		$("#content1").fadeIn();
		
	}
	
	function extSelected(){
		
		alert("Extension Selected");
  		$("#con").fadeOut();
  		$("#section").fadeOut();
  		$("#content1").fadeOut();
	}
	
	function workflowSelected(){
		
		alert("Workflow Selected");
  		$("#con").fadeOut();
  		$("#section").fadeOut();
  		$("#content1").fadeOut();		
	}
	
	function statusSelected(){
		
		alert("Status Selected");
  		$("#con").fadeOut();
  		$("#section").fadeOut();
  		$("#content1").fadeOut();		
	}
	

	