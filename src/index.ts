import { promises as fs } from 'fs'
import { resolve } from 'path'
import chokidar from 'chokidar'

type Options = Partial<{
  storeDir: string
  excludes: string[]
  outputFile: string
  isDev: boolean;
}>

const defaultOptions: Options = {
  storeDir: 'src/store',
  excludes: ['index'],
  outputFile: 'src/helper/pinia-auto-refs.ts',
  isDev: false,
}

export default function (options: Options = {}) {
  options = { ...defaultOptions, ...options }

  const { storeDir, excludes, outputFile, isDev } = options as Required<Options>
  const storePath = resolve(process.cwd(), storeDir)
  const outputDir = outputFile.replace(/(\/[^/]*).ts/, '')
  fs.readdir(outputDir).catch(() => fs.mkdir(outputDir))

  async function generateConfigFiles() {
    const storesPath = await fs.readdir(storePath)
    const storeNames = storesPath
      .filter((i) => i.endsWith('.ts'))
      .map((i) => i.replace('.ts', ''))
      .filter((i) => !excludes.includes(i))

    const ctx = `// "https://github.com/Allen-1998/pinia-auto-refs"
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
import type { ToRef, UnwrapRef } from 'vue'
import { storeToRefs } from 'pinia'

${storeNames.reduce(
  (str, storeName) => `${str}import ${storeName}Store from '${storeDir.replace(
    'src',
    '@'
  )}/${storeName}'
`,
  ''
)}
import store from '${storeDir.replace(
  'src',
  '@'
)}'

type StoreToRefs<T extends StoreDefinition> = {
  [K in keyof ReturnType<T>]: ReturnType<T>[K] extends Function
    ? ReturnType<T>[K]
    : ToRef<UnwrapRef<ReturnType<T>[K]>>
}

const storeExports = {
${storeNames.reduce(
  (str, storeName) => `${str}  ${storeName}: ${storeName}Store,
`,
  ''
)}}

export function useStore<T extends keyof typeof storeExports>(storeName: T) {
  const targetStore = storeExports[storeName](store)
  const storeRefs = storeToRefs(targetStore)
  return { ...targetStore, ...storeRefs } as StoreToRefs<(typeof storeExports)[T]>
}
`
    fs.writeFile(outputFile, ctx, 'utf-8')
  }

  generateConfigFiles()
  if (process.env.NODE_ENV === 'development' || isDev) {
    const watcher = chokidar.watch(storePath)
    watcher.on('add', () => generateConfigFiles())
    watcher.on('unlink', () => generateConfigFiles())
  }
  return {
    name: 'pinia-auto-refs',
  }
}
