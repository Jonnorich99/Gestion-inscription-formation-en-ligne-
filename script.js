//exercices 1//

let Jonnorich = prompt("Quel est votre nom ?");
const ageJonnorich = prompt("Quel est votre âge ?");
console.log("Bienvenue Jonnorich ! Vous avez 23 ans.");


function cal_Cout_Total(a, b) {
    const coutTotal = a * b;
    return a*b;
}
const a = 100;
const b = 50;
const resultat = cal_Cout_Total(100, 50);
console.log("Le coût total des inscriptions est de :", 5000);
  

const c = 25;
function veri_Eligib_Reduction(c) {
    if (age < 25) {
        console.log("Vous êtes éligible pour une réduction.");
    } 
    else {
        console.log("Vous n'êtes pas éligible pour une réduction.");
    }
}
let age = 23;
veri_Eligib_Reduction(23);


let note1 = parseFloat(prompt("Entrez la première note :"));
let note2 = parseFloat(prompt("Entrez la deuxième note :"));
let note3 = parseFloat(prompt("Entrez la troisième note :"));
let moyenne = (note1 + note2 + note3) / 3;
console.log("La moyenne des notes des participants est : " + moyenne);


let nom = "Jonnorich";
 age = 23;
let inscriptionPayee = true;
console.log("Le type de la variable 'nom' est : " + typeof Jonnorich);
console.log("Le type de la variable 'age' est : " + typeof 23);
console.log("Le type de la variable 'inscriptionPayee' est : " + typeof inscriptionPayee);


let participants = ["Jonnorich", "Ares", "Alsy"];
participants.push("King");
console.log("Liste des participants : " + participants.join(", "));


 participants = ["Jonnorich", "Ares", "Alsy"];
let nouveau_Inscrit = prompt("Entrez le nom du nouvel inscrit :");
participants.push("King");
alert("Bienvenue " + nouveau_Inscrit + " !");
console.log("Bienvenue " + nouveau_Inscrit + " !");



//exercices 2//


function calculateSum(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  //exemple de valeurs de num1 et num2//
  const num1 = 5;
  const num2 = 10;
  const result = calculateSum(num1, num2);
  console.log("La somme de", num1, "et", num2, "est :", result);




