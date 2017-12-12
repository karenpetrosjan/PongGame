const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const backImage = new Image();
backImage.src= "http://www.powerpointhintergrund.com/uploads/2017/05/christmas-background-23.jpeg";

const RectsIntersection = function(rect1X, rect1Y, rect1W, rect1H, rect2X, rect2Y, rect2W, rect2H) { 
    return rect1X < rect2X + rect2W && rect1X + rect1W > rect2X && rect1Y < rect2Y + rect2H && rect1H + rect1Y > rect2Y;
  };
const kordinatner =	{       
			x: 600,
			y: 350,
			width: 30,
			height:	30,
			xDelta: 5,
			yDelta: 5,
			color: "red"
		};
  
const gamer1 = {     
  		x: 20,
  		y:10,
  		width:30,
  		height:70,
  		score: 0
  };
const gamer2 = { 
  	x: 1150,
  	y: 10,
  	width:30,
  	height:70,
  	score: 0
  };
const draw = function(){  
context.clearRect(0,0,canvas.width,canvas.height);
		  context.drawImage(backImage, 0, 0, canvas.width, canvas.height); 
		  context.fillStyle = kordinatner.color; 
		context.fillRect(kordinatner.x,kordinatner.y, kordinatner.width,kordinatner.height);  
		context.fillRect(gamer1.x,gamer1.y,gamer1.width,gamer1.height);  
		context.fillRect(gamer2.x,gamer2.y,gamer2.width,gamer2.height); 
		context.font = "50px Arial"; 
    	context.fillText(gamer1.score, 350,50); 
    	 context.fillText(gamer2.score, 850,50);  
  };
  const updateData = function(){
		  if(kordinatner.x >= canvas.width-kordinatner.width){ 
			kordinatner.x=gamer2.x-kordinatner.width;
			kordinatner.y=gamer2.y;
			gamer1.score++; 
			kordinatner.xDelta = -kordinatner.xDelta; 
		}else if(kordinatner.x<=0){ 
			kordinatner.x=gamer1.x+gamer1.width;
			kordinatner.y=gamer1.y;
			gamer2.score++;
			kordinatner.xDelta = -kordinatner.xDelta;
		}
		if(kordinatner.y >= canvas.height-kordinatner.height){ 
			kordinatner.yDelta = -kordinatner.yDelta;
		}else if(kordinatner.y<=0){
			kordinatner.yDelta = -kordinatner.yDelta;
		}
		
		kordinatner.x =	kordinatner.x + kordinatner.xDelta;
		kordinatner.y = kordinatner.y + kordinatner.yDelta;


    if(RectsIntersection(gamer1.x,gamer1.y,gamer1.width,gamer1.height,kordinatner.x,kordinatner.y,kordinatner.width,kordinatner.height)){
        kordinatner.xDelta = - kordinatner.xDelta;
      }else if(RectsIntersection(gamer2.x,gamer2.y,gamer2.width,gamer2.height,kordinatner.x,kordinatner.y,kordinatner.width,kordinatner.height)){
        kordinatner.xDelta = - kordinatner.xDelta;
      } 
		
  };
  

const loop = function(){
    
    draw();
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();
  const upKey = 38; 
  const downKey = 40;
  const w = 87;
  const s = 83;
   document.addEventListener('keydown', function(event) {
    event.preventDefault();
  
    if(event.keyCode === upKey) { 
      if(gamer1.y>= 0 && gamer1.y<= canvas.height-gamer1.height) {
        gamer1.y= gamer1.y - 15;
      }		
      else if(gamer1.y<3){gamer1.y=3;}
    }
    else if(event.keyCode === downKey){  
      if(gamer1.y>= 0 && gamer1.y<= canvas.height-gamer1.height) {
        gamer1.y= gamer1.y +  15;      }
      else if(gamer1.y>=canvas.height-gamer1.height){gamer1.y=canvas.height-gamer1.height;}
    }
  }, false);

     document.addEventListener('keydown', function(event) {
     	   event.preventDefault();
   if(event.keyCode === w){
   	if(gamer2.y>= 0 ) {
        gamer2.y= gamer2.y - 15;
      	}
      	else if(gamer2.y<3){gamer2.y=3;}
      }	
   else if(event.keyCode === s){
      if(gamer2.y>= 0 && gamer2.y<= canvas.height-gamer2.height) {
        gamer2.y= gamer2.y +  15;      }
    }
   
  }, false);