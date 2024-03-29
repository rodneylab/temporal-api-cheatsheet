import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO();

const nowString = now.toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});

const result = now
	.subtract({ months: 3 })
	.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });

export { nowString as now, result };
