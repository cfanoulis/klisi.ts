import {vowelsT, vowelsWT} from './constants';

/**
 * @internal
 */
export function getEnding(name: string) {
	let paroxytono = isParoxytono(name);
	if (paroxytono) {
		return 'ο';
	}

	return 'ε';
}

/**
 * @internal
 */
export function isParoxytono(name: string) {
	function aux(countL: number, vowels: number): unknown {
		// If (countL >= name.length) {
		// 	return false;
		// }

		let letter = name[name.length - countL - 1].toLocaleLowerCase();
		if (vowelsT.includes(letter)) {
			return vowels === 1;
		}

		if (vowelsWT.includes(letter)) {
			return aux(countL + 1, vowels + 1);
		}

		return aux(countL + 1, vowels);
	}

	return aux(2, 1);
}

export const enum LexicalGender {
	NONE,
	MALE,
	FEMALE
}
