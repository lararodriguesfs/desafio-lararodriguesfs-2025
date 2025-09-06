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

  var pessoa10k = this.verificarOrdem(pessoa1, animal.brinquedos, animalNome);
  var pessoa20k = this.verificarOrdem(pessoa2, animal.brinquedos, animalNome);

  var destino = animalNome + ' -abrigo';

  if (pessoa10k && !pessoa20k && adotadosPessoa1 < 3) {
    destino = animalNome + ' -pessoa 1';
    adotadosPessoa1++;
  }else if(pessoa10k && pessoa20k) {
    if(animal.tipo === 'gato') {
      destino = animalNome + ' - abrigo';
    }else if(animalNome === 'Loco') {
      if (adotadosPessoa1 > 0 && adotadosPessoa1 < 3) {
        destino = animalNome + ' - pessoa 1';
        adotadosPessoa1++;
      } else if (adotadosPessoa2 > 0 && adotadosPessoa2 < 3) {
        destino = animalNome + ' - pessoa 2';
        adotadosPessoa2++;
      }else {
        destino = animalNome + ' - abrigo';
      }
    } else {
      destino = animalNome + ' - abrigo';
    }
 
  }
  resultado.push(destino);
  }

  return {lista : resultado};
}

parseEntrada(texto){
  var array = [];
  var tempo = '';

  for (var i = 0; i < texto.length; i++) {
    if(texto[i] === ',') {
      array.push(tempo);
      tempo = '';
    } else {
      tempo += texto[i];
    }
  }
   array.push(tempo);
   return array;
}

temDuplicados(array) {
  var vistos = {};
  for (var i = 0; i < array.length; i++) {
    if (vistos[array[i]]){
      return true;
    }
    vistos[array[i]] = true;
  }
  return false;
}

}

export { AbrigoAnimais as AbrigoAnimais};









