// Ecrire une variable contenant ton age (number) et une constante contenant ta date de naissance (string)
let age = 35;
const birthDate = `1986/05/02`;
// console.log(age);
// console.log(birthDate);

// Ecrire un code qui t'affiche ton prénom si ton âge est pair
const firstName = 'Loïc';

if (age % 2 === 0) {
  // console.log(firstName);
}

// Ecrire un code qui t'affiche ton prénom si ton âge est inférieur à 27, et ton nom dans le cas contraire
const lastName = 'Brassart';

if (age < 27) {
  // console.log(firstName);
} else {
  // console.log(lastName);
}

// Ecrire un code qui me copie 10 lignes de "Je ne copierai pas du code bêtement"
for (let i = 0; i < 10; i++) {
  // console.log('Je ne copierai pas du code bêtement');
}

// Ecrire une fonction getToto qui me renvoie la string "toto"
function getToto() {
  return 'toto';
}
// console.log(getToto());

// Ecrire une fonction getTotoArrow qui me renvoie la string "toto", en utilisant la syntaxe fléchée
const getTotoArrow = () => {
  return 'toto';
};
// console.log(getTotoArrow());

// Ecrire une fonction d6 qui me renvoie un nombre alétoire entre 1 et 6
function d6() {
  return Math.floor(random() * 6 + 1);
}
/* for (let i = 0; i < 20; i++) {
  console.log(d6());
} */

// Ecrire une fonction qui me renvoie la somme de deux nombres passés en paramètres
function sum(a, b) {
  return a + b;
}
// console.log(sum(2,8));

// Ecris un objet littéral (sans POO) qui te représente: nom, age, sexe, loisirs, ton langage de prédilection, une fonction pour te présenter, une fonction qui récite ton elevator speech
const loic = {
  firstName: 'Loic',
  age: 35,
  sex: 'm',
  hobbies: [
    'Travail du cuir',
    'Développement de jeux vidéos',
    'Chanter',
    'Lancer des haches',
  ],
  language: 'JS',
  toString: function () {
    return `Salut! Je m'appelle ${this.firstName}, ${
      this.age
    } et j'adore ${this.hobbies.join(', ')} !`;
  },
  elevatorSpeech: () => {
    return "Eh bien, depuis la dernière fois que nous nous sommes vu je me suis lancé dans une reconversion professionnelle pour devenir développeur Web. J'ai commencé ma formation de cinq mois à la Wild Code School de Lille, près d'Euratech, et j'apprends à utiliser Javascript, React, Express et MySQL. D'ailleurs je recherche un stage de quatre mois à partir de février 2022. Tiens moi au courant si ta boîte recrute ou si tu entends parler d'une opportunité !";
  },
};
// console.log(loic.age);
// console.log(loic.elevatorSpeech());

/* Ecris une fonction fizzBuzz(num) qui te renvoie:
  - "fizz" si num est un multiple de 3
  - "buzz" si num est un multiple de 5
  - "fizzbuzz" si num est un multiple de 3 et de 5
  - num dans les autres cas
*/
function fizzBuzz(num) {
  if (!(num % 15)) return 'fizzbuzz';
  if (!(num % 3)) return 'fizz';
  if (!(num % 5)) return 'buzz';
  return num;
}
// console.log(fizzBuzz(18));
// console.log(fizzBuzz(20));
// console.log(fizzBuzz(30));
// console.log(fizzBuzz(31));
