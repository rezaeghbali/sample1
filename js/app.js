let $=document;
let inputElem=$.querySelector('#input-field')
let btnAddElem=$.querySelector('#btn-save')
let btnDeleteElem=$.querySelector('#btn-delete')
let colorsBoxElem=$.querySelectorAll('.color-box');
let containerElem=$.querySelector('#listed');



function generateNewNote() {
    let newDivElem=$.createElement('div')
    newDivElem.className='card shadow-sm rounded'
    let pElem=$.createElement('p')
    pElem.className='card-text p-3'
    pElem.innerHTML=inputElem.value
    containerElem.append(newDivElem)
    newDivElem.append(pElem)
    newDivElem.style.backgroundColor=inputElem.style.backgroundColor;
    inputElem.value='';
    inputElem.style.backgroundColor='#fff'
    newDivElem.addEventListener('click',function(event){
        event.target.parentElement.remove();
    })
}

colorsBoxElem.forEach(function(colorbox){
    colorbox.addEventListener('click',function(event) {
        inputElem.style.backgroundColor=event.target.style.backgroundColor;
    })
 
})

btnDeleteElem.addEventListener('click',function() {
    inputElem.value='';
    inputElem.style.backgroundColor='#fff'
})


inputElem.addEventListener('keydown',function(event) {
    if(event.keyCode===13){
        if(inputElem.value){
            generateNewNote();
        }
        
    }
})

btnAddElem.addEventListener('click',generateNewNote)






