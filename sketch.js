const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    var response = await fetch("worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    
    console.log(responseJSON);
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13)

    console.log(datetime+"  " + hour)
    
    if(hour>=07 && hour<=8.25){
        bg = "sunrise1.png";
    }else if(hour>=8.26 && hour<=9.5){
        bg = "sunrise2.png";
    }else if(hour>=9.51 && hour<=10.75){
        bg = "sunrise3.png";
    }else if(hour>=10.76 && hour<=12){
        bg = "sunrise4.png";
    }else if(hour>=12.01 && hour<=13.25){
        bg = "sunrise5.png";
    }else if(hour>=13.26 && hour<=16){
        bg = "sunrise6.png";
    }else if(hour>=16.01 && hour<=18){
        bg = "sunset8.png";
    }else if(hour>=18.01 && hour<=20){
        bg = "sunset9.png";
    }else if(hour>=20.01 && hour<=22){
        bg = "sunset10.png";
    }else if(hour>=22.01 && hour<=00){
        bg = "sunset11.png";
    }else if(hour>=0.01 && hour<=2){
        bg = "sunset12.png";
    }
    
    backgroundImg = loadImage(bg);
}
