const display = document.querySelector(".display");

const operatorBox = document.querySelector(".oparator--holder");


operatorBox.addEventListener("click",(e)=>{
    if(e.target.classList.contains('oparator--holder')){ //for bug fixing
        return
    }

    let value = e.target.innerText


    if(value === 'DEL'){
        let string = display.innerText
        let strArr = string.split('');

        strArr.pop();
        display.innerText = strArr.join('');
        console.log(strArr)
        return
    }

    if(value === 'AC'){
        display.innerText = "";
        return
    }

    if(value === '='){  
        let result = eval(display.innerText)

        display.innerText = String(result);
        return
    }

    display.append(value)
})  