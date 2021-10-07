// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-desous !
const characterNames = [
  '36AIS',
  "A'misandra",
  'Amimari',
  'Alika',
  '54B2',
  "A'merpact",
  'Amazora',
];
// --------------------------------------------------------------------
// Affiche le nombre de personnages dans le tableau
// console.log(characterNames.length);

// Affiche le nom du premier personnage
// console.log(characterNames[0]);

// Affiche le nom du dernier personnage (le 7eme)
// console.log(characterNames[6]);

// Affiche le nom du dernier personnage **SANS** savoir qu'il est le 7eme
const last = characterNames.length - 1;
// console.log(characterNames[last]);

// Affiche les noms de tous les personnages
characterNames.forEach((character) => {
  // console.log(character);
});

// Affiche le nom de chaque personnage accompagné du nombre de caractères qu'il contient
// Ex: Alika (5)
characterNames.forEach((character) => {
  // console.log(`${character} (${character.length})`);
});

// Affiche le nom de chaque personnage en minuscules
characterNames.forEach((character) => {
  // console.log(character.toLowerCase());
});

// Affiche le nombre de personnages dont le nom contient la lettre 'a' (minuscule ou majuscule)
characterNames.forEach((character) => {
  if (character.toLowerCase().includes('a')) {
    // console.log(character);
  }
});

// Crée une fonction `search(needle)` qui te renvoie les personnages dont le nom contient la lettre passée en paramètre
function search(needle) {
  let results = [];
  characterNames.forEach((character) => {
    if (character.toLowerCase().includes(needle)) {
      results.push(character);
    }
  });
  return results;
}
// console.log(search('a'));
