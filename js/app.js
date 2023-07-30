
function teste(){
   const inputName = document.getElementById('input-name').value
   const inputValor = document.getElementById('input-valor').value 
   const minhalista = document.getElementById('minhaLista')
   const li = document.createElement('li');
   minhalista.appendChild(li)

   const Li_div = document.createElement('div')
   Li_div.classList.add('content-li')
   li.appendChild(Li_div)

   const div_content_li_title = document.createElement('div')
   div_content_li_title.classList.add('contente-li-title-name')
   div_content_li_title.textContent = inputName
   Li_div.appendChild(div_content_li_title)

   const div_contente_li_title_valor = document.createElement('div')
   div_contente_li_title_valor.classList.add('contente-li-title-valor')
   const span = document.createElement('span')
   span.textContent = `R$ ${inputValor}`
   if(inputValor > 0 ){
      span.classList.add('title-trans')
   }else{
      span.classList.add('title-trans-red')
   }
   div_contente_li_title_valor.appendChild(span)
   Li_div.appendChild(div_contente_li_title_valor)

}

function veri(){
   const inputName = document.getElementById('input-name').value
   const inputValor = document.getElementById('input-valor').value 
   if(inputName === ''){
    alert('preencha todos os campos')
   }else if( inputValor === ''){
      alert("Preencha o campo")
   }else{
      teste()
      transacao()
      document.getElementById('input-valor').value = ''
      document.getElementById('input-name').value = ''
   }
}

let soma = 0;
let soma2 = 0;

function entradas() {
  const inputValor = document.getElementById('input-valor').value.trim();
  const Rrendas = document.querySelector('.Rrendas')
  if (inputValor > 0 ) {
    const valorNumerico = parseFloat(inputValor);
    if (valorNumerico > 0) {
      soma += valorNumerico;
      return Rrendas.textContent = `+R$ ${soma}`
    }
  }
}

function saidas() {
  const inputValor = document.getElementById('input-valor').value.trim();
  const Rdespesas = document.querySelector('.Rdepesas')
   if(inputValor < 0){
      const valorNumerico = parseFloat(inputValor);
      if (inputValor < 0 ) {
         const valorNumerico = parseFloat(inputValor);
         soma2 += valorNumerico;
         return Rdespesas.textContent =`+R$ ${soma2}`
      }
   }
  }

  function transacao(){
   entradas()
   saidas()
   total()
  }

function total (){
   const total = document.querySelector('.color-title')
   valorTotal = soma + soma2
   return total.textContent = `R$ ${valorTotal}`
}
