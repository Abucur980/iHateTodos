const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const uList = document.getElementsByTagName('ul')[0];


btn.addEventListener('click', addElementOnClick);

function createListElement(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    uList.appendChild(li);
}

function addElementOnClick (){
        createListElement();
}



