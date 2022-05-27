import { Temporal } from '@js-temporal/polyfill';

const result = Temporal.PlainDateTime.from('2022-05-27T06:22:11.000+0100').toLocaleString('en-GB', {
  dateStyle: 'full',
  timeStyle: 'long',
});

export { result };
