import type { Equal, Expect } from '@type-challenges/utils'
// 主要ts文件中如果我们使用了import 和 export关键字这个文件会被认为是一个模块 需要在使用的地方进行导入 如果没有使用这些关键字的话不会认为是一个模块 而认为是全局所以之前的不需要引入
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
 ? Equal<First, U> extends true 
  ? true 
  : Includes<Rest, U> 
: false

// 使用infer 每次第一个和U 进行对比如果相同则返回true 否则在进行递归的使用rest进行比较 

