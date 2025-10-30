function Bulba(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;

    // Spritesheet: 1 linha, 4 colunas
    this.sheet = new Spritesheet(context, imagem, 1, 4);
    this.sheet.intervalo = 100;

    this.andando = false;
}

Bulba.prototype = {
    atualizar: function() {
        this.andando = false;

        if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
            this.x -= this.velocidade;
            this.andando = true;
        }
        if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - (this.sheet.imagem.width / this.sheet.numColunas)) {
            this.x += this.velocidade;
            this.andando = true;
        }
        if (this.teclado.pressionada(SETA_CIMA) && this.y > 0) {
            this.y -= this.velocidade;
            this.andando = true;
        }
        if (this.teclado.pressionada(SETA_BAIXO) && this.y < this.context.canvas.height - (this.sheet.imagem.height / this.sheet.numLinhas)) {
            this.y += this.velocidade;
            this.andando = true;
        }

        if (this.andando) {
            this.sheet.linha = 0; // única linha
            this.sheet.proximoQuadro();
        } else {
            this.sheet.linha = 0;
            this.sheet.coluna = 0; // parado no primeiro quadro
        }
    },
    desenhar: function() {
        this.sheet.desenhar(this.x, this.y);
    },
    atirar: function() {
        var t = new Tiro(this.context, this, window.imgFolha);
        this.animacao.novoSprite(t);
        this.colisor.novoSprite(t);
    },
    retangulosColisao: function() {
        return [{ x: this.x, y: this.y, largura: 51, altura: 59 }];
    },
    colidiuCom: function(outro) {
        if (outro instanceof Patrat) {
            this.animacao.desligar();
            alert("Perdeste!");
        }
    }
}