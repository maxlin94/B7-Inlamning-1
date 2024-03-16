import { wordleCompare } from "../wordle.js";

/*
Test cases for the wordleCompare function:
1. Verify wordleCompare returns an empty array if the first string is empty.
2. Confirm wordleCompare returns an empty array if the strings are not of equal length.
3. Ensure wordleCompare returns an array with objects having 'result: correct' for all letters if the strings are identical.
4. Validate wordleCompare returns an array with objects having 'result: incorrect' for all letters that are incorrect.
5. Verify the function works even if there are multiple instances of the same letter before a correct letter.
6. Confirm the function works even if there are multiple instances of the same letter after a correct letter.
7. Ensure the function works even if there are multiple letters misplaced.
8. Verify the function ignores lower/upper case.
9. Validate the function works even if one or both strings are null.
*/

describe('wordleCompare', () => {
    it('should return an empty array if the first string is empty', () => {
        expect(wordleCompare('', 'hello')).toEqual([]);
    });
    it('should return an empty array if the two strings are not the same length', () => {
        expect(wordleCompare('toolong', 'hallå')).toEqual([]);
    });
    it('should return an array of objects with result: correct for all letters if both strings are equal', () => {
        expect(wordleCompare('hallå', 'hallå')).toEqual([
            { letter: 'h', result: 'correct' },
            { letter: 'a', result: 'correct' },
            { letter: 'l', result: 'correct' },
            { letter: 'l', result: 'correct' },
            { letter: 'å', result: 'correct' }
        ]);
    });
    it('should return an array of objects with result: incorrect for all incorrect letters', () => {
        expect(wordleCompare('hejhea', 'blabla')).toEqual([
            { letter: 'h', result: 'incorrect' },
            { letter: 'e', result: 'incorrect' },
            { letter: 'j', result: 'incorrect' },
            { letter: 'h', result: 'incorrect' },
            { letter: 'e', result: 'incorrect' },
            { letter: 'a', result: 'correct' }
        ]);
    });
    it('should label the first l in hallå as incorrect as theres already a correct "l"', () => {
        expect(wordleCompare('hallå', 'cykla')).toEqual([
            { letter: 'h', result: 'incorrect' },
            { letter: 'a', result: 'misplaced' },
            { letter: 'l', result: 'incorrect' },
            { letter: 'l', result: 'correct' },
            { letter: 'å', result: 'incorrect' }
        ]);
    });
    it('should label the second l in ållah as incorrect as theres already a correct "l"', () => {
        expect(wordleCompare('ållah', 'alkyc')).toEqual([
            { letter: 'å', result: 'incorrect' },
            { letter: 'l', result: 'correct' },
            { letter: 'l', result: 'incorrect' },
            { letter: 'a', result: 'misplaced' },
            { letter: 'h', result: 'incorrect' }
        ]);
    });
    it('should handle multiple misplaced letters', () => {
        expect(wordleCompare('aaabbb', 'bbbaaa')).toEqual([
            { letter: 'a', result: 'misplaced' },
            { letter: 'a', result: 'misplaced' },
            { letter: 'a', result: 'misplaced' },
            { letter: 'b', result: 'misplaced' },
            { letter: 'b', result: 'misplaced' },
            { letter: 'b', result: 'misplaced' },
        ]);
    });
    it('should ignore lower/upper case', () => {
        expect(wordleCompare('aaabbb', 'AAABBB')).toEqual([
            { letter: 'a', result: 'correct' },
            { letter: 'a', result: 'correct' },
            { letter: 'a', result: 'correct' },
            { letter: 'b', result: 'correct' },
            { letter: 'b', result: 'correct' },
            { letter: 'b', result: 'correct' },
        ]);
    });
    it('should handle inputs being null', () => {
        expect(wordleCompare(null, null)).toEqual([]);
    });
});