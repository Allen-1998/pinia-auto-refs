# Basic usage

You need to switch the store export mode to `export default`, because we can't get what you exported directly when we import automatically. Using `export default` makes it much easier.

### store/index.ts

```ts
const store = createPinia()

export default store
```

### store/test.ts

```ts
export default defineStore({
  id: 'test',
  state: () => {
    return {
      name: 'allen',
      token: 'token...',
    }
  },
  getters: {
    fullName: ({ name }) => {
      return name + '_ttk'
    },
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
  },
})
```

### store/user.ts

```ts
export default defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo: {
        name: '',
        token: '',
      },
    }
  },
})
```

### helper/pinia-auto-refs.ts

```ts
// "https://github.com/Allen-1998/pinia-auto-refs"
import { AutoToRefs, ToRef } from 'vue'

import testStore from '@/store/test'
import userStore from '@/store/user'

declare module 'vue' {
  export type AutoToRefs<T> = {
    [K in keyof T]: T[K] extends Function ? T[K] : ToRef<T[K]>
  }
}

const storeExports = {
  test: testStore,
  user: userStore,
}

export function useStore<T extends keyof typeof storeExports>(storeName: T) {
  const store = storeExports[storeName]()
  const storeRefs = storeToRefs(store)
  return { ...store, ...storeRefs } as unknown as AutoToRefs<ReturnType<typeof storeExports[T]>>
}
```

### useStore Demo

```ts
const { name, token, fullName, updateName } = useStore('test')

// name.value
// updateName()
```
