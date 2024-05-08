const input = document.getElementById("display");
let equation="";


// function to add operation
function operators(e){

        equation == "" ? (input.value = 0) : (input.value = equation),
        console.log("The value of button that was pressed is: " + e.target.value),
        equation += e.target.value,
        console.log(equation),
        input.value = equation
    
}


//function to calculate

function calculate() {
    let result = eval(equation);
    if (result === Infinity) {
        input.value = "Error";
        equation="";
    } else {
        equation = parseFloat(result);
        console.log("Your answer is: " + equation);
        input.value = equation;
    }
}


function reset(){    
    input.value = 0;    
    equation="";       
}

function remove() {
    
        equation = equation.toString();
        equation = equation.slice(0, -1); // Remove the last character from the equation
        input.value = equation;
        equation = parseFloat(equation);
        console.log(equation);
    
            if(isNaN(equation)){
                console.log("is NaN");
                input.value = 0;    
                equation="";  
            } 
    }

    window.addEventListener("keydown",pressed);

    function pressed(e){
        switch(e.key) {
            case '0':
            case '1':              
            case '2':              
            case '3':                
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '/':
            case '*':
            case '-':
            case '+':
                operatorsForKey(e.key);
            break;

            case '=':
            case "Enter":    
                calculate();
            break;

            case 'Backspace':
                remove();
            break;

            case 'Delete':
                remove();
            break;

           

            default:
           console.log("please press a number key");
          }
    }

    function operatorsForKey(e){
        
        equation == "" ? (input.value = 0) : (input.value = equation),
        console.log("The value of button that was pressed is: " + e),
        equation += e,
        console.log(equation),
        input.value = equation
    
}