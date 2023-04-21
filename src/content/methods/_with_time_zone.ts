import { Temporal } from '@js-temporal/polyfill';

const local = Temporal.Now.plainDateTimeISO().toZonedDateTime('Europe/London');
const localString = local.toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});
const remoteTimeZone = Temporal.TimeZone.from('America/Sao_Paulo');
const result = local.withTimeZone(remoteTimeZone).toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});

export { localString as now, result };
