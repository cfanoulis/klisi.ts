import {test, expect} from '@jest/globals';
import {LexicalGender} from '../src/util';
import {getLexicalGender} from '../src';

test.each([
	['Γιώργος', LexicalGender.MALE],
	['Ιωάννης', LexicalGender.MALE],
	['Μιχάλης', LexicalGender.MALE],
	['Παναγής', LexicalGender.MALE],
	['Κώστας', LexicalGender.MALE],
	['Παρασκευάς', LexicalGender.MALE],
	['Άδωνις', LexicalGender.MALE],
	['Αδωνίς', LexicalGender.MALE],
	['Κωσταντίνος', LexicalGender.MALE],
	['Κωσταντινος', LexicalGender.MALE],
	['Αρχαίος', LexicalGender.MALE],
	['Αρχαιος', LexicalGender.MALE],
	['Χριστόφορος', LexicalGender.MALE],
	['Χριστοφορος', LexicalGender.MALE],
	['Εδουάρδος', LexicalGender.MALE],
	['Αριστόνους', LexicalGender.MALE],
	['Αετιδεύς', LexicalGender.MALE],
	['Ζευς', LexicalGender.MALE],
	['Βίκτωρ', LexicalGender.MALE],
	['Σαθρός', LexicalGender.MALE],
	['Χαράλαμπος', LexicalGender.MALE],
	['Μαρία', LexicalGender.FEMALE],
	['Άρτεμις', LexicalGender.FEMALE],
	['Ραχήλ', LexicalGender.FEMALE],
	['Νινέτ', LexicalGender.FEMALE],
	['Νινετ', LexicalGender.FEMALE],
	['Ντορέττα', LexicalGender.FEMALE],
	['Μάγδα', LexicalGender.FEMALE],
	['Αυγέρου', LexicalGender.FEMALE],
	['Αυγερου', LexicalGender.FEMALE],
	['Αδελαΐδα', LexicalGender.FEMALE],
	['Εσθήρ', LexicalGender.FEMALE],
	['Εσθηρ', LexicalGender.FEMALE],
	['Τριανταφυλλιάς', LexicalGender.FEMALE],
	['Σχολείο', LexicalGender.NONE]

])(
	'get gender for %s',
	(name, expected) => {
		expect(getLexicalGender(name)).toBe(expected);
	}
);
