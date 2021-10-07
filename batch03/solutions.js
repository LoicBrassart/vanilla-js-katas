// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-desous !
const character = {
  id: 1,
  name: '36AIS',
  tier: 'SS',
  weapon: 'Staff',
  attribute: 'Healing',
  species: 'Oxsecian',
  friends: [
    {
      id: 3,
      name: "A'merpact",
      tier: 'A',
      weapon: 'Staff',
      attribute: 'Ice',
      species: 'Lizardfolk',
    },
    {
      id: 7,
      name: 'Alika',
      tier: 'S',
      weapon: 'Bow',
      attribute: 'Lightning',
      species: 'Human',
    },
    {
      id: 23,
      name: 'Bahl',
      tier: 'B',
      weapon: 'Sword',
      attribute: null,
      species: 'Human',
    },
    {
      id: 26,
      name: "Beau'ne",
      tier: 'Z',
      weapon: 'Sword',
      attribute: 'Photon',
      species: 'Lizardfolk',
    },
    {
      id: 32,
      name: 'Calista',
      tier: 'S',
      weapon: 'Sword',
      attribute: null,
      species: 'Human',
    },
  ],
  enemies: [
    {
      id: 19,
      name: "Ba'gunar",
      tier: 'B',
      weapon: 'Sword',
      attribute: 'Lightning',
      species: 'Lizardfolk',
    },
    {
      id: 37,
      name: 'Clara',
      tier: 'SS',
      weapon: 'Spear',
      attribute: null,
      species: 'Human',
    },
    {
      id: 39,
      name: 'Czekras',
      tier: 'SS',
      weapon: 'Sword',
      attribute: 'Ice',
      species: 'Human',
    },
  ],
  toString: function () {
    return `I'm ${this.name}, and I use a ${this.attribute} ${this.weapon} !`;
  },
};

// --------------------------------------------------------------------
// Affiche le nom du personnage (36AIS)
// console.log(character.name);

// Affiche le nombre d'ennemis de 36AIS
// console.log(character.enemies.length);

// Affiche la présentation de 36AIS
//console.log(character.toString());

// Affiche le nom et la race de chaque ami de 36AIS
// Ex: Beau'ne (Lizardfolk)
character.friends.forEach((friend) => {
  // console.log(`${friend.name} (${friend.species})`);
});

// Affiche les noms des ennemis humains de 36AIS
character.enemies.forEach((enemy) => {
  if (enemy.species === 'Human') {
    // console.log(enemy.name);
  }
});

// ------------------------------------------------------------------------ BONUS
// ATTENTION! Sur les exercices suivants, n'utilise pas une fonction fléchée (pour des raisons techniques un peu compliquées, une fonction fléchée n'aura pas le comportement attendu ici)

// Ajoute une fonction toString() à chaque ennemi et ami de 36AIS (**sans** toucher au code en tête de fichier !)
const myFunc = function () {
  return `I'm ${this.name}, and I use a ${this.attribute} ${this.weapon} !`;
};
character.enemies.forEach((enemy) => {
  enemy.toString = myFunc;
});
character.friends.forEach((friend) => {
  friend.toString = myFunc;
});
// console.log(character);
// console.log(character.friends[0].toString());

// Ajoute une fonction presentFriends() à 36AIS, qui présente chacun de ses amis
character.presentFriends = function () {
  let results = `${this.toString()}`;
  results += `\nHere are my friends:`;
  this.friends.forEach(function (friend) {
    // console.log(friend.toString());
    results += `\n- ${friend.toString()}`;
  });
  return results;
};
// console.log(character.presentFriends());
