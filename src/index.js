const nameInput = document.querySelector('#name')
const nameSpan = document.querySelector('span.name')

const cardNumberInput = document.querySelector('#number')
const numberCardSpan = document.querySelector('.number-card')

// const namePattern = /([A-z])+?/g
// nameSpan.textContent = String(nameInput.value.match(namePattern)).trim(' , ') 


function printName(){ 

    const nameInputValue = nameInput.value
    nameSpan.textContent = nameInputValue

    nameInputValue === "" ? nameSpan.textContent = "Jane Appleseed" : nameInputValue

    nameInput.addEventListener('keypress',(e)=>{
        if(e.keyCode > 47 && e.keyCode < 58){
            e.preventDefault()
        }
    })
    
   
}
nameInput.addEventListener('input',printName)


// cardNumberInput.addEventListener('input', ()=>{
//     cardNumberInput.value.length > 19 ? cardNumberInput = '': cardNumberInput.value
//     numberCardSpan.textContent = cardNumberInput.value === '' ? '0000 0000 0000 0000' : cardNumberInput.value
// })
