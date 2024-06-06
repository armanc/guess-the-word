const prompts = require('prompts');

(async () => {
    const words: string[] = [
      'programming',
      'trasher',
      'destroyer',
      'typescrypt'
    ]

    const word: string = words[(Math.random() * words.length) | 0];
    const wordParts: string[] = word.split(''); // ['c', 'o', ...]

    let targetWord: string[] = '_'.repeat(word.length).split(''); // ['_', '_', ...]

    let guesses: number = 0;
    const maxGuesses: number = word.length+3;

    console.log('Vārds: '+targetWord.join(' '))

    while (guesses < maxGuesses) {

    
        const response = await prompts({
            type: 'text',
            name: 'letter',
            message: 'Enter letter: ',
          });

        console.log(wordParts.includes(response.letter));

        let letterPosition = wordParts.indexOf(response.letter); // position of typed letter

            // check if letter exists in word
          if (letterPosition > -1) {
            targetWord[letterPosition] = response.letter; // letter gets inserted
            wordParts[letterPosition] = '-'

            if (word == targetWord.join('')) {
              console.log("Correct! The word was: " +  targetWord.join(''));
              break;
            }
          }
        
          guesses++;
          
          console.log('Vārds: '+targetWord.join(' '))
          console.log('')
    }

    if (word != targetWord.join('')) {
      console.log("You loose!");
    }





})();