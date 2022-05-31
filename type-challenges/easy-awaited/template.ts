type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
  ? X extends Promise<unknown> 
    ?  MyAwaited<X> : T 
  : never
/**
 * 首先判断T传入的是不是promise 如果是判断promise的泛型是不是promise 如果是则递归调用 否则返回Promise的泛型类型
 * 最后第四行的T可以设置为任何值 因为永远也不会到这个分支（因为出入非promise的类型是会报错）所以可以优化最后一个T为any类型
 */

// infer 推断 类似数学中的设置一个X变量用来暂时代替某些未知的变量