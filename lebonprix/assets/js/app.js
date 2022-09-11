let arrayImg = [
    {
        nom : "Télé",
        acces : './assets/images/img1.jpeg',
        prix : ""
    },
    {
        nom : "Téléphone",
        acces : './assets/images/img2.png',
        prix : ""
    },
    {
        nom : "Chaise",
        acces : './assets/images/img3.avif',
        prix : ""

    },
    {
        nom : "Table",
        acces : './assets/images/img4.jpeg',
        prix : ""
    },
    {
        nom : "PC",
        acces : './assets/images/img5.jpg',
        prix : ""
    }
]


let prixRand;
let nbEssaie = 10;
let arrReset = ['./assets/images/intero.webp'];
let essaie = document.getElementById('essaie');
let prixObjet = document.getElementById('prixObj');
let btnDemSuiv = document.getElementById('btn');
let objImg = document.getElementById('images');
let prixReel = document.getElementById('justePrix');
let nomObj = document.getElementById('nomObjet');
const BTNSUIV = document.getElementById('devPrix');
let btnNext = document.getElementById("next");
let btnReset = document.getElementById("btnAgain");
let erreur = document.getElementById('msgErreur');
let divRow = document.createElement('div');
let input = document.querySelector("input");
let rules = document.querySelector("h5");
let reponse = document.getElementById('repUser').value; //recupère la saisit de l'utilisateur 




function imgRandom() { // gère les images et le prix aléatoire
  
    let numImg = Math.floor(Math.random() * arrayImg.length); //images aléatoires
    btnDemSuiv.style.display = 'none'; //le bouton démarrer devient suivant 
    btnReset.style.display = "none";
    btnNext.style.display = "inline-block";
    BTNSUIV.style.display = "inline-block";
    input.style.display = "flex";
    rules.style.display = "flex";
    objImg.src = arrayImg[numImg].acces //chemin d'accès aux images
    nomObj.textContent = arrayImg[numImg].nom; //afficher le nom de l'objet qui correspond à l'image
    prixRand = Math.floor(Math.random() * 100 + 1); //prix aléatoire
    console.log(prixRand);
    nbEssaie = 10; // réinitialise le nb d'essaie si l'utilisateur recommence
    essaie.innerText = "";  // réinitialise le texte nb d'essaie si l'utilisateur recommence
    prixReel.innerText = "";  //réinitialise le texte du prix si l'utilisateur recommence
    BTNSUIV.disabled = false; // réactive le boutton si l'utilisateur recommence
    btnNext.disabled = false;
} 

function devinePrix() { // gère l'affichage

    result = document.getElementById('reponse');
        
        if (reponse.value == prixRand) {
            result.innerText = "Bravo";
        } else if (reponse.value == 0 || reponse.value > 100) {
            result.innerText = "Veuillez saisir un prix entre 1 et 100 !";
        } else {
            result.innerText = "Essayez encore";
        }
    
        if (reponse.value != prixRand) {
        nbEssaie = nbEssaie -1;
        essaie.innerText = "Plus que " + nbEssaie + " tentavive.s";
        } 
    
        if (nbEssaie == 0) {
            prixReel.innerText = "Perdu, le juste prix était de " + prixRand + " euros";
            result.innerText = "";
            btnDemSuiv.style.display = 'inline-block';
            redemarrer()
        } 
}

function redemarrer() { // gère le changement d'affichage si l'utilisateur recommence la partie

    if (nbEssaie == 0) {
        btnDemSuiv.style.display = "none";
        btnReset.style.display = "inline-block";
        objImg.src = arrReset;
        nomObj.innerText = "";
    } 

    BTNSUIV.disabled = true; // désactive le bouton 
    btnNext.disabled = true;

}

devPrix.addEventListener("click", () => {


    if(repUser.value == ""){ //affichage message d'erreur en cas de champ vide
        repUser.style.border = "1px solid red";
        msgErreur.innerHTML = "Veuillez saisir un prix";
    } else if (repUser.value !== "") {
        repUser.style.border = "1px solid black";
        msgErreur.innerHTML = "";

    }
})

btnReset.addEventListener("click", ()=> {
    imgRandom();
 });


btnDemSuiv.addEventListener('click', imgRandom, false)
btnNext.addEventListener('click', imgRandom, false)
devPrix.addEventListener('click', devinePrix,false)
