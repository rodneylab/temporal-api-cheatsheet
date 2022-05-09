---
title: 'with'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#with'
---

You might want to set the date to a particular day of a month or a particular time on a given day. An example is where you want a user account to expire at midnight one month from today:

- use `add` to shift the date to a month from today
- use `with` to shift the time to a second before midnight

```javascript
const result = Temporal.Now.plainDateTimeISO()
  .add({ months: 1 })
  .with({ hour: 23, minute: 59 })
  .toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });
```
