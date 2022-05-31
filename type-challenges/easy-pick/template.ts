// k 必须要在 T中的键值
type MyPick<T, K extends keyof T> = {
  [p in K]: T[p]
}
/**
 * 知识点  
 * 关键字 in 用于遍历  mappedTypes
 * T[p] 取值  indexed
 * keyof 取key  lookup (非联合类型 union 你能使用需要单独处理)
 * extends 在"<" 中叫做约束 在类型和接口上叫作继承
 */