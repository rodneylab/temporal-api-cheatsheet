---
title: 'add'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#add'
---

Convenient for adding on an arbitrary time period to a given time or date. You
might use this to work out the time you want a session cookie to expire.

```javascript
const result = Temporal.Now.plainDateTimeISO()
	.add({ hours: 2 })
	.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });
```
