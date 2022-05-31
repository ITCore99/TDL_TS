
// 第一种解法 extend 进行约束判断
// type First<T extends any[]> = T extends [] ? never :  T[0]
// 第二种解法 通过获取length 进行判断是否为空数组
// type First<T extends any[]> = T['length'] extends 0 ? never :  T[0]
// 第三种解法 T[number] 通过进行遍历数组 获取到数组的union类型 如果空数组则遍历出来是never 类型我们通过判断T[0]是否存在 来进行判断是不是空数组
// type First<T extends any[]> = T[0] extends T[number] ?  T[0]:  never 
// 第四中解法 使用infer(推断) 一般配合 extends使用 类似js 中的解构
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First:  never 

/**
 * 知识点
 * T[0] 如果是一个空数组的话 返回的是undefined
 * 
 * type ages = [1, 2, 3]
 * type t1 = ages[number] // 这里的type是 union 类型
 */

 type ages = [1]
 type t1 = ages[number] // 这里的type是 union 类型
 type t0 = ages[0]