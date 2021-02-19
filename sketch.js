
var garden, gardenimg;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;

function preload() {
    //load the images here
    gardenimg = loadAnimation("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500, 400, 1000, 800);
    garden.addAnimation("background", gardenimg);

    mouse = createSprite(200, 500, 100, 100);
    mouse.addAnimation("first", mouse1);
    mouse.addAnimation("second", mouse2);
    mouse.addAnimation("last", mouse3);
    mouse.scale = 0.1;

    cat = createSprite(800, 500, 100, 100);
    cat.addAnimation("firstone", cat1);
    cat.addAnimation("secondone", cat2);
    cat.addAnimation("lastone", cat3);    
    cat.scale = 0.1;
}
function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    background("black");
    

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.changeAnimation("lastone"); 
        cat.x = 250;   
        mouse.changeAnimation("last");    
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
            cat.velocityX = -5;
            cat.changeAnimation("secondone");
            mouse.changeAnimation("second");
    }
  //For moving and changing animation write code here


}


