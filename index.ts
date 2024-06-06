const prompts = require('prompts');

(async () => {
  const words: string[] = [
    'programming',
    'trasher',
    'destroyer',
    'typescrypt'
  ]

  const word: string = words[Math.floor(Math.random() * words.length)];
  const wordParts: string[] = word.split(''); // ['c', 'o', ...]
  let targetWord: string[] = '_'.repeat(word.length).split(''); // ['_', '_', ...
  let guesses: number = 0;
  const maxGuesses: number = word.length + 3;

  console.log('Vārds: ' + targetWord.join(' '))

  while (guesses < maxGuesses) {
    const response = await prompts({
      type: 'text',
      name: 'letter',
      message: 'Enter a letter: ',
      validate: (letter: string) => letter.length === 1 && /[a-zA-Z]/.test(letter) ? true : 'Please enter a single letter'
    });

    const letter: string = response.letter.toLowerCase();
    let found: boolean = false;

    for (let i: number = 0; i < wordParts.length; i++) {
      if (wordParts[i] === letter && targetWord[i] !== letter) {
        targetWord[i] = letter;
        found = true;
      }
    }

    if (found) {
      console.log(`Correct! The letter '${letter}' is in the word.`);
    } else {
      console.log(`Incorrect! The letter '${letter}' is not in the word.`);
    }

    if (word === targetWord.join('')) {
      console.log("Congratulations! You guessed the word: " + word);
      return;
    }

    guesses++;

    console.log('Word: ' + targetWord.join(' '));
    console.log(`Guesses left: ${maxGuesses - guesses}\n`);
  }

  console.log("You lose! The word was: " + word);
})();