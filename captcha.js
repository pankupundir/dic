const captcha=document.querySelector(".captcha");
const relodbtn=document.querySelector(".relod-bnt");
const inputField=document.querySelector("input");
const checkbtn=document.querySelector(".check-btn");
const statuss=document.querySelector(".status-txt")

let allCharacters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'
,'Y','Z','a','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
'1','2','3','4','5','6','7','8','9','0'];

function getCaptcha(){
    for(let i=0; i<6;i++)
    {
        let randomChar=allCharacters[Math.floor(Math.random()*allCharacters.length)];
        captcha.innerText +=`${randomChar}`;
        console.log(randomChar);
    }
}
relodbtn.addEventListener("click",()=>{
    captcha.innerText="";
    getCaptcha();
   
})
getCaptcha();

checkbtn.addEventListener("click",e=>{
    e.preventDefault();
    let inputVlaue=inputField.value;
    if(inputVlaue===captcha.innerText){
        statuss.innerText="good";
        setTimeout(()=>{
            inputField.value="";
            captcha.innerText=""
            getCaptcha();
        },400)
    }
    else {
        statuss.innerText="Not good"
    }
})