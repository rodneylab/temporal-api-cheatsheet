import { Temporal } from '@js-temporal/polyfill';

const local = Temporal.Now.plainDateTimeISO().toZonedDateTime('Europe/London');
const localString = local.toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});
const remoteTimeZoneName = 'America/Sao_Paulo';
const result = Temporal.ZonedDateTime.from(local.withTimeZone(remoteTimeZoneName)).toLocaleString(
	'en-GB',
	{
		dateStyle: 'full',
		timeStyle: 'long',
	},
);

export { localString as now, result };
