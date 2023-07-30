
function Teste(){
  const inputName: HTMLInputElement = document.getElementById('input-name') as HTMLInputElement;
  const valorInputName: string = inputName.value;
  
  const inputValor: HTMLInputElement = document.getElementById('input-valor')as HTMLInputElement;
  const valorInputValor: string = inputValor.value
  const valor: number = parseFloat(valorInputValor);

  const minhalista: HTMLUListElement = document.getElementById('minhaLista') as HTMLUListElement
  const li = document.createElement('li');
  minhalista.appendChild(li)

  const Li_div = document.createElement('div')
  Li_div.classList.add('content-li')
  li.appendChild(Li_div)

  const div_content_li_title = document.createElement('div')
  div_content_li_title.classList.add('contente-li-title-name')
  div_content_li_title.textContent = valorInputName
  Li_div.appendChild(div_content_li_title)

  const div_contente_li_title_valor = document.createElement('div')
  div_contente_li_title_valor.classList.add('contente-li-title-valor')
  const span = document.createElement('span')
  span.textContent = `R$ ${valorInputValor}`
  if(valor > 0 ){
     span.classList.add('title-trans')
  }else{
     span.classList.add('title-trans-red')
  }
  div_contente_li_title_valor.appendChild(span)
  Li_div.appendChild(div_contente_li_title_valor)
}


let Soma: number = 0;
let Soma2: number = 0;

function Entradas(){
  const inputValor: HTMLInputElement = document.getElementById('input-valor') as HTMLInputElement;
  const ValueInputValor: string = inputValor.value.trim();
  const Rrendas= document.querySelector('.Rrendas')  as HTMLSpanElement 
    if(ValueInputValor > '0'){
        const valorNumerico: number = parseFloat(ValueInputValor);
        if (valorNumerico > 0 ) {
          Soma += valorNumerico;
          return Rrendas.textContent =`+R$ ${Soma}`
        }
  }
}

function Saidas(){
 const inputValor: HTMLInputElement = document.getElementById('input-valor') as HTMLInputElement;
 const ValueInputValor: string = inputValor.value.trim();
 const Rdespesas= document.querySelector('.Rdepesas')  as HTMLSpanElement;
    if(ValueInputValor < '0'){
      const valorNumerico: number = parseFloat(ValueInputValor);
      if (valorNumerico < 0 ) {
          Soma2 += valorNumerico;
        return Rdespesas.textContent =`+R$ ${Soma2}`
      }
  }
}

function Total(){
  const Total: HTMLSpanElement = document.querySelector('.color-title') as HTMLSpanElement;
  const ValorTotal:number = Soma + Soma2;
  return Total.textContent = `R$ ${ValorTotal}`
}

function Transacao():void{
  Entradas()
  Saidas()
  Total()
}

function Veri(){
  const inputName: HTMLInputElement = document.getElementById('input-name') as HTMLInputElement
  const ValueInputName: string = inputName.value;

  const inputValor:HTMLInputElement  = document.getElementById('input-valor')  as HTMLInputElement
  const ValueInputValor: string = inputValor.value;

  if(ValueInputName === ''){
   alert('preencha todos os campos')
  }else if( ValueInputValor === ''){
     alert("Preencha o campo")
  }else{
     Teste();
     Transacao();
  }
}
