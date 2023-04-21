import { Temporal } from '@js-temporal/polyfill';

const result = Temporal.PlainDateTime.from({ year: 1997, month: 10, day: 1 }).toLocaleString(
	'en-GB',
	{ dateStyle: 'full', timeStyle: 'long' },
);

export { result };
