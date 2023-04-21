import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO();
const nowString = now.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });
const result = now
	.add({ hours: 2 })
	.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });

export { nowString as now, result };
