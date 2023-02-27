const paragraph = document.querySelector('p')

paragraph.innerText = 'Hello word'
// Define o texto que ficará no elemento

console.log(paragraph.innerText)
//Recupero o texto visível dentro do elemento
// Hello world

console.log(paragraph.innerHTML)
// Retorna o elemento html com seu conteúdo e ESPAÇOS como o pre
// <p>Hello world</p>

paragraph.innerHTML = '<h2>Novo elemento html dentro de "p"</h2>'
// Isso inclui dentro das tagas <p>Hello world</p> a tag
// <h2>Novo elemento html dentro de "p"</h2>
// e se tivesse mais algum elemento dentro de <p> eles
// seriam deletados a menos que vc use o +=

//----------------------------------------------

const link = document.querySelector('a')

console.log(link.innerHTML)
// <a href="www.site.com/index.html">Link para página</a>

console.log(link.getAttribute('href'))
// href="www.site.com/index.html

link.setAttribute('href', 'www.google.com')
// Configura um novo valor para o atributo href

console.log(link.getAttribute('href'))
// www.google.com

link.setAttribute('style', 'color: green;')
// CRIA o atributo style no link
//<a style="color: grenn;" href="www.site.com/index.html">Link para página</a>
// QUALQUER atributo style que existe é sobreescrito

//----------------------------------------------


<a style="color: grenn;" href="www.site.com/index.html">Link para página</a>

const link = document.querySelector('a')

console.log(link.style)
// Retorna todas as propriedades css que pode ser usadas

console.log(link.style.color)
// Retorna o valor da propriedade color
//grenn

link.style.margin = '50px'
// Inclui esta nova propriedade sem sobreescrever outras
//<a style="color: grenn; margin: 50px" href="www.site.com/index.html">Link para página</a>
// Não sobreescreve mas pode alterar

link.style.color = 'blue'
// Altera a propriedade color de grenn para blue
//<a style="color: blue; margin: 50px" href="www.site.com/index.html">Link para página</a>

link.style.fontSize = '12px'
// o estilo tem duas palavras como font-size
// retirase o hífen e usa camelCase fontSize


//----------------------------------------------

<p class="class1 class2 classe"> Texto </p>

const link = document.querySelector('a')

console.log(link.classList)
// Retorna:
// DOMTokenList - novamente parecido com um array
// com as tres classes registradas class1 class2 class3

link.classList.add('class4')
// adiciona mais uma classe a tag

link.classList.remove('class1')
// Remove uma classe

console.log(link.innerText)
//Recupero o texto visível dentro do elemento
// Hello world
// O Elemento não estivesse visível, por algum motivo
// o texto não seria recuperado

console.log(link.textContent)
// Solução

 //-----

link.classList.toggle('classe')
// SE o elemento NÃO POSSUI a class classe o código inclue est classe
// SE o elemento POSSUI e retira a claas


