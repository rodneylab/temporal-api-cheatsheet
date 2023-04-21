---
title: 'from(string)'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#from'
---

Create a new date based on an ISO date string. You might use this to create a date object from a date received as a serialised string in a JSON POST request.

```javascript
const result = Temporal.PlainDateTime.from('2022-05-27T06:22:11.000+0100').toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});
```
