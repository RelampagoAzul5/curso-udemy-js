const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi (){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', (e) =>{
    if (e.keyCode === 13){
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
});

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click',(e) =>{
    const el = e.target;
    if (el.classList.contains('apagar') ){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}
function adicionaTaredasSalvas (){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

adicionaTaredasSalvas();
