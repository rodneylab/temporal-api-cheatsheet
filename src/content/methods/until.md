---
title: 'until'
docs: 'https://tc39.es/proposal-temporal/docs/instant.html#until'
---

Works out how long the period between two dates is. You might use this when
signing a JWT to work out how many seconds from now your expiry date is.

```javascript
const now = Temporal.Now.instant();
const expiry = Temporal.Instant.from('2023-12-25T00:00:00.000+0000');
const result = now.until(expiry, { largestUnit: 'second' }).seconds;
```
