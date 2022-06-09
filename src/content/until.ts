import { Temporal } from '@js-temporal/polyfill';
const now = Temporal.Now.instant();
const expiry = Temporal.Instant.from('2022-12-25T00:00:00.000+0000');
const result = now.until(expiry, { largestUnit: 'second' }).seconds;

export { result };
