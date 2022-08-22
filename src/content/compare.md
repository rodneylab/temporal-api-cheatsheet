---
title: 'compare'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#compare'
---

Useful for checking if something has expired. Returns `-1` if first date is before second, `0` if they are identical and `1` otherwise. You might also use this with the Array.sort method to sort elements chronologically.

```javascript
const result = Temporal.PlainDateTime.compare(
  Temporal.Now.plainDateTimeISO(),
  Temporal.PlainDate.from('2022-12-31'),
);
```
