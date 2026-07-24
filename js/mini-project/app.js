let userseq = [];
let gameseq = [];

let start = false;
let startbtn=document.querySelector(".startbtn");

let level = 0;
let h3=document.querySelector("h3");

let currScore=0;
let highScore=Number(localStorage.getItem("highScore"))||0;
let score=document.querySelector(".Score");
score.innerHTML=`High Score = <b>${highScore}</b> <br>Your current High Score..`;

let btns=["green","blue","yellow","purple"];

document.addEventListener("keypress", function (e) {
    if (start == false) {
        console.log("game is start...");
        start = true;
        levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*4);

    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randbtn)
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randbtn);
}

let Allbtns=document.querySelectorAll(".btn");
for(let btn of Allbtns){
    btn.addEventListener("click",btnpress);

}
function checkans(idx){
    // console.log(`level of game - ${level}`);
    
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over! your score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#FFF3C8";
        },150);

        currScore=level;
        // highScore=Math.max(currScore,highScore);
        // score.innerText=`High Score - ${highScore}`;
        
        checkScore(currScore);

        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    userFlash(btn);
    checkans(userseq.length-1);
}

function reset(){
    start=false;
    userseq=[];
    gameseq=[];
    level=0;
    currScore=0;
    startbtn.classList.remove("startbtn_display");
    setTimeout(function(){
        score.innerHTML=`High Score = <b>${highScore}</b> <br>Your current High Score..`;
    },2000)
    
    
}

function checkScore(currScore){
    if(currScore>highScore){
        highScore=currScore;
        score.innerHTML=`High Score = <b>${highScore}</b> <br>wow! Your new High Score..`;
    }else{
        score.innerHTML=`High Score = <b>${highScore}</b> <br>Your current High Score..`;
    }
}

startbtn.addEventListener("click",function(e){
    if (start == false) {
        console.log("game is start...");
        start = true;
        startbtn.classList.add("startbtn_display");
        
        setTimeout(levelUp,1000);

    }
})