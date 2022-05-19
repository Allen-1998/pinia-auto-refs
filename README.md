# pinia-auto-refs

[![NPM version](https://img.shields.io/npm/v/pinia-auto-refs?color=a1b858&label=)](https://www.npmjs.com/package/pinia-auto-refs)

Pinia Auto Refs on-demand for Vite. With TypeScript support. Powered by [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import).

[掘金：受够了手动 storeToRefs？来试试这个 vite 插件吧](https://juejin.cn/post/7097893752030625828/)

## without

```ts
import useUserStore from '@/store/user'

const userStore = useUserStore()
const { name, token, fullName } = storeToRefs(userStore)
const { updateName } = userStore
```

## with

```ts
const { name, token, fullName, updateName } = useStore('user')
```

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