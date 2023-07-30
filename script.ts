function teste(): void {
   const inputName: string = document.getElementById('input-name').value;
   const inputValor: number = parseFloat(document.getElementById('input-valor').value);
   const minhalista: HTMLUListElement = document.getElementById('minhaLista') as HTMLUListElement;
   const li: HTMLLIElement = document.createElement('li');
   minhalista.appendChild(li);
 
   const Li_div: HTMLDivElement = document.createElement('div');
   Li_div.classList.add('content-li');
   li.appendChild(Li_div);
 
   const div_content_li_title: HTMLDivElement = document.createElement('div');
   div_content_li_title.classList.add('contente-li-title-name');
   div_content_li_title.textContent = inputName;
   Li_div.appendChild(div_content_li_title);
 
   const div_contente_li_title_valor: HTMLDivElement = document.createElement('div');
   div_contente_li_title_valor.classList.add('contente-li-title-valor');
   const span: HTMLSpanElement = document.createElement('span');
   span.textContent = `R$ ${inputValor}`;
   if (inputValor > 0) {
     span.classList.add('title-trans');
   } else {
     span.classList.add('title-trans-red');
   }
   div_contente_li_title_valor.appendChild(span);
   Li_div.appendChild(div_contente_li_title_valor);
 
   transacao();
 }
 
 let soma: number = 0;
 let soma2: number = 0;
 
 function entradas(): void {
   const inputValor: number = parseFloat(document.getElementById('input-valor').value.trim());
   const Rrendas: HTMLSpanElement = document.querySelector('.Rrendas') as HTMLSpanElement;
   if (inputValor > 0) {
     const valorNumerico: number = parseFloat(inputValor.toString());
     if (valorNumerico > 0) {
       soma += valorNumerico;
       document.getElementById('input-valor').value = '';
       document.getElementById('input-name').value = '';
       Rrendas.textContent = `+R$ ${soma}`;
     }
   }
 }
 
 function saidas(): void {
   const inputValor: number = parseFloat(document.getElementById('input-valor').value.trim());
   const Rdespesas: HTMLSpanElement = document.querySelector('.Rdepesas') as HTMLSpanElement;
   if (inputValor < 0) {
     const valorNumerico: number = parseFloat(inputValor.toString());
     if (inputValor < 0) {
       soma2 += valorNumerico;
       Rdespesas.textContent = `+R$ ${soma2}`;
     }
   }
 }
 
 function transacao(): void {
   entradas();
   saidas();
   total();
 }
 
 function total(): void {
   const total: HTMLSpanElement = document.querySelector('.color-title') as HTMLSpanElement;
   const valorTotal: number = soma + soma2;
   total.textContent = `R$ ${valorTotal}`;
 }
 