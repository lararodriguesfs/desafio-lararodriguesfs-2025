class AbrigoAnimais {
  constructor() {
    this.animais = {
      'Rex': { tipo: 'cao', brinquedos: ['RATO', 'BOLA'] },
      'Mimi': { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
      'Fofo': { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
      'Zero': { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
      'Bola': { tipo: 'cao', brinquedos: ['CAIXA', 'NOVELO'] },
      'Bebe': { tipo: 'cao', brinquedos: ['LASER', 'RATO', 'BOLA'] },
      'Loco': { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
    }
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    var pessoa1 = this.parseEntrada(brinquedosPessoa1);
    var pessoa2 = this.parseEntrada(brinquedosPessoa2);
    var ordem = this.parseEntrada(ordemAnimais);

    if (this.temDuplicados(pessoa1) || this.temDuplicados(pessoa2)) {
      return { erro: 'Brinquedo inválido' };
    }
    if (this.temDuplicados(ordem)) {
      return { erro: 'Animal inválido' };
    }

    var resultado = [];
    var adotadosPessoa1 = 0;
    var adotadosPessoa2 = 0;

    for (var j = 0; j < ordem.length; j++) {
      var animalNome = ordem[j];
      var animal = this.animais[animalNome];

      if (!animal) return { erro: 'Animal inválido' };

      var podePessoa1 = this.verificarOrdem(pessoa1, animal.brinquedos, animalNome);
      var podePessoa2 = this.verificarOrdem(pessoa2, animal.brinquedos, animalNome);

      var destino = animalNome + ' - abrigo';

      // regra Loco
      if (animalNome === 'Loco') {
        if (podePessoa1 && adotadosPessoa1 < 3) {
          destino = animalNome + ' - pessoa 1';
          adotadosPessoa1++;
        } else if (podePessoa2 && adotadosPessoa2 < 3) {
          destino = animalNome + ' - pessoa 2';
          adotadosPessoa2++;
        }
      } else if (podePessoa1 && !podePessoa2 && adotadosPessoa1 < 3) {
        destino = animalNome + ' - pessoa 1';
        adotadosPessoa1++;
      } else if (!podePessoa1 && podePessoa2 && adotadosPessoa2 < 3) {
        destino = animalNome + ' - pessoa 2';
        adotadosPessoa2++;
      } else if (podePessoa1 && podePessoa2) {
        
        if (animal.tipo === 'gato') {
          destino = animalNome + ' - abrigo';
        } else {
          if (adotadosPessoa1 < 3) {
            destino = animalNome + ' - pessoa 1';
            adotadosPessoa1++;
          } else if (adotadosPessoa2 < 3) {
            destino = animalNome + ' - pessoa 2';
            adotadosPessoa2++;
          }
        }
      }

      resultado.push(destino);
    }

    resultado.sort(function(a, b) {
      var nomeA = a.split(' - ')[0];
      var nomeB = b.split(' - ')[0];
      if (nomeA < nomeB) return -1;
      if (nomeA > nomeB) return 1;
      return 0;
    });

    return { lista: resultado };
  }

  parseEntrada(texto) {
    var array = [];
    var temp = '';
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] === ',') {
        array.push(temp);
        temp = '';
      } else {
        temp += texto[i];
      }
    }
    array.push(temp);
    return array;
  }

  temDuplicados(array) {
    var vistos = {};
    for (var i = 0; i < array.length; i++) {
      if (vistos[array[i]]) return true;
      vistos[array[i]] = true;
    }
    return false;
  }

  verificarOrdem(brinquedosPessoa, brinquedosAnimal, animalNome) {
    if (animalNome === 'Loco') {
      for (var i = 0; i < brinquedosAnimal.length; i++) {
        var tem = false;
        for (var j = 0; j < brinquedosPessoa.length; j++) {
          if (brinquedosPessoa[j] === brinquedosAnimal[i]) {
            tem = true;
            break;
          }
        }
        if (!tem) return false;
      }
      return true;
    }

    var index = 0;
    for (var i = 0; i < brinquedosPessoa.length; i++) {
      if (brinquedosPessoa[i] === brinquedosAnimal[index]) index++;
      if (index === brinquedosAnimal.length) return true;
    }
    return false;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
