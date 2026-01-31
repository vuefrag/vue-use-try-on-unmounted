<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-try-on-unmounted/main/banner.svg" alt="vue-use-try-on-unmounted" width="100%" />
</p>

<h1 align="center">vue-use-try-on-unmounted</h1>

<p align="center">A Vue 3 composition API utility that safely calls onUnmounted when inside component setup context, and gracefully handles calls outside setup without errors.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-try-on-unmounted"><img src="https://img.shields.io/npm/v/vue-use-try-on-unmounted.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-try-on-unmounted"><img src="https://img.shields.io/npm/dm/vue-use-try-on-unmounted.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-try-on-unmounted
```

## Usage

```ts
import { tryOnUnmounted } from '@vueuse/core'

tryOnUnmounted(() => {

})
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
