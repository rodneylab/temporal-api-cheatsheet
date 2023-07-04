import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateISO();
const nowString = now.toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});
const result = Temporal.Now.plainDateISO().equals(Temporal.PlainDate.from('2022-12-25')).toString();

export { nowString as now, result };
