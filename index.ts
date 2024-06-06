const prompts = require('prompts');

(async () => {
    const word: string = 'codelex';
    const wordParts: string[] = word.split('');

    let targetWord: string[] = '_'.repeat(word.length).split('');

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

        let letterPosition = wordParts.indexOf(response.letter);
            // check if letter exists in word
          if (letterPosition > -1) {
            targetWord[letterPosition] = response.letter;
            wordParts[letterPosition] = '-'

            if (word == targetWord.join('')) {
              console.log("Correct");
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