type TupleToObject<T extends readonly (string | number | 'symbol')[]> ={
  [p in T[number]] : p
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const  // 量里面的每一个值都变为常量不可以修改
type r = TupleToObject<typeof tuple>
/**
 *  1、typeof 将js空间的东西转化为ts类型空间的东西
 *  获取变量的类型
 * 
 *  2、字面量
 *  这里的 as const 字面量类型
 *  let str = '123'
 *  type s = typeof str // string
 *  str = '12233' // str 可以修改为任意的字符串值
 * 
 *  const strConst = ’234‘ // 使用常量进行申明变量映射成类型就是常量类型不能被修改是234
 *  type sc = typeof strConst // ’234‘ 
 *  sc = '3456' // 会报错 是不能修改的
 * 3、 遍历数组 使用in 配合T[number]
 */