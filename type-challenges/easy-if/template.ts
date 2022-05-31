type If<T extends boolean, K, U> = T extends true ?  K : U
 
// type A = If<true, 'a', 'b'>
// type B = If<false, 'a', 'b'>
// type C = If<null, 'a', 'b'>