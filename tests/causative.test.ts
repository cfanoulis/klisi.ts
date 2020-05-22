/* global test, expect */

import {getCausative} from '../src';

test('should return proper causative for common male names', () => {
	const data = [
		['Γιώργος', 'Γιώργο'],
		['Ιωάννης', 'Ιωάννη'],
		['Μιχάλης', 'Μιχάλη']
	];

	for (const [name, caus] of data) {
		expect(getCausative(name)).toBe(caus);
	}
});

test('should return proper causative for common female name', () => {
	expect(getCausative('Μαρία')).toBe('Μαρία');
});
