//variaveis
var barco,barco_mov;
var fundo,bg;
var a,b,c,d;


//funcao de carregamento de arquivo
function preload(){
barco_mov = loadImage("barco.png");
bg = loadImage("fundo.jpg");


}

//funcao criacao e propriedades
function setup(){
    createCanvas(1000,1000);
    fundo = createSprite(500,200,1500,1500);
    fundo.addImage("stop",bg)
    fundo.scale = 1.5
    barco = createSprite(200,250,50,100);
    barco.addImage("mover",barco_mov);
    barco.scale = 0.5
    a = createSprite(1100,200,20,400);
    //a.visible = false;
    //b = createSprite(5,200,20,400);
    //c = createSprite(500,175,1200,10);
   // d = createSprite(500,358,1200,10);
}


//funcao que desenha e repete em frames
function draw(){
    //if (barco.isTouching(a)){
      //  barco.x = 200
    //}
   
   barco.velocityX = 2


    if (barco.x == 800 ){
        barco.x = 200
    }

    





drawSprites();
}