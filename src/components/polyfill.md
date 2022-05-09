The temporal API is not fully integrated into JavaScript so you need to install and import a polyfill package to use it:

Terminal:

```shell
pnpm install @js-temporal/polyfill
```

JavaScript or TypeScript source file:

```javascript
import { Temporal } from '@js-temporal/polyfill';
```
