

let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let select_choice = document.querySelector("#selectChoice");
let youCount = document.querySelector(".youCount");
let compCount = document.querySelector(".compCount");


console.log(select_choice);
let you_count=0,comp_count=0;
let option_arr = ["stone","paper","scissor"];
let index,comp_choice;

function getRandomNumber() {
    return Math.floor(Math.random() * 3) ;
}

stone.addEventListener("click",()=>{
    index = getRandomNumber();
    comp_choice = option_arr[index];
    console.log(comp_choice);

    if(comp_choice ==="scissor")
        {
          select_choice.placeholder ="You won";
          select_choice.style.backgroundColor ="green";
              you_count++;
          youCount.innerText = you_count;
        }
    else if(comp_choice ==="paper"){
        select_choice.placeholder ="You Lost";
        select_choice.style.backgroundColor ="red";
          comp_count++;
          compCount.innerText =comp_count;
    }
    else{
        select_choice.placeholder ="Its a draw";
        select_choice.style.backgroundColor ="yellow";
    }
});

paper.addEventListener("click",()=>{
    index = getRandomNumber();
    comp_choice = option_arr[index];
    console.log(comp_choice);

    if(comp_choice ==="stone")
        {
          select_choice.placeholder ="You won";
          select_choice.style.backgroundColor ="green";
          you_count++;
          youCount.innerText = you_count;
        }
    else if(comp_choice === "scissor"){
        select_choice.placeholder ="You Lost";
        select_choice.style.backgroundColor ="red";
          comp_count++;
          compCount.innerText =comp_count;
    }
    else{
        select_choice.placeholder ="Its a draw";
        select_choice.style.backgroundColor ="yellow";
    }
});

scissor.addEventListener("click",()=>{
    index = getRandomNumber();
    comp_choice = option_arr[index];
    console.log(comp_choice);

    if(comp_choice ==="paper")
        {
          select_choice.placeholder ="You won";
          select_choice.style.backgroundColor ="green";
          you_count++;
          youCount.innerText = you_count;

        }
    else if(comp_choice ==="stone"){
        select_choice.placeholder ="You Lost";
        select_choice.style.backgroundColor ="red";
          comp_count++;
          compCount.innerText =comp_count;
    }
    else{
        select_choice.placeholder ="Its a draw";
        select_choice.style.backgroundColor ="yellow";
    }
});

