// 注意这里没写出来 
type MyExclude<T, K> = T extends K ? never : T // T 写在前面是T进行先遍历 K进行后遍历 遍历两个两个泛型的这种需要单独的处理

type ME = MyExclude<'a' | 'b' | 'c', 'a'>
type ME2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
