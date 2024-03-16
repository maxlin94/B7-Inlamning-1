export function wordleCompare(guessWord, correctWord) {
    if(!guessWord || !correctWord || (guessWord.length !== correctWord.length)) return [];
    const GUESS = guessWord.toLowerCase().split('');
    const CORRECT = correctWord.toLowerCase().split('');
    const RESULT = GUESS.map((letter, index) => {
        const isCorrect = GUESS[index] === CORRECT[index];
        isCorrect ? CORRECT[index] = '' : null;
        return { 
            letter, 
            result: isCorrect ? 'correct' : 'incorrect'
        }
    });
    GUESS.forEach((letter, index) => {
        if(CORRECT.includes(letter) && RESULT[index].result === 'incorrect') {
            RESULT[index].result = 'misplaced';
        }
    })
    return RESULT;
}