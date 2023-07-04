---
title: 'equals'
docs: 'https://tc39.es/proposal-temporal/docs/plaindatetime.html#equals'
---

Used to check two dates are the same. You might use this when filtering a list
of events to find one which occurred at a certain time.

```javascript
const result = Temporal.Now.plainDateISO().equals(Temporal.PlainDate.from('2022-12-25'));
```
