$("document").ready(function(){
	
	
	$("#texto").on("click",function(){
		$("#texto").css("color","green");
		
		
	});
	
	$("#texto").hover(function(){
		$("#texto").css("color","red");
		$("#texto").css("font-size","30px");
		$("#texto").css("opacity","0.5");
		
	});
	
	$("#texto").mouseout(function(){
		
		$("#texto").css("color","blue");
		$("#texto").css("font-size","45px");
		$("#texto").css("opacity","2");
		
	});
	
	
});/*si para que empieje a utilizar jquery*/
