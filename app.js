var p = document.querySelector("#pierre");
var f = document.querySelector("#feuille");
var c = document.querySelector("#ciseaux");
var myPlayer = document.querySelector("#resultMoi")
var IAPlayer = document.querySelector("#resultIA");
var pokeMoi = document.querySelector("#myPoke");
var pokeIA = document.querySelector("#IAPoke");
console.log(pokeMoi);
console.log(pokeIA);

//MODALEEE 
var start = document.querySelector("#boutton");
start.addEventListener("click", function() {
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
p.addEventListener("mouseout" , function(){
    p.setAttribute("src" , "img/pokebolee.png");
    span1.style.opacity = 0;
})
p.addEventListener("mouseover" , function(){
    p.setAttribute("src" , "img/giphy2.gif");
    span1.style.opacity = 1;

})
f.addEventListener("mouseout" , function(){
    f.setAttribute("src" , "img/pokebolee.png");
    span2.style.opacity = 0;
})
f.addEventListener("mouseover" , function(){
    f.setAttribute("src" , "img/giphy2.gif");
    span2.style.opacity = 1;
})
c.addEventListener("mouseout" , function(){
    c.setAttribute("src" , "img/pokebolee.png");
    span3.style.opacity = 0;
})
c.addEventListener("mouseover" , function(){
    c.setAttribute("src" , "img/giphy2.gif");
    span3.style.opacity = 1;
})


var message = document.querySelector("#msg");
console.log(message);


function ChoiseIA (){
 iA = Math.floor(Math.random()*3);
}

// CHOIX UTILISATEUR
p.addEventListener("click" ,function(){
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
f.addEventListener("click" ,function(){
  
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
c.addEventListener("click" ,function(){
   
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

