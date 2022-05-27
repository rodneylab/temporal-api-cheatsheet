---
title: 'from(string)'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#from'
---

Create a new date based on year, month, day etc. values. You might use this to create a date from user form inputs, like a date of birth.

```javascript
const result = Temporal.PlainDateTime.from('2022-05-27T06:22:11.000+0100').toLocaleString('en-GB', {
  dateStyle: 'full',
  timeStyle: 'long',
});
```
