export function wordleCompare(guessWord, correctWord) {
    if(!guessWord || !correctWord || (guessWord.length !== correctWord.length)) return [];
    const GUESS = guessWord.split('');
    const CORRECT = correctWord.split('');
    const RESULT = GUESS.map((letter, index) => {
        const isCorrect = GUESS[index] === CORRECT[index];
        isCorrect ? CORRECT[index] = '' : null;
        return { 
            letter, 
            result: isCorrect ? 'correct' : 'incorrect'
        }
    });
    GUESS.forEach((letter, index) => {
        if(CORRECT.includes(letter)) {
            RESULT[index].result = 'misplaced';
        }
    })
    return RESULT;
}