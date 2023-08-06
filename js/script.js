function FormatarNumero(numero, casasDecimais) {
    return numero.toLocaleString(undefined, {
      minimumFractionDigits: casasDecimais,
      maximumFractionDigits: casasDecimais,
      style: 'currency',
      currency: 'BRL'
    });
  }

function CreatLi() {
    const InputName = document.getElementById('input-name');
    const ValorInputUP = InputName.value.toUpperCase();

    const InputValor = document.getElementById('input-valor');
    const ValorInputValor = InputValor.value;
    const Valor = parseFloat(ValorInputValor);

    const Minhalista = document.getElementById('minhaLista');
    const Li = document.createElement('li');
    Minhalista.appendChild(Li);

    const Li_div = document.createElement('div');
    Li_div.classList.add('content-li');
    Li.appendChild(Li_div);

    const div_content_li_title = document.createElement('div');
    div_content_li_title.classList.add('contente-li-title-name');
    div_content_li_title.textContent = ValorInputUP;
    Li_div.appendChild(div_content_li_title);

    const div_contente_li_title_valor = document.createElement('div');
    div_contente_li_title_valor.classList.add('contente-li-title-valor');
    const Span = document.createElement('span');
    const Format = FormatarNumero(parseFloat(ValorInputValor), 2)
    Span.textContent = Format
    if (Valor > 0) {
        Span.classList.add('title-trans');
    }
    else {
        Span.classList.add('title-trans-red');
    }
    div_contente_li_title_valor.appendChild(Span);
    Li_div.appendChild(div_contente_li_title_valor);
}

let Soma2 = 0;
let Soma = 0;
function Entradas() {
    const InputValor = document.getElementById('input-valor');
    const ValueInputValor = InputValor.value.trim();
    const Rrendas = document.querySelector('.Rrendas');
    if (ValueInputValor > '0') {
        let valorNumerico = parseFloat(ValueInputValor);
        if (valorNumerico > 0) {
            Soma += valorNumerico;
            const numeroFormatado = FormatarNumero(Soma, 2);
            return Rrendas.textContent = numeroFormatado
        }
    }
}


function Saidas() {
    const InputValor = document.getElementById('input-valor');
    const ValueInputValor = InputValor.value.trim();
    const Rdespesas = document.querySelector('.Rdepesas');
    if (ValueInputValor < '0'){
        let valorNumerico = parseFloat(ValueInputValor);
        if (valorNumerico < 0) {
            Soma2 += valorNumerico;
            const numeroFormatado = FormatarNumero(Soma2, 2);
            return Rdespesas.textContent = numeroFormatado
        }
    }
}


function Transacao() {
    Entradas();
    Saidas();
    Total();

}

function Total() {
    const TotalElement = document.querySelector('.color-title');
    const ValorTotal = Soma + Soma2;
    const format = FormatarNumero(ValorTotal, 2)
    return TotalElement.textContent = format

}

  function LimparFormulario(){
    const InputNameValue = document.getElementById('input-name');
    InputNameValue.value = '';
    const InputValorValue = document.getElementById('input-valor');
    InputValorValue.value = '';
  }

function Verificao() {
    const InputName = document.getElementById('input-name');
    const ValueInputName = InputName.value;
    const InputValor = document.getElementById('input-valor');
    const ValueInputValor = InputValor.value;
    if (!ValueInputName) {
        alert('preencha todos os campos');
    }
    else if (!ValueInputValor) {
        alert("Preencha o campo");
    }
    else {
        CreatLi();
        Transacao();
        LimparFormulario()
    }
}
