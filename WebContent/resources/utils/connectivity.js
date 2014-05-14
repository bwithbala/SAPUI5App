
//Root URL for the service

function getUrl(sUrl){
	if (sUrl == " ")
		return sUrl;
	if ( window.location.hostname == "localhost" || window.location.hostname == "http://sapsl2.us.tycoelectronics.com:8068") 
	{
		return "proxy" + sUrl;
    }else {
    	return sUrl;
    }
};

//var serviceUrl = getUrl( '/sap/opu/odata/sap/ZMM_SO_EXT_SRV/' ); 

//var serviceUrl = "http://sapsl2.us.tycoelectronics.com:8068/sap/opu/odata/sap/ZMM_SO_EXT_SRV/";
var serviceUrl = "proxy/sap/opu/odata/sap/ZMM_SO_EXT1_SRV/";



