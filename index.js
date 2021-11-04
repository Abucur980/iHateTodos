const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const uList = document.getElementsByTagName('ul')[0];


btn.addEventListener('click', addElementOnClick);
input.addEventListener('keypress', addElementOnKey);

function createListElement(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    uList.appendChild(li);
    input.value="";

    // remove the item
    li.addEventListener('click', function (){
        li.classList.toggle('done');
    })
}

function addElementOnClick (){
        createListElement();
}

function addElementOnKey(event){
    if(input.value.length>0 && event.keyCode === 13){
        createListElement();
    }
}

