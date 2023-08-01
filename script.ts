function FormatarNumero(numero: number, casasDecimais: number) {
  return numero.toLocaleString(undefined, {
    minimumFractionDigits: casasDecimais,
    maximumFractionDigits: casasDecimais,
    style: 'currency',
    currency: 'BRL'
  });
}

function Teste() {
  var inputName = document.getElementById('input-name');
  var valorInputName = inputName.value;
  var inputValor = document.getElementById('input-valor');
  var valorInputValor = inputValor.value;
  var valor = parseFloat(valorInputValor);
  var Minhalista = document.getElementById('minhaLista');
  var li = document.createElement('li');
  Minhalista.appendChild(li);
  var Li_div = document.createElement('div');
  Li_div.classList.add('content-li');
  li.appendChild(Li_div);
  var div_content_li_title = document.createElement('div');
  div_content_li_title.classList.add('contente-li-title-name');
  div_content_li_title.textContent = valorInputName;
  Li_div.appendChild(div_content_li_title);
  var div_contente_li_title_valor = document.createElement('div');
  div_contente_li_title_valor.classList.add('contente-li-title-valor');
  var span = document.createElement('span');
  var format = formatarNumero(parseFloat(valorInputValor), 2)
  span.textContent = format
  if (valor > 0) {
      span.classList.add('title-trans');
  }
  else {
      span.classList.add('title-trans-red');
  }
  div_contente_li_title_valor.appendChild(span);
  Li_div.appendChild(div_contente_li_title_valor);
}

var Soma2 = 0;
var Soma = 0;
function Entradas() {
  var inputValor = document.getElementById('input-valor');
  var ValueInputValor = inputValor.value.trim();
  var Rrendas = document.querySelector('.Rrendas');
  if (ValueInputValor > '0') {
      var valorNumerico = parseFloat(ValueInputValor);
      if (valorNumerico > 0) {
          Soma += valorNumerico;
          const numeroFormatado = formatarNumero(Soma, 2);
         return Rrendas.textContent = numeroFormatado
      }
  }
}


function Saidas() {
  var inputValor = document.getElementById('input-valor');
  var ValueInputValor = inputValor.value.trim();
  var Rdespesas = document.querySelector('.Rdepesas');
  if (ValueInputValor < '0'){
      var valorNumerico = parseFloat(ValueInputValor);
      if (valorNumerico < 0) {
          Soma2 += valorNumerico;
          const numeroFormatado = formatarNumero(Soma2, 2);
          return Rdespesas.textContent = numeroFormatado
      }
  }
}
function Total() {
  var Total = document.querySelector('.color-title');
  var ValorTotal = Soma + Soma2;
  var format = formatarNumero(ValorTotal, 2)
 return Total.textContent = format
}
function Transacao() {
  Entradas();
  Saidas();
  Total();
}
function Veri() {
  var inputName = document.getElementById('input-name');
  var ValueInputName = inputName.value;
  var inputValor = document.getElementById('input-valor');
  var ValueInputValor = inputValor.value;
  if (ValueInputName === '') {
      alert('preencha todos os campos');
  }
  else if (ValueInputValor === '') {
      alert("Preencha o campo");
  }
  else {
      Teste();
      Transacao();
      var inputName_1 = document.getElementById('input-name');
      inputName_1.value = '';
      var inputValor_1 = document.getElementById('input-valor');
      inputValor_1.value = '';
  }
}
