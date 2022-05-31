import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const  // 量里面的每一个值都变为常量不可以修改
/**
 * 这里的 as const 字面量类型
 *  let str = '123'
 *  type s = typeof str // string
 *  str = '12233' // str 可以修改为任意的字符串值
 * 
 *  const strConst = ’234‘ // 使用常量进行申明变量映射成类型就是常量类型不能被修改是234
 *  type sc = typeof strConst // ’234‘ 
 *  sc = '3456' // 会报错 是不能修改的
 */
type r = typeof tuple
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error 期待下面的类型报错
type error = TupleToObject<[[1, 2], {}]>