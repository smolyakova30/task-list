const inputFiled = document.querySelector('.inputFiled');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', function(){
    const item = document.createElement("li");
    item.innerText = inputFiled.value;
    toDoContainer.appendChild(item);
});

