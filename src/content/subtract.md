---
title: 'subtract'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#subtract'
---

Convenient for taking off arbitrary time periods from given time or date. You might use this to filter the blog posts you want to show in a feed summary based on when they were created.

```javascript
const result = Temporal.Now.plainDateTimeISO()
	.subtract({ months: 3 })
	.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' });
```
