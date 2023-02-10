const nameInput = document.querySelector('#name')
const nameSpan = document.querySelector('span.name')

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


const cardNumberInput = document.querySelector('#number')
const numberCardSpan = document.querySelector('.number-card')



const numberCardPattern = /^(\d{4})(\d{4})(\d{4})(\d{4})/
const numberCardFormated = "$1 $2 $3 $4"

function printCardNumber(){

    const cardNumberInputValue = cardNumberInput.value;
    numberCardSpan.textContent = cardNumberInputValue.replace(numberCardPattern, numberCardFormated)

    cardNumberInputValue === "" ? numberCardSpan.textContent = "0000 0000 0000 0000" : cardNumberInputValue
   
}
cardNumberInput.addEventListener('input', printCardNumber)

const mmInput = document.querySelector('#mm')
const mmSpan = document.querySelector('#mm-span')

function printMm(){
    mmSpan.textContent = mmInput.value
    console.log(mmInput.value)
}
mmInput.addEventListener('input', printMm)


const yyInput = document.querySelector('#yy')
const yySpan = document.querySelector('#yy-span')

function printYy(){
    yySpan.textContent = yyInput.value

   
}
yyInput.addEventListener('input', printYy)


const cvcInput = document.querySelector('#cvc')
const cvcSpan = document.querySelector('.cvc')

function printCvc(){

    cvcSpan.textContent = cvcInput.value
}
cvcInput.addEventListener('input', printCvc)


const button = document.querySelector('#button')

const form = document.querySelector('form')
const containerForm = document.querySelector('.container-form')

const sucessDiv = document.querySelector('.sucess')
const continueBtn = document.querySelector('#continue')


const errorP = document.querySelectorAll('p')



form.addEventListener('submit',(e)=>{
   e.preventDefault()



   
    const isNameValid = nameInput =>{
        const re = /[A-z]+?/g
        return re.test(String(nameInput))
    }   
    

    if(nameInput.value === ''){

        const errorNameP = document.querySelector('#error-name')
        errorNameP.classList.add('error')
        nameInput.classList.add('shake')
        

    }else if(!isNameValid(nameInput.value)){
        const errorNameP = document.querySelector('#error-name')
        errorNameP.classList.add('error')
        errorNameP.textContent = "Wrong, name is invalid!"
        nameInput.classList.add('shake')
    }
    
   
    if(cardNumberInput.value === ""){

        const errorNameP = document.querySelector('#error-number')
        errorNameP.classList.add('error')
        errorNameP.textContent = "Can't be blank"
        cardNumberInput.classList.add('shake')
        

        

    }else if(!Number(cardNumberInput.value)){
        const errorNameP = document.querySelector('#error-number')
        errorNameP.classList.add('error')
        cardNumberInput.classList.add('shake')
    }


})


// button.addEventListener('click',()=>{
//     form.classList.add('none')

//     sucessDiv.classList.add('block')

// })


// continueBtn.addEventListener('click',()=>{
//     form.classList.remove('none')

//     sucessDiv.classList.remove('block')

// })
