const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
const container = document.querySelector('.container');
const div = document.createElement('div');
container.appendChild(div)
for (i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    const createdElement = document.createElement(tag)
    createdElement.innerHTML = texto
    div.appendChild(createdElement)
}
