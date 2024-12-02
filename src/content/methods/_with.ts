import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO().toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});

const result = Temporal.Now.plainDateTimeISO()
	.add({ months: 1 })
	.with({ hour: 23, minute: 59, second: 0 })
	.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });

export { now, result };
