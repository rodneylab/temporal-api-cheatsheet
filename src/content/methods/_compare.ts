import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO();
const nowString = now.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });
const result = Temporal.PlainDateTime.compare(
	Temporal.Now.plainDateTimeISO(),
	Temporal.PlainDate.from('2022-12-31'),
);

export { nowString as now, result };
