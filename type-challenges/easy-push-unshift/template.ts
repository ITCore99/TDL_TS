type Push<T extends Array<unknown>, U> = [...T, U]
type Unshift<T extends Array<unknown>, U> = [U, ...T]