
let Screen= '';
let button = document.querySelectorAll(".button");
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(element)=>{
        if(element.target.innerHTML== "="){
            screen= eval(screen);
            document.querySelector('input').value = screen;
        }
        else if(element.target.innerHTML== 'C'){
            screen="";
            document.querySelector('input').value = screen;
        }
        else{
            screen=screen + element.target.innerHTML;
            document.querySelector('input').value = screen;
        }

    }) 
})
