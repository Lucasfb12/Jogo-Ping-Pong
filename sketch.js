//Variavéis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Velocidade da Bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Variáveis Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variáveis Oponente
let xRaqueteoponente = 585;
let yRaqueteoponente = 150; 
let velocidadeYOponente;
let comprimentoponente = 10;
let raqueteoponentealtura = 90;

let colidiu = false;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(10);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  criaraquete(xRaquete,yRaquete);
  movimentaminharaquete();
  //colisaoMinhaRaqueteBiblioteca();
  verificarcolisao();
  criaraquete(xRaqueteoponente, yRaqueteoponente);
  movimentaRaqueteOponente();
  verificacolisaoraquete(xRaqueteoponente, yRaqueteoponente);
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha () {
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha() {
   
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function colisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0) {
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio> height ||
     yBolinha - raio< 0){
    velocidadeyBolinha *= -1;
  }
}

function criaraquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura)
}

function movimentaminharaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteoponente - raqueteComprimento / 2 - 30;
    yRaqueteoponente += velocidadeYOponente
}

function verificarcolisao(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
       velocidadexBolinha *= -1;
    }
}

function verificacolisaoraquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
      velocidadexBolinha *= -1;
    }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}