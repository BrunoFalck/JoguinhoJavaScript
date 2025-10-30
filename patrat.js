function Patrat(context, imagem) {
    this.context = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;

    this.sheet = new Spritesheet(context, imagem, 1, 4);
    this.sheet.intervalo = 150;
    this.largura = imagem.width / this.sheet.numColunas;
    this.altura = imagem.height / this.sheet.numLinhas;
}
Patrat.prototype = {
    atualizar: function() {
        this.y += this.velocidade;
        this.sheet.proximoQuadro();
    },
    desenhar: function() {
        this.sheet.desenhar(this.x, this.y);
    },
    retangulosColisao: function() {
        return [{ x: this.x, y: this.y, largura: 29, altura: 29 }];
    },
    colidiuCom: function(outro) {
        
    }
}