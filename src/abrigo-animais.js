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


encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
   var pessoa1 = this.parseEntrada(brinquedosPessoa1);
   var pessoa2 = this.parseEntrada(brinquedosPessoa2);
   var ordem = this.parseEntrada(ordemAnimais);


if (this.temDuplicados(pessoa1) || this.temDuplicados(pessoa2)) {
  return {erro: 'Brinquedo inválido'};
}
if (this.temDuplicados(ordem)) {
  return {erro: 'Animal inválido'};
}

var resultado = [];
var adotadosPessoa1 = 0;
var adotadosPessoa2 = 0;

for (var j = 0; j < ordem.length; j++) {
  var animalNome = ordem[j];
  var animal = this.animais[animalNome];

  if(!animal) {
    return {erro: 'Animal inválido'};
  }

}

}

}




