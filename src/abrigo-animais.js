class AbrigoAnimais {
  constructor() {

    this.animais = {
      'Rex': {tipo: 'cao', brinquedos: ['RATO', 'BOLA']},
      'Mimi': {tipo: 'gato', brinquedos: ['RATO', 'LASER']},
      'Fofo': {tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER']},
      'Zero': {tipo: 'gato', brinquedos: ['RATO', 'BOLA']},
      'Bola': {tipo: 'cao', brinquedos: ['CAIXA', 'NOVELO']},
      'Bebe': {tipo: 'cao', brinquedos: ['LASER', 'RATO', 'BOLA']},
      'Loco': {tipo: 'jabuti', brinquedos: ['SKATE', 'RATO']}
    }
  }


encontrarPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
   var pessoa1 = this.parseEntrada(brinquedosPessoa1);
   var pessoa2 = this.parseEntrada(brinquedosPessoa2);
   var ordem = this.parseEntrada(ordemAnimais);

}

}