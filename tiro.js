function Tiro(context, bulba, imagem)  {
    this.context = context;
    this.bulba = bulba;
    this.imagem = imagem;
    this.largura = 32;
    this.altura = 32;
    this.x = bulba.x + (bulba.sheet.imagem.width / bulba.sheet.numColunas) / 2 - this.largura / 2;
    this.y = bulba.y - this.altura;
    this.velocidade = 10;
    this.angulo = 0;
}
Tiro.prototype = {
    atualizar: function() {
        this.y -= this.velocidade;
        this.angulo += 0.2; // Faz a folha rodar
    },
    desenhar: function() {
        var ctx = this.context;
        ctx.save();
        ctx.translate(this.x + this.largura / 2, this.y + this.altura / 2);
        ctx.rotate(this.angulo);
        ctx.drawImage(this.imagem, -this.largura / 2, -this.altura / 2, this.largura, this.altura);
        ctx.restore();
    }
}