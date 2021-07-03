/* eslint-disable complexity */

import { greeklishMap, maleIsNormalized } from './constants';
import { getEnding, LexicalGender } from './util';

/**
 * Trys to guess gender from a given greek name
 * @param name The person's name
 */
export function getLexicalGender(name: string) {
	name = name.toLocaleLowerCase();
	const suffix1 = name.substring(name.length - 1);
	const suffix2 = name.substring(name.length - 2);
	const suffix3 = name.substring(name.length - 3);

	if (
		name === 'ραχήλ' ||
		name === 'ραχηλ' ||
		name === 'ολυμπιάς' ||
		name === 'ολυμπιας' ||
		name === 'ναϊάς' ||
		name === 'ναϊας' ||
		name === 'ναιάς' ||
		name === 'ναιας' ||
		name === 'ηρωδιάς' ||
		name === 'ηρωδιας' ||
		name === 'ορεστιάς' ||
		name === 'ορεστιας' ||
		name === 'εύχαρης' ||
		name === 'ευχαρης'
	) {
		return LexicalGender.FEMALE;
	}

	if (suffix2 === 'ις' || suffix2 === 'ίς' || suffix2 === 'ΐς' || suffix2 === 'ϊς') {
		const string1 = name
			.split('')
			.map((c) => c.normalize('NFD').charAt(0))
			.join('');
		if (maleIsNormalized.includes(string1)) {
			return LexicalGender.MALE;
		}

		return LexicalGender.FEMALE;
	}

	if (
		suffix1 === 'ω' ||
		suffix1 === 'ώ' ||
		suffix1 === 'η' ||
		suffix1 === 'ή' ||
		suffix1 === 'α' ||
		suffix1 === 'ά' ||
		suffix2 === 'ου' ||
		suffix2 === 'ού' ||
		suffix2 === 'ετ' ||
		suffix2 === 'έτ' ||
		suffix2 === 'ηρ' ||
		suffix2 === 'ήρ' ||
		suffix3 === 'ιάς' ||
		suffix3 === 'ιας'
	) {
		return LexicalGender.FEMALE;
	}

	if (
		suffix2 === 'ος' ||
		suffix2 === 'ός' ||
		suffix2 === 'ης' ||
		suffix2 === 'ής' ||
		suffix2 === 'ας' ||
		suffix2 === 'άς' ||
		suffix2 === 'ίδ' ||
		suffix2 === 'ιδ' ||
		suffix2 === 'ήλ' ||
		suffix2 === 'ηλ' ||
		suffix2 === 'ήφ' ||
		suffix2 === 'ηφ' ||
		suffix2 === 'ων' ||
		suffix2 === 'ών' ||
		suffix2 === 'ωρ' ||
		suffix2 === 'ώρ' ||
		suffix2 === 'αμ' ||
		suffix2 === 'άμ' ||
		suffix2 === 'ωφ' ||
		suffix2 === 'ώφ' ||
		suffix2 === 'ως' ||
		suffix2 === 'ώς' ||
		suffix2 === 'ιν' ||
		suffix2 === 'ίν' ||
		suffix2 === 'ώβ' ||
		suffix2 === 'ωβ' ||
		suffix2 === 'ακ' ||
		suffix2 === 'άκ' ||
		suffix2 === 'ωτ' ||
		suffix2 === 'ώτ' ||
		suffix2 === 'οτ' ||
		suffix2 === 'ότ' ||
		suffix3 === 'ειμ' ||
		suffix3 === 'είμ' ||
		suffix3 === 'ουμ' ||
		suffix3 === 'ούμ' ||
		suffix3 === 'ους' ||
		suffix3 === 'ούς' ||
		suffix3 === 'αιμ' ||
		suffix3 === 'αίμ' ||
		suffix3 === 'εύς' ||
		suffix3 === 'ευς'
	) {
		return LexicalGender.MALE;
	}

	return LexicalGender.NONE;
}

/**
 * Allows you to get the vocative form (Κλητική) for a greek name
 * @param name The name you want to turn into vocative
 */
export function getVocative(name: string) {
	const gender = getLexicalGender(name);
	const suffix2 = name.substring(name.length - 2);
	const suffix3 = name.substring(name.length - 3);
	const suffix4 = name.length > 4 ? name.substring(name.length - 4) : name;
	const suffix5 = name.length > 5 ? name.substring(name.length - 5) : name;

	if (gender === LexicalGender.MALE) {
		if (suffix2 === 'ης' || suffix2 === 'ής' || suffix2 === 'ας' || suffix2 === 'άς' || suffix2 === 'ις' || suffix2 === 'ίς') {
			return name.substring(0, name.length - 1);
		}

		if (
			suffix5 === 'τίνος' ||
			suffix5 === 'τινος' ||
			suffix4 === 'αίος' ||
			suffix4 === 'αιος' ||
			suffix5 === 'φόρος' ||
			suffix5 === 'φορος' ||
			suffix5 === 'άρδος'
		) {
			const local = name.substring(0, name.length - 2);
			return `${local}ε`;
		}

		if (suffix2 === 'ως' || suffix3 === 'εύς' || suffix3 === 'ευς' || suffix3 === 'ούς' || suffix3 === 'ους') {
			return name.substring(0, name.length - 1);
		}

		if (suffix2 === 'ωρ') {
			const local = name.substring(0, name.length - 2);
			return local.concat('ορ');
		}

		if (suffix2 === 'ός') {
			const local = name.substring(0, name.length - 2);
			return `${local}έ`;
		}

		const local = name.substring(0, name.length - 2);
		return local + getEnding(name);
	}

	if (gender === LexicalGender.FEMALE && suffix2 === 'ις') {
		return name.substring(0, name.length - 1);
	}

	return name;
}

/**
 * Allows you to get the causative form (Αιτιατική) for a greek name
 * @param name The name you want to turn into causative
 */
export function getCausative(name: string) {
	const gender = getLexicalGender(name);
	const suffix2 = name.substring(name.length - 2);
	const suffix3 = name.substring(name.length - 3);

	if (gender === LexicalGender.MALE) {
		if (suffix2 === 'ωρ') {
			return name.concat('α');
		}

		if (suffix2 === 'ως' || suffix3 === 'εύς' || suffix3 === 'ευς' || suffix3 === 'ούς' || suffix3 === 'ους') {
			return name.substring(0, name.length - 1);
		}

		return name.substring(0, name.length - 1);
	}

	if (gender === LexicalGender.FEMALE && suffix2 === 'ις') {
		return `${name.substring(0, name.length - 2)}η`;
	}

	return name;
}

/**
 * Turns a string of greek letters into 'greeklish'
 * @param text The string to turn into greeklish
 */

export function toGreeklish(text: string) {
	greeklishMap.forEach(({ find, replace }) => {
		text = text.replaceAll(find, replace);
	});

	return text;
}
