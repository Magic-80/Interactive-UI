
//#region Variables

let buttonSubmit = document.querySelector(".box-one-button-content");

let boxOne = document.getElementById("box");
let boxTwo = document.getElementById("box-two");

let boxOneNumbers = document.querySelectorAll(".box-one-number-one");
let boxTwoNumbers = document.querySelector(".info-selected-content span");

//#endregion


//#region BoucleSurLesElement

boxOneNumbers.forEach(element => {

    element.addEventListener("click" , (event) =>{
        element.classList.toggle("change-background");
        
        if(element.className.includes("change-background"))
        {
            boxTwoNumbers.textContent = element.textContent;    

                
        }

    });
});

//#endregion


//#region FonctionQuandOnCliqueSurLeButtonSubmit

buttonSubmit.addEventListener("click" , function(){
    boxOne.style.display = 'none';
    boxTwo.style.display = 'flex';
    
});     

//#endregion
