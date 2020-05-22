/* global test, expect */

import {getVocative} from '../src';

test('should return proper vocative for common male name', () => {
	expect(getVocative('Γιάννης')).toEqual('Γιάννη');
});
