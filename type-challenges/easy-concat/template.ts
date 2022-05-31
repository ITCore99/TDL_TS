type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U] // 这里也可以使用any 但是unknown 会更加的安全 表明是存在类型

type CT = Concat<['1', 2, '3'], [false, boolean, '4']>