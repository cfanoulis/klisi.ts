/* eslint-disable complexity */

import {greeklishMap, maleIsNormalized} from './constants';
import {getEnding} from './util';

/**
 * Trys to guess gender from a given greek name
 * @param name The person's name
 */
export function getGender(name: string) {
	name = name.toLocaleLowerCase();
	let suffix2 = (name.length > 2) ? name.substring(name.length - 2) : name;
	let suffix3 = (name.length > 3) ? name.substring(name.length - 3) : name;
	if (name === ('ραχήλ') || name === ('ραχηλ') ||
		name === ('ολυμπιάς') || name === ('ολυμπιας') ||
		name === ('ναϊάς') || name === ('ναϊας') ||
		name === ('ναιάς') || name === ('ναιας') ||
		name === ('ηρωδιάς') || name === ('ηρωδιας') ||
		name === ('ορεστιάς') || name === ('ορεστιας') ||
		name === 'εύχαρης' || name === 'ευχαρης'
	) {
		return 'FEMALE';
	}

	if (suffix2 === ('ος') ||
		suffix2 === ('ός') ||
		suffix2 === ('ης') ||
		suffix2 === ('ής') ||
		suffix2 === ('ας') ||
		suffix2 === ('άς') ||
		suffix2 === ('ίδ') ||
		suffix2 === ('ιδ') ||
		suffix2 === ('ήλ') ||
		suffix2 === ('ηλ') ||
		suffix2 === ('ήφ') ||
		suffix2 === ('ηφ') ||
		suffix3 === ('ειμ') ||
		suffix3 === ('είμ') ||
		suffix2 === ('ων') ||
		suffix2 === ('ών') ||
		suffix3 === ('εύς') ||
		suffix3 === ('ευς') ||
		suffix2 === ('ωρ') ||
		suffix2 === ('ώρ') ||
		suffix2 === ('αμ') ||
		suffix2 === ('άμ') ||
		suffix2 === ('ωφ') ||
		suffix2 === ('ώφ') ||
		suffix2 === ('ως') ||
		suffix2 === ('ώς') ||
		suffix2 === ('ιν') ||
		suffix2 === ('ίν') ||
		suffix3 === ('αιμ') ||
		suffix3 === ('αίμ') ||
		suffix2 === ('ώβ') ||
		suffix2 === ('ωβ') ||
		suffix3 === ('ουμ') ||
		suffix3 === ('ούμ') ||
		suffix3 === ('ους') ||
		suffix3 === ('ούς') ||
		suffix2 === ('ακ') ||
		suffix2 === ('άκ') ||
		suffix2 === ('ωτ') ||
		suffix2 === ('ώτ') ||
		suffix2 === ('οτ') ||
		suffix2 === ('ότ')) {
		return 'MALE';
	}

	if (suffix2 === ('ις') ||
		suffix2 === ('ίς') ||
		suffix2 === ('ΐς') ||
		suffix2 === ('ϊς')) {
		let string1 = name.split('').map(c => c.normalize('NFD').charAt(0)).join('');
		if (maleIsNormalized.includes(string1)) {
			return 'MALE';
		}

		return 'FEMALE';
	}

	let suffix1 = (name.length > 1) ? name.substring(name.length - 1) : name;
	if (suffix1 === ('ω') ||
			suffix1 === ('ώ') ||
			suffix1 === ('η') ||
			suffix1 === ('ή') ||
			suffix1 === ('α') ||
			suffix1 === ('ά') ||
			suffix2 === ('ου') ||
			suffix2 === ('ού') ||
			suffix2 === ('ετ') ||
			suffix2 === ('έτ') ||
			suffix3 === ('ιάς') ||
			suffix3 === ('ιας') ||
			suffix2 === ('δα') ||
			suffix2 === ('ηρ') ||
			suffix2 === ('ήρ')) {
		return 'FEMALE';
	}

	return 'NONE';
}

/**
 * Allows you to get the vocative form (Κλητική) for a greek name
 * @param name The name you want to turn into vocative
 */
export function getVocative(name: string) {
	const gender = getGender(name);
	let suffix2 = (name.length > 2) ? name.substring(name.length - 2) : name;
	let suffix3 = (name.length > 3) ? name.substring(name.length - 3) : name;
	let suffix4 = (name.length > 4) ? name.substring(name.length - 4) : name;
	let suffix5 = (name.length > 5) ? name.substring(name.length - 5) : name;
	if (gender === 'MALE' &&
		(suffix2 === ('ης') ||
			suffix2 === ('ής') ||
			suffix2 === ('ας') ||
			suffix2 === ('άς') ||
			suffix2 === ('ις') ||
			suffix2 === ('ίς'))) {
		return name.substring(0, name.length - 1);
	}

	// eslint-disable-next-line no-mixed-operators
	if (gender === 'MALE' && (suffix5 === ('τίνος') ||
		// eslint-disable-next-line no-mixed-operators
		suffix5 === ('τινος')) ||
		suffix4 === ('αίος') ||
		suffix4 === ('αιος') ||
		suffix5 === ('φόρος') ||
		suffix5 === ('φορος') ||
		suffix5 === ('άρδος')) {
		let local = name.substring(0, name.length - 2);
		return local + 'ε';
	}

	if (gender === 'FEMALE' && suffix2 === ('ις')) {
		return name.substring(0, name.length - 1);
	}

	if (gender === 'MALE' && (suffix2 === ('ως') ||
		suffix3 === ('εύς') ||
		suffix3 === ('ευς') ||
		suffix3 === ('ούς') ||
		suffix3 === ('ους'))) {
		return name.substring(0, name.length - 1);
	}

	if (gender === 'MALE' && suffix2 === ('ωρ')) {
		let local = name.substring(0, name.length - 2);
		return local.concat('ορ');
	}

	if (gender === 'MALE' && suffix2 === ('ός')) {
		let local = name.substring(0, name.length - 2);
		return local + 'έ';
	}

	if (gender === 'MALE' && suffix2 === ('ος')) {
		let local = name.substring(0, name.length - 2);
		return local + getEnding(name);
	}

	return name;
}

/**
 * Allows you to get the causative form (Αιτιατική) for a greek name
 * @param name The name you want to turn into causative
 */
export function getCausative(name: string) {
	const gender = getGender(name);
	const suffix2 = (name.length > 2) ? name.substring(name.length - 2) : name;
	const suffix3 = (name.length > 3) ? name.substring(name.length - 3) : name;
	const suffix4 = (name.length > 4) ? name.substring(name.length - 4) : name;
	const suffix5 = (name.length > 5) ? name.substring(name.length - 5) : name;
	if (gender === 'MALE' && (
		suffix2 === ('ος') ||
		suffix2 === ('ός') ||
		suffix2 === ('ης') ||
		suffix2 === ('ής') ||
		suffix2 === ('ας') ||
		suffix2 === ('άς') ||
		suffix2 === ('ις') ||
		suffix2 === ('ίς') ||
		suffix5 === ('τίνος') ||
		suffix5 === ('τινος') ||
		suffix4 === ('αίος') ||
		suffix4 === ('αιος') ||
		suffix5 === ('φόρος') ||
		suffix5 === ('φορος') ||
		suffix5 === ('άρδος'))) {
		return name.substring(0, name.length - 1);
	}

	if (gender === 'FEMALE' && suffix2 === ('ις')) {
		return name.substring(0, name.length - 1) + 'ή';
	}

	if (gender === 'MALE' && (suffix2 === ('ως') ||
		suffix3 === ('εύς') ||
		suffix3 === ('ευς') ||
		suffix3 === ('ούς') ||
		suffix3 === ('ους'))) {
		return name.substring(0, name.length - 1);
	}

	if (gender === 'MALE' && suffix2 === ('ωρ')) {
		return name.substring(0, name.length - 2).concat('α');
	}

	return name;
}

/**
 * Turns a string of greek letters into 'greeklish'
 * @param text The string to turn into greeklish
 */

export function toGreeklish(text: string) {
	greeklishMap.forEach(characters => {
		const regex = new RegExp(characters.find, 'g');
		text = text.replace(regex, characters.replace);
	});

	return text;
}
