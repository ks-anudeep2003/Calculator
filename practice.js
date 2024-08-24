let result = document.querySelector('#result')
let buttonContainer = document.querySelector('.container')

buttonContainer.addEventListener('click',(e)=>{
    let target = e.target
    if(target.tagName==='INPUT' && target.type==='button'){
        handleInput(target.value)
    }
})

result.addEventListener('keydown',(e)=>{
    let key = e.key
    if((key>=0 && key<=9) || ['/','*','-','+','%','.','Enter','Backspace','Delete'].includes(key)){
        handleInput(key)
    }
})

function handleInput(input){
    if (input==='✂️' || input==='Backspace'){
        result.value = result.value.slice(0,-1)
    }else if(input==='C' || input==='Delete'){
        result.value = ''
    }else if(input==='Enter' || input==='='){
        calculate(result.value)
    }else{
        updateScreen(input)
    }
}

function updateScreen(input){
    if (result.value==='Error'){
        result.value = ''
    }else{
        result.value += input
    }
}

function calculate(input){
    if (result.value==='Error'){
        result.value = ''
    }else{
        try{
            result.value = eval(result.value)
        }catch(error){
            result.value = 'Error'
        }
    }
}

