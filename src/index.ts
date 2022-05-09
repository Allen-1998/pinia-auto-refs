import { promises as fs } from 'fs'
import { resolve } from 'path'
import { HmrContext } from 'vite'

type Options = Partial<{
  storeDir: string
  excludes: string[]
  outputFile: string
}>

const defaultOptions: Options = {
  storeDir: 'src/store',
  excludes: ['index'],
  outputFile: 'src/helper/pinia-auto-refs.ts',
}

export default function (options: Options = {}) {
  Object.assign(options, defaultOptions)

  const { storeDir, excludes, outputFile } = options as Required<Options>
  const storePath = resolve(process.cwd(), storeDir)
  const outputDir = outputFile.replace(/(\/[^/]*).ts/, '')
  fs.readdir(outputDir).catch(() => fs.mkdir(outputDir))

  async function generateConfigFiles() {
    const storesPath = await fs.readdir(storePath)
    const storeNames = storesPath
      .map((i) => i.replace('.ts', ''))
      .filter((i) => !excludes.includes(i))

    const ctx = `// "https://github.com/Allen-1998/pinia-auto-refs"
${storeNames.reduce(
  (str, storeName) => `${str}import ${storeName}Store from '@/store/${storeName}'
`,
  ''
)}
import { ToRef, StoreToRefs } from 'vue'
declare module 'vue' {
  export type StoreToRefs<T> = {
    [K in keyof T]: T[K] extends Function ? T[K] : ToRef<T[K]>
  }
}
declare type PickOne<T, K extends keyof T> = T[K]

const storeExports = {
${storeNames.reduce(
  (str, storeName) => `${str}  ${storeName}: ${storeName}Store,
`,
  ''
)}}

export function useStore<T extends keyof typeof storeExports>(storeName: T) {
  const store = storeExports[storeName]()
  const storeRefs = storeToRefs(store)
  return { ...store, ...storeRefs } as unknown as StoreToRefs<
    ReturnType<PickOne<typeof storeExports, T>>
  >
}
`
    fs.writeFile(outputFile, ctx, 'utf-8')
  }

  generateConfigFiles()
  return {
    name: 'pinia-auto-refs',
    handleHotUpdate(ctx: HmrContext) {
      if (ctx.file.includes(storeDir)) {
        generateConfigFiles()
      }
    },
  }
}
