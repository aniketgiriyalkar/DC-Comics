window.onload = canvas;
 
function canvas()
{
	var myCanvas = document.getElementById("canvas");
 
	if( myCanvas && myCanvas.getContext("2d") ) 
	{
		var context = myCanvas.getContext("2d");
                context.shadowColor="green";
                context.shadowOffsetX =-10;
                context.shadowOffsetY = 10;
                context.shadowBlur = 7;
                  
		var myString = "LOGAN";
		context.font = "40px arial strong";
		context.textAlign = "bottom";
		context.strokeStyle = "black";
		context.fillStyle = "blue";
		context.textBaseline = "bottom";
		context.fillText(myString, 580, 100, 150);
		context.strokeText(myString,580,100, 150);
 	
	}
}