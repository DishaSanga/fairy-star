var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody,ground;
let value=0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);

	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	//fill(value)
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
var star_prop={
	isStatic:true
}
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, star_prop});
	World.add(world, starBody);
	
	Engine.run(engine);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 600,
		  height: 800,
		  wireframes: false
		}
	})
	//Render.run(render);
}


function draw() {
  background(bgImg);

star.x=starBody.position.x
	star.y=starBody.position.y
	if(keyDown(RIGHT_ARROW)){
		fairy.x=fairy.x+15;
	}
	if(keyDown(DOWN_ARROW)){
		Matter.Body.setStatic(starBody,false)
	}
		
	
	
if(star.y>475 && starBody.position.y>475 ){
	Matter.Body.setStatic(starBody,true)
}
fairyVoice.play()
  drawSprites();
}

	
