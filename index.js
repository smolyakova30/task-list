const inputFiled = document.querySelector('.inputFiled');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement("li");
    console.log(btn)
    item.innerText = inputFiled.value;
    console.log(item)
    item.classList.add('todoAdded')
    toDoContainer.appendChild(item);
    inputFiled.value = '';



    item.addEventListener('click', () => {
        item.classList.add('todoComleted')
    })


    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })


});



