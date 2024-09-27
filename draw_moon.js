/*
 � 2017
 made for http://www.abc2home.ru/
*/
var di=0, RL = 125,  fdelay=2000; //fdelay=2750;

var can = function () {
var canvas;
var ctx;
return {
   draw: function () {

 
	var imageObj = new Image();
	imageObj.src = "full_moon.png";
	var imageObjRF = new Image();
	imageObjRF.src = "moon_rf.png";
	var x = 2*RL;
	var radius=RL;
	//steps
	var az = dti*Math.PI*2; if (  dti>0 && dti<0.25)   {az=Math.asin(dti*4)* Math.sin(dti*2*Math.PI) };
	if (dti>0.25 && dti<0.5) {  az = Math.PI + Math.asin(-1+(dti-0.25)*4)*Math.sin(dti*2*Math.PI)  };
	if (dti>0.5 && dti<0.75) {  az = Math.PI - Math.asin((dti-0.5)*4)*Math.sin(dti*2*Math.PI)  };
	if (dti>0.75 && dti<1.0) {  az = Math.PI*2 - Math.asin(-1+(dti-0.75)*4)*Math.sin(dti*2*Math.PI)  };
	//az = az*di; //if (az==Math.PI/2) {az=1.5707963267};
	var r=RL*Math.sin(az);
	var cs = Math.cos(az);
	var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI+Math.PI; // End point on circle
    var y = RL; // y coordinate
	ctx.beginPath();
    ctx.drawImage(imageObj,0, 0, 2*RL, 2*RL);
	//ctx.fillStyle = "rgba(255,255,100,0.25)";

		//ctx.arc(100, 100, RL, startAngle, endAngle, true);
        ctx.fill();
	    //ctx.fillStyle = "rgba(0,50,150,0.25)";
	    ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.beginPath();

	    if ((r>0&&cs>0)) {x = (RL*RL/(RL-r)-RL+r)/2; // x coordinate
          radius = RL+x-r; // Arc radius
		  ctx.arc(RL-x, y, radius, startAngle, endAngle, true);
          ctx.fill();
		  }

		if ((r>=0&&cs<0)) {
		  x = (RL*RL/(RL-r)-RL+r)/2;
		  radius = RL+x-r;
		  ctx.arc(RL, y, RL,-Math.PI/2,  Math.PI/2, true);
		  ctx.arc(RL+x, y, radius, startAngle, endAngle, false);
		  //ctx.bezierCurveTo(100,0, 100+x-radius, y, 100,200);
		  ctx.fill();
		  ctx.drawImage(imageObjRF,RL, 0, RL, 2*RL);
		  }

		if (r<0&&cs>0) {x = (RL*RL/(RL+r)-RL-r)/2;
		    radius = RL+x+r;
		    ctx.arc(RL+x, y, radius, startAngle, endAngle, true);
            ctx.fill();
			}

		if (r<0&&cs<0){
		  x = (RL*RL/(RL+r)-RL-r)/2; radius = RL+x+r;
		  ctx.arc(RL-x, y, radius, Math.PI/2,-Math.PI/2, true)
		  ctx.arc(RL, y, RL,-Math.PI/2, Math.PI/2, false);
		  //ctx.stroke();
		  ctx.fill();
		  };

		  di=di+dti;
   },
   init: function () {
   canvas = document.getElementById("MnCan");
   ctx = canvas.getContext("2d");

   ctx.translate(0, 0);

	//ctx.fillStyle = "rgba(0,50,150,1)";
	//ctx.fillRect(0, 0, 2*RL, 2*RL);

setInterval(can.draw, fdelay);
   }
}
} ();
can.init();
