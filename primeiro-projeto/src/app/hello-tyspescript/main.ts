var minhaVar = 'minha variavel';

function minhaFunc(x, y){
  return x + y;
}
//ES 6 OU ES 2015
let num = 2;
const PI =3.14;

var numeros = [1,2,3];
numeros.map(function (valor){ //vensao usando function
  return valor * 2;
});

numeros.map(valor => valor * 2);//versao que simplifica a function, mas o resultado é o mesmo

class Matematica {
  soma(x, y){
    return x +y;
  }
}
var n1:any = 'hiahsi';
n1 = 4;
