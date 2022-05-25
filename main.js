const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const firstNext = document.getElementById('firstNext');
const secondNext = document.getElementById('secondNext');
const thirdNext = document.getElementById('thirdNext');
const lastNext = document.getElementById('lastNext');
const victory = document.getElementById('victory');
const restart = document.getElementById('restart');
const tryAgain = document.getElementById('tryAgain');

correct.hidden = true;
wrong.hidden = true;
firstNext.hidden = true;
secondNext.hidden = true;
thirdNext.hidden = true;
lastNext.hidden = true;
tryAgain.hidden = true;
victory.hidden =  true;
restart.hidden = true;



const spearow = document.getElementById("spearow");
const tauros = document.getElementById("tauros");
const slaking = document.getElementById("slaking");
const firstq = document.getElementById("firstq");

const charizard = document.getElementById("charizard");
const dragapult = document.getElementById("dragapult");
const applin = document.getElementById("applin");
const secondq = document.getElementById("secondq");

const gengar = document.getElementById("gengar");
const arbok = document.getElementById("arbok");
const tangela = document.getElementById("tangela");
const thirdq = document.getElementById("thirdq")

const garchomp = document.getElementById("garchomp");
const gyarados = document.getElementById("gyarados");
const giratina = document.getElementById("giratina");
const fourthq = document.getElementById("fourthq");

charizard.hidden = true;
dragapult.hidden = true;
applin.hidden = true;
secondq.hidden = true;

gengar.hidden = true;
arbok.hidden = true;
tangela.hidden = true;
thirdq.hidden = true;

garchomp.hidden = true;
gyarados.hidden = true;
giratina.hidden = true;
fourthq.hidden = true;




const wrongAnswer = () => {

    tryAgain.hidden = true;
    
    tauros.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; 
    spearow.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; 
    slaking.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; 
    charizard.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; 
    dragapult.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    applin.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    gengar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';  
    arbok.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';  
    tangela.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';  
    garchomp.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';  
    gyarados.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';  
    giratina.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    firstq.hidden = false;
    correct.hidden = true;
    wrong.hidden = true;

    spearow.hidden = false;
    tauros.hidden = false;
    slaking.hidden = false;

    charizard.hidden = true;
    dragapult.hidden = true;
    applin.hidden = true;
    secondq.hidden = true;

    gengar.hidden = true;
    arbok.hidden = true;
    tangela.hidden = true;
    thirdq.hidden = true;

    garchomp.hidden = true;
    gyarados.hidden = true;
    giratina.hidden = true;
    fourthq.hidden = true;
    restart.hidden = true;
    victory.hidden = true;
}

const firstNextq = () => {

    spearow.hidden = true;
    tauros.hidden = true;
    slaking.hidden = true;

    charizard.hidden = false;
    dragapult.hidden = false;
    applin.hidden = false;
    secondq.hidden = false;
    firstNext.hidden = true;
    correct.hidden = true;
}



const firstCorrect = () => {
    spearow.style.backgroundColor = 'rgba(0, 252, 0, 0.6)';
    tauros.hidden = true;
    slaking.hidden = true;
    firstq.hidden = true;

    firstNext.hidden = false;
    correct.hidden =  false;  
    
}

const wrongTauros = () => {
    tauros.style.backgroundColor = 'rgba(252, 0, 0, 0.6)';    
    spearow.hidden = true; 
    slaking.hidden = true;
    
    tryAgain.hidden = false;
    wrong.hidden= false;
    firstq.hidden= true;
}

const wrongSlacking = () => {
    slaking.style.backgroundColor = 'rgba(252, 0, 0, 0.6)'; 
    spearow.hidden = true; 
    tauros.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    firstq.hidden= true;
}


const secondNextq = () => {

    charizard.hidden = true;
    dragapult.hidden = true;
    applin.hidden = true;

    gengar.hidden = false;
    arbok.hidden = false;
    tangela.hidden = false;
    thirdq.hidden = false;
    secondNext.hidden = true;
    correct.hidden = true;

}



const secondCorrect = () => {
    charizard.style.backgroundColor = 'rgba(0, 252, 0, 0.6)';
    dragapult.hidden = true;
    applin.hidden = true;
    secondq.hidden = true;

    secondNext.hidden = false;
    correct.hidden =  false; 
}

const wrongDragapult = () => {
    dragapult.style.backgroundColor = 'rgba(252, 0, 0, 0.6)';    
    applin.hidden = true; 
    charizard.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    secondq.hidden = true;
}

const wrongApplin = () => {
    applin.style.backgroundColor = 'rgba(252, 0, 0, 0.6)'; 
    charizard.hidden = true; 
    dragapult.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    secondq.hidden = true;
}




const thirdNextq = () => {

    gengar.hidden = true;
    arbok.hidden = true;
    tangela.hidden = true;

    garchomp.hidden = false;
    gyarados.hidden = false;
    giratina.hidden = false;
    fourthq.hidden = false;
    thirdNext.hidden = true;
    correct.hidden = true;

}



const thirdCorrect = () => {
    tangela.style.backgroundColor = 'rgba(0, 252, 0, 0.6)';
    gengar.hidden = true;
    arbok.hidden = true;
    thirdq.hidden = true;

    thirdNext.hidden = false;
    correct.hidden =  false; 
}

const wrongGengar = () => {
    gengar.style.backgroundColor = 'rgba(252, 0, 0, 0.6)';    
    arbok.hidden = true; 
    tangela.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    thirdq.hidden = true;
}

const wrongArbok = () => {
    arbok.style.backgroundColor = 'rgba(252, 0, 0, 0.6)'; 
    gengar.hidden = true; 
    tangela.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    thirdq.hidden = true;
}







const fourthCorrect = () => {
    gyarados.style.backgroundColor = 'rgba(0, 252, 0, 0.6)';
    garchomp.hidden = true;
    giratina.hidden = true;
    fourthq.hidden = true;

    restart.hidden = false;
    victory.hidden = false;
    correct.hidden =  false; 
}

const wrongGarchomp = () => {
    garchomp.style.backgroundColor = 'rgba(252, 0, 0, 0.6)';    
    gyarados.hidden = true; 
    giratina.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    fourthq.hidden = true;
}

const wrongGiratina = () => {
    giratina.style.backgroundColor = 'rgba(252, 0, 0, 0.6)'; 
    garchomp.hidden = true; 
    gyarados.hidden = true;
    wrong.hidden= false;
    tryAgain.hidden = false;
    fourthq.hidden = true;
}




spearow.addEventListener('click',firstCorrect);
tauros.addEventListener('click',wrongTauros);
slaking.addEventListener('click',wrongSlacking);

tryAgain.addEventListener('click',wrongAnswer);
firstNext.addEventListener('click',firstNextq);



charizard.addEventListener('click',secondCorrect);
dragapult.addEventListener('click',wrongDragapult);
applin.addEventListener('click',wrongApplin);

secondNext.addEventListener('click',secondNextq)



tangela.addEventListener('click',thirdCorrect);
gengar.addEventListener('click',wrongGengar);
arbok.addEventListener('click',wrongArbok);

thirdNext.addEventListener('click',thirdNextq);


gyarados.addEventListener('click',fourthCorrect);
garchomp.addEventListener('click',wrongGarchomp);
giratina.addEventListener('click',wrongGiratina);

restart.addEventListener('click',wrongAnswer);