import { test, expect } from '@jest/globals';
import { toGreeklish } from '../src';

test('should turn greek to greeklish', () => {
	expect(toGreeklish('Μαθηματικά-Γ-Γυμνασίου')).toBe('Mathimatika-G-Gymnasiou');
});
