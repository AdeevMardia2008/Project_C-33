var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var ground;
var division1, division2, division3, division4, division5;
var particle;
var line;

var divisionHeight=300;
var score = 0;
var turn = 0;

var gameState = start;

function setup() 
{
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  ground = new Ground(240,780,480,25);
  division = new Division(240,200,10,400);
  plinko = new Plinko(240,600,10);

  line = new(280,100,800,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {

  background("black");

  textSize(20)
 text("Score : "+score,20,30);

 text("500",500,100);
 text("500",500,200);
 text("500",500,300);
 text("100",500,400);
 text("100",500,500);
 text("200",500,600);
 text("200",500,700);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed()
{
if (gameState !== "end") 
{
    score++;
    particle = new Particle(mouseX,10,10,10);
}
    if (particle!=null)
    {
        particle.display();

        if (particle.body.position.y>760)
        {
          if (particle.body.particle.x<300)
           {
              score = score+500;
              particle = null;
              if (count>=5) gameState="end";
           }
        }
    }
}

















