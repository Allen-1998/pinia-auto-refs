# Getting started

## Install

`npm i pinia-auto-refs`

## Setup

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import PiniaAutoRefs from 'pinia-auto-refs'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    AutoImport({
      imports: [
        'pinia',
        {
          '@/helper/pinia-auto-refs': ['useStore'], // !important
        },
      ],
    }),
    PiniaAutoRefs(),
  ],
})
```

## Config Options

```ts
type Options = Partial<{
  storeDir: string
  excludes: string[]
  outputFile: string
}>

const defaultOptions = {
  storeDir: 'src/store',
  excludes: ['index'],
  outputFile: 'src/helper/pinia-auto-refs.ts',
}
```

## Attentions

You need to switch the store export mode to `export default`, because we can't get what you exported directly when we import automatically. Using `export default` makes it much easier.

```ts
// store/test.ts
export default defineStore({
  id: 'test',
  /* ... */
})
```
