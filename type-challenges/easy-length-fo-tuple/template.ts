type Length<T extends readonly any[]> = T['length'] // 为什么需要加readonly 因为tuple 类型的类型顺序 定死的 长度也是定死的

type tuple = [1, 2, 3]
type lenT = Length<tuple>

/**
 * 知识点:
 * tuple元祖和普通数组的区别
 * tuple 中的类型顺序是定死的(类型可以包含多种) 长度也是定死的  同时是不可以赋值的  获取tuple的length 
 * 普通数组:  可以重新赋值 首先一般我们设置的类型是统一的类型 除非你设置了any类型
 */

