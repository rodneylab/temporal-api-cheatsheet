---
title: 'withTimeZone'
docs: 'https://tc39.es/proposal-temporal/docs/cookbook.html#preserving-exact-time'
---

You want to call a colleague in a remote location but first check the local timing in their time zone is socially acceptable:

```javascript
const local = Temporal.Now.plainDateTimeISO().toZonedDateTime('Europe/London');
const remoteTimeZone = Temporal.TimeZone.from('America/Sao_Paulo');
const result = local.withTimeZone(remoteTimeZone).plainDateTimeISO().toLocaleString('en-GB', {
	dateStyle: 'full',
	timeStyle: 'long',
});
```
