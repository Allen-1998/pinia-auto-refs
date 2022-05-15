# Basic usage

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
import testStore from '@/store/test'
import userStore from '@/store/user'

import { ToRef, StoreToRefs } from 'vue'
declare module 'vue' {
  export type StoreToRefs<T> = {
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
  return { ...store, ...storeRefs } as unknown as StoreToRefs<ReturnType<typeof storeExports[T]>>
}
```

### useStore Demo

```ts
const { name, token, fullName, updateName } = useStore('test')

// name.value
// updateName()
```
