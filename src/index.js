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
    mmInput.value === "" ? mmSpan.textContent = '00' : mmInput.value
}
mmInput.addEventListener('input', printMm)


const yyInput = document.querySelector('#yy')
const yySpan = document.querySelector('#yy-span')

function printYy(){
    yySpan.textContent = yyInput.value
    yyInput.value === "" ? yySpan.textContent = '00' : yyInput.value
   
}
yyInput.addEventListener('input', printYy)


const cvcInput = document.querySelector('#cvc')
const cvcSpan = document.querySelector('.cvc')

function printCvc(){

    cvcSpan.textContent = cvcInput.value
    cvcInput.value === "" ? cvcSpan.textContent = '000' : cvcInput.value
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
        const re = /^[a-zA-Z\s]+$/
        return re.test(String(nameInput))
    }
    const isNumberCardValid = cardNumberInput =>{
        const re = /^\d{1,4}\s?\d{1,4}\s?\d{1,4}\s?\d{1,4}$/
        return re.test(cardNumberInput)
    }   
    const isMonthValid = mmInput =>{
        const re = /^(0[1-9]|1[0-2])$/
        return re.test(mmInput)
    }
    // testando o campo nome no cartao
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
    
    //testando o numero informado do cartão
    if(cardNumberInput.value === ""){

        const errorNameP = document.querySelector('#error-number')
        errorNameP.classList.add('error')
        errorNameP.textContent = "Can't be blank"
        cardNumberInput.classList.add('shake')

    }else if(!isNumberCardValid(cardNumberInput.value)){
        const errorNameP = document.querySelector('#error-number')
        errorNameP.classList.add('error')
        errorNameP.textContent = "Wrong format, numbers only"
        cardNumberInput.classList.add('shake')
    }

    //Testando o mes do cartão

    const erroMmP = document.querySelector('#error-mm')

    if(mmInput.value === ""){
        erroMmP.classList.add('error')
        mmInput.classList.add('shake')
    }else if(!isMonthValid(mmInput.value)){
        erroMmP.classList.add('error')
        mmInput.classList.add('shake')
        erroMmP.textContent = "Wrong format, month only"
        erroMmP.style.fontSize = '0.7em'
    }

    //testando o ano do cartao
    const erroYyP = document.querySelector('#error-yy')
    if(yyInput.value === ""){
        erroYyP.classList.add('error')
        erroYyP.textContent = "Can't be blank"
        yyInput.classList.add('shake')

    }else if(yyInput.value < 23 || yyInput.value > 28){
    
        erroYyP.classList.add('error')
        erroYyP.textContent = "Invalid year"
        yyInput.classList.add('shake')

    }else if(!Number(yyInput.value)){
        erroYyP.classList.add('error')
        erroYyP.textContent = "Wrong format, year only"
        yyInput.classList.add('shake')
        erroYyP.style.fontSize = '0.7em'
    }
    
    //testando cvc

    const erroCvcP = document.querySelector('#error-cvc')

    if(cvcInput.value === ""){
        erroCvcP.classList.add('error')
        erroCvcP.textContent = "Can't be blank"
        cvcInput.classList.add('shake')

    }else if(!Number(cvcInput.value)){
        erroCvcP.classList.add('error')
        erroCvcP.textContent = "Wrong format, number only"
        cvcInput.classList.add('shake')
    }
    
    //resetando os erros na tela
    setTimeout(()=>{
        nameInput.classList.remove('shake')
        cardNumberInput.classList.remove('shake')
        mmInput.classList.remove('shake')
        yyInput.classList.remove('shake')
        cvcInput.classList.remove('shake')
        for (const p of errorP) {
            p.classList.remove('error')
        }
    },2000)

    if(!nameInput.classList.contains('shake') && 
    !cardNumberInput.classList.contains('shake') && 
    !mmInput.classList.contains('shake') && 
    !yyInput.classList.contains('shake') && 
    !cvcInput.classList.contains('shake')){
        
        
        form.classList.add('none')
        sucessDiv.classList.add('block')
    }

})



continueBtn.addEventListener('click',()=>{
    form.classList.remove('none')

    sucessDiv.classList.remove('block')

    const inputAll = document.querySelectorAll('input')
    for (const inputs of inputAll) {
        inputs.value = ""
    }

    nameSpan.textContent = "JANE APPLESEED"
    numberCardSpan.textContent = "0000 0000 0000 0000"
    mmSpan.textContent = "00"
    yySpan.textContent = "00"
    cvcSpan.textContent = "000"

})
