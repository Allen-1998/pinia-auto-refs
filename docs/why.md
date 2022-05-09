# Why

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
