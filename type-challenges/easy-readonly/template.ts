type MyReadonly<T> = {
  readonly [p in keyof T]: T[p]
}
// readonly 使用方式
type User = {
  name: string 
}
const user: MyReadonly<User> = {
  name: 'xiaohong'
}
// user.name = '小红'

/**
 * 知识点 如何遍历一个接口
 * [p in keyof T] 
 * 不能直接使用in关键字 in只能用来遍历union 联合类型
 */