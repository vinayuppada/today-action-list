let drag = null;
const textInputField = document.querySelector('#name');
const addButton = document.querySelector('#btnid');
const todosContainer = document.querySelector('.box1');
const boxs = document.querySelectorAll('.box');

addButton.addEventListener('click', () => {
    if (textInputField.value.trim().length == '')
        return;

    // create div add class todo-item-container 
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('box12');
    todoItemContainer.id='boxi';
    todosContainer.appendChild(todoItemContainer);

    // create p element add id = todo-text
    const todoText = document.createElement('p');
    todoText.id = 'paratextid';
    todoText.draggable='true';
    todoText.className='item';
    todoText.contentEditable='true';
    todoText.innerText = textInputField.value;
    

    // let pos =boxi.firstElementChild;
    
    // if(pos==null)
    // {
    //     todoItemContainer.appendChild(todoText);
    // }else{
    //     todoItemContainer.insertBefore(todoText,pos);
    // }

    // let pos =document.getElementById("boxi");
    // if(pos==null)
    // {
    //     todoItemContainer.appendChild(todoText);
    // }
    // else{
    //     todoItemContainer.insertBefore(todoText,pos);
    // }
    // console.log(pos.firstElementChild);


    todoItemContainer.appendChild(todoText);

    textInputField.value="";

    dragItem();

});



function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            drag = item;
            item.style.opacity='0.5';
            // console.log('drag start');
           
            
        })
        item.addEventListener('dragend',function(){
            drag=null;
            item.style.opacity='1';
            // console.log('drag end');
        })

        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault()
                this.style.background='#82d4ef';
                this.style.color='#000';
            })

            box.addEventListener('dragleave',function(){
                this.style.background='#fff';
                this.style.color='#000';
               })

            box.addEventListener('drop',function(){
                box.append(drag);
                this.style.background='#fff';
                this.style.color='#000';
            })   
        })

       

    })
}