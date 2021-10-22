// VARIABLE DE SELECTION
var pierre = document.querySelector("#pierre");
var feuille = document.querySelector("#feuille");
var ciseaux = document.querySelector("#ciseaux");
var myPlayer = document.querySelector("#resultMoi")
var IAPlayer = document.querySelector("#resultIA");
var pokeMoi = document.querySelector("#myPoke");
var pokeIA = document.querySelector("#IAPoke");
console.log(pokeMoi);
console.log(pokeIA);

//MODALEEE 
var start = document.querySelector("#boutton");

start.addEventListener("click", () => {
  var modal = document.querySelector("#modale");
  modal.style.display= "none";
});


var iA = 0;
var scoreU = document.querySelector("#scoreU");
var scoreIA = document.querySelector("#scoreIA");
var scIA = 0;
var scU = 0;
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var span3 = document.querySelector("#span3");
scoreU.innerHTML = scU;
scoreIA.innerHTML = scIA;
IAPlayer.innerHTML="<img src = 'img/pierre.gif'>";
myPlayer.innerHTML="<img src = 'img/sacha.gif'>";

/// HOVERRRRRRRRRR
pierre.addEventListener("mouseout" , function(){
    pierre.setAttribute("src" , "img/pokebolee.png");
    span1.style.opacity = 0;
})
pierre.addEventListener("mouseover" , function(){
    pierre.setAttribute("src" , "img/giphy2.gif");
    span1.style.opacity = 1;

})
feuille.addEventListener("mouseout" , function(){
    feuille.setAttribute("src" , "img/pokebolee.png");
    span2.style.opacity = 0;
})
feuille.addEventListener("mouseover" , function(){
    feuille.setAttribute("src" , "img/giphy2.gif");
    span2.style.opacity = 1;
})
ciseaux.addEventListener("mouseout" , function(){
    ciseaux.setAttribute("src" , "img/pokebolee.png");
    span3.style.opacity = 0;
})
ciseaux.addEventListener("mouseover" , function(){
    ciseaux.setAttribute("src" , "img/giphy2.gif");
    span3.style.opacity = 1;
})


var message = document.querySelector("#msg");
console.log(message);


function ChoiseIA (){
 iA = Math.floor(Math.random()*3);
}

// CHOIX UTILISATEUR
pierre.addEventListener("click" ,function(){
    ChoiseIA();
    if (iA == 0){
        pokeIA.innerHTML="<img src = 'img/onyx.png'>";
        message.innerHTML= "Egalité";

    }
    else if (iA == 1){
        pokeIA.innerHTML="<img src = 'img/germi.png'>";
        message.innerHTML= "Perdu";
        scIA++;
        scoreIA.innerHTML= scIA;
    }
    else {
        pokeIA.innerHTML="<img src = 'img/Cizayox.png'>";
        message.innerHTML= "Gagné";
        scU++;
        scoreU.innerHTML= scU;
    }
    pokeMoi.innerHTML = "<img src='img/onyx.png'>";
});
feuille.addEventListener("click" ,function(){
  
   ChoiseIA();
   if (iA == 0){
    pokeIA.innerHTML="<img src = 'img/onyx.png'>";
    message.innerHTML= "Gagné";
    scU++;
    scoreU.innerHTML= scU;

}
else if (iA == 1){
    pokeIA.innerHTML="<img src = 'img/germi.png'>";
    message.innerHTML= "Egalité";
}
else {
    pokeIA.innerHTML="<img src = 'img/Cizayox.png'>";
    message.innerHTML= "Perdu";
    scIA++;
    scoreIA.innerHTML= scIA;
}
pokeMoi.innerHTML="<img src = 'img/germi.png'>";
});
ciseaux.addEventListener("click" ,function(){
   
    ChoiseIA();
    if (iA == 0){
        pokeIA.innerHTML="<img src = 'img/onyx.png'>";
        message.innerHTML= "Perdu";
        scIA++;
        scoreIA.innerHTML= scIA;
    }
    else if (iA == 1){
        pokeIA.innerHTML="<img src = 'img/germi.png'>";
        message.innerHTML= "Gagné";
        scU++;
        scoreU.innerHTML= scU;
    }
    else {
        pokeIA.innerHTML="<img src = 'img/Cizayox.png'>";
        message.innerHTML= "Egalité";
    }
    pokeMoi.innerHTML="<img src = 'img/Cizayox.png'>";
});

