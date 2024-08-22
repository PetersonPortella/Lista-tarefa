let contador = 0;
let input = document.getElementById('input-add');
let btn = document.getElementById('button-add');
let main = document.getElementById('lista');

function addTarefa(){
    //pegar o que esta digitado no input
    let valorInput = input.value;

    //se não for vazio,null ou indefinido  
    if ((valorInput !=="")  &&  (valorInput!==null) && (valorInput!==undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">

            <div class="item-icone">
                <span  id="icone_${contador}" onclick="marcar(${contador})" class="material-symbols-outlined">
                        check_circle
                </span>
            </div>

            <div onclick="marcar(${contador})" class="item-texto">
                ${valorInput}
            </div>

            <div class="item-botao">
                <button onclick="del(${contador})" class="deletar"><span class="material-symbols-outlined">
                     delete
                </span>Deletar</button>
            </div>

            </div>`;

            //adicionar o item no no main
            main.innerHTML += novoItem;

            //zerar o input
            input.value = "";
            input.focus();
        }
}  

function del(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcar(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    
    if( classe == 'item' ){
        item.classList.add('item-clicado');

    }else{
        item.classList.remove('item-clicado');

    }
}

input.addEventListener("keyup", function (event){
    //se clicar enter(13 numero do botão enter)
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})
