var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(825,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(510, 580, 200, 30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(725, 580, 200, 30);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,800),100, 40,40);
    bola.shapeColor = rgb(5,255,25255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 7;
  bola.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX = 0;
      bola.velocityY = 0;

        music.stop();
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
    }

    //escreva o código de ricochete de bola para bloco4

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
    }

    drawSprites();
}