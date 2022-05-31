
/**
 * Symbol 类型
 */
const sym2: symbol = Symbol();
const sym = Symbol()
let obj = {
  [sym]: 'linker'
}
console.log(obj[sym])
/**
 * Array 类型
 */
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
/**
 * 枚举类型 (类似于我们所说的常量池)
 * 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。
 *  1、数字枚举
 *  2、字符创枚举
 *  3、常量枚举
 *  4、异构枚举
 */
// 数字枚举 默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST
}
let dir: Direction = Direction.SOUTH
// 字符串枚举
enum Direction2 {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
// 📢 数字枚举除了支持 从成员名称到成员值 的普通映射之外，它还支持 从成员值到成员名称 的反向映射：
let dirName = Direction[0]; // NORTH
let dirVal = Direction["NORTH"]; // 0

enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
/**
 * any类型
 * ts 允许我们符any类型做任何操作 使用any类型会无法使用ts 保护机制
 * 作为开发者，这给了我们很大的自由：TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查
 */
namespace anyTest1 {
  let value: any;

  value.foo.bar; // OK
  value.trim(); // OK
  value(); // OK
  new value(); // OK
  value[0][1]; // OK
}

/**
 * Unknown类型
 * 1、像所有类型可以赋值为any类型一样 所有类型类型也都可以赋值为unknown
 * 2、unknown 类型只能被赋值给 any 类型和 unknown 类型本身
 */
 let value: unknown;
 value = true; // OK
 value = 42; // OK
 value = "Hello World"; // OK
 value = []; // OK
 value = {}; // OK
 value = Math.random; // OK
 value = null; // OK
 value = undefined; // OK
 value = new TypeError(); // OK
 value = Symbol("type"); // OK

namespace unknownTest2 {
  let value: unknown;

  let value1: unknown = value; // OK
  let value2: any = value; // OK
  let value3: boolean = value; // Error
  let value4: number = value; // Error
  let value5: string = value; // Error
  let value6: object = value; // Error
  let value7: any[] = value; // Error
  let value8: Function = value; // Error
}

namespace unknownTest3 {
  let value: unknown;

  value.foo.bar; // Error
  value.trim(); // Error
  value(); // Error
  new value(); // Error
  value[0][1]; // Error

}
/**
 * tuple 类型
 * 与数组的区别:
 * 1、默认我们任务数组时单一类型   |   如果我们需要存储不同类型的值
 * 2、数组长度是可以扩展的        |   元祖中类型、顺序已经长度是定死的不可以改变
 */
let tupleType: [string, boolean];
tupleType = ["semlinker", true];
console.log(tupleType[0]); // semlinker
console.log(tupleType[1]); // true

tupleType = [true, "semlinker"];
tupleType = ["semlinker"];

/**
 * Void 类型
 * void 类型表示没有任何类型 通常我们用于没有函数返回值的情况
 */
function warnUser(): void {
  console.log("This is my warning message");
}

/**
 * Null 和 Undefined 类型
 * 在Ts 中null 和 undefined 两者有各自的类型分别是 null 和 undefined
 */
 let u: undefined = undefined;
 let n: null = null;
/**
 * Never 类型
 * never 类型表示永远不存在的值类型 例如 never 类型总是会抛出异常或根本就不会有返回值的函数表达式
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

/**
 * 联合类型 使用按位或 |
 * 只需要满足是多个类型中一个类型
 */
 const sayHello = (name: string | undefined) => {
  /* ... */
};
sayHello("semlinker");
sayHello(undefined);

// 类型别名
type UnionTest = string | boolean
const unionTest1: UnionTest = 'linker'
const unionTest2: UnionTest = false

// 示例中的 1、2 或 'click' 被称为字面量类型，用来约束取值只能是某几个值中的一个。
let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';


/**
 * 交叉类型 使用按位 & (📢 容易理解错误)
 * 将多个类型叠加到到一起
 */
type PointX = { x: number} 
type PointY = { y: number} 
type Point = PointX & PointY
const point: Point = {
  x: 1,
  y: 2
}
type PointX1 = string
type PointY2 = boolean
type Point3 = PointX1 & PointY2

const point2: Point3 =  1

/**
 * 函数类型的定义 
 * 1、函数声明式
 * 2、函数表达式
 *  约束之后函数的参数必须要完全一直 输入多余耗时小于都不被允许
 */
function  sum(x: number, y: number):number {
  return x + y
}
// 其实是对右侧匿名函数进行约束 左侧是Ts通过类型推断出来的
let mySum3 = function (x: number, y: number): number {
  return x + y;
};

const mySum: (x: number, y: number) => number = function (x: number, y:number):number {
  return x + y
}

type MySum = (x: number, y:number) => number
const mySum2: MySum = function (x: number, y:number):number {
  return x + y
}
//📢: 不要混淆TS中=>和ES6中的 => 在 Ts 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
// 默认参数
function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
// 剩余参数
let a:any[] = [];
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}
push(a, 1, 2, 3);

/**
 * 函数的重载
 * 使用相同名称和不同参数数量或类型创建多个方法的一种能力。
 * 123 => 321 'hello' => 'olleh'
 */
// 缺点是不能明确的表单输入数字的时候返回的是数字 输入字符串的时候返回的是字符串
 function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
  }
}

function reverse2(x: number): number;
function reverse2(x: string): string;
function reverse2(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

/**
 * 接口
 * 约束完去实现这个接口
 * 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现
 */
interface Person {
  name: string,
  age: number
}
let semlinker: Person = {
  name: "semlinker",
  age: 33,
}
// 还可以加一些限制符
namespace interfaceTest1 {
  interface Person {
    readonly name: string;
    age?: number;
  }
  // 任意属性
  interface Person2 {
    readonly name: string;
    age?: number;
    [propName: string]: any;
  }
  let p2: Person2 = {
    name: 'test',
    sex: 1,
    yy: {
      name: 111
    }
  }
}
/**
 * 接口中定义函数 就没发使用:void范湖
 */
 interface IKK {
  name: string,
  say: (x: string) => string
 }
 const kk:IKK = {
   name: '111',
   say(x: string):string {
    return x
   } 
 }
/**
 * 接口继承（提出共有的部分 让其他部分去继承 比如我们searchForm 中的分页）
 */
 namespace interfaceExtend {
  interface PartialPointX { x: number; }
  interface Point extends PartialPointX { 
    y: number; 
  }
  const p:Point = {
    x: 1,
    y: 2
  }
 }
 /**
  * 接口与类型的区别
  * 1、接口和类型别名都可以用来用来描述对象的形状或者函数的签名
  * 2、类型别名可以用于一些其他类型比如 原始类型、联合类型和元祖的约束而接口是对对象描述
  * 3、接口和类型别名都可以被扩展但语法不同
  * 4、与类型别名不同，接口可以定义多次，会被自动合并为单个接口。
  */
 // 1、 描述一个点
 namespace interfaceTest3 {
   // 使用接口
  interface Point {
    x: number;
    y: number;
  }
  interface SetPoint {
    (x: number, y: number): void;
  }
  const p1: Point = {
    x: 1, 
    y: 1
  }
  // 使用类型别名
  type Point2 = {
    x: number,
    y: number
  }
  type  SetPoint2 = (x:number, y:number) => void
  const p2: Point2 = {
    x: 1, 
    y: 1
  }
 }
 // 2、 接口无法描述原始类型和元祖
 // primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];
// 3.
namespace interface3 {
  // 接口拓展接口
  interface PartialPointX { x: number }
  interface Point extends PartialPointX  {
    y: number
  }
  // 类型拓展类型
  type PartialPointX1 = { x: number }
  type Point2 = PartialPointX1 & {y: number}

  // 接口继承类型
  type PartialPointX2 = { x: number }
  interface Point3  extends PartialPointX {
    y: number
  }
  const p3: Point3 = {
    x: 1, 
    y: 2
  }

  // 类型继承接口
  interface PartialPointX4 { x: number }
  type Point4 = PartialPointX4 & {y: number}
  const p4:Point4 = {
    x: 1,
    y: 2
  }
}
// 4
namespace interface4 {
  
interface Point { x: number; }
interface Point { y: number; }

  const point: Point = { x: 1, y: 2 };

}

/**
 * 泛型 <T>
 * 其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。除了 T 之外，以下是常见泛型变量代表的意思：
 * K（Key）：表示对象中的键类型；
 * V（Value）：表示对象中的值类型；
 * E（Element）：表示元素类型
 */
//<T> 内部的T被称为类型变量，它是我们希望传递给 identity 函数的类型占位符，同时它被分配给 value 参数用来代替它的类型：此时 T 充当的是类型，而不是特定的类型。
function identity <T> (value: T): T {
  return value
}
// 也可以定义多个类型变量
function identity2<T, U>(value: T, message: U):T {
  console.log(message)
  return value
}
console.log(identity2<number, string>(68, "Semlinker"));

/**
 * 泛型接口 
 */
interface GenericIdentityFn<T> {
  (arg: T): T;
}
namespace test1 {
  interface Person<T> {
    name: T;
    age: number;
    say(arg: T): T
  }
  const p:Person<string> = {
    name: '',
    age: 2,
    say(x: string):string {
      return x
    }
  }
}

/**
 * 泛型类型
 * typeof: typeof操作符可以用来获取一个变量声明和类型 / 类型保护
 * keyof: 该操作符可以用来获取某种类型的所有键，其返回类型是联合类型
 * in: 用来联合遍历 / 类型保护
 * extends: 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
 */

namespace typeofTest {
  interface Person {
    name: string;
    age: number;
  }
  const sem: Person = { name: 'semlinker', age: 33 };
  type Sem= typeof sem; // -> Person
  
  function toArray(x: number): Array<number> {
    return [x];
  }
  
  type Func = typeof toArray; // -> (x: number) => number[]

  // 类型保护
  function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  
}

namespace keyofTest {
  interface Person {
    name: string;
    age: number;
  }
  
  type K1 = keyof Person; // "name" | "age"
  type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 

  const p1: K1 = 'name'
  const p2: K2 = 'pop'

}

namespace inTest {
  type Keys = "a" | "b" | "c"

  type Obj =  {
    [p in Keys]: any
  }
  // 进行类型保护
  interface Admin {
    name: string;
    privileges: string[];
  }
  
  interface Employee {
    name: string;
    startDate: Date;
  }
  
  type UnknownEmployee = Employee | Admin;
  
  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
      console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("Start Date: " + emp.startDate);
    }
  }
  
}

namespace extendTest {
  interface Lengthwise {
    length: number;
  }
  
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  loggingIdentity(3);  // Error, number doesn't have a .length property

  loggingIdentity({length: 10, value: 3});

}

/**
 * Ts 内置类型
 */
namespace innerTypeTest {

  interface Contact{
    name: string; // 姓名
    phone?: string; // 手机号
    email: string; // 邮箱
    avatar: string; // 头像
    userid: string; // id
  }
  type ContactPick = Pick<Contact, 'name' | 'phone'>
  type ContactRequired = Required<Contact>
  type ContactReadonly = Readonly<Contact>
  type ContactOmitEmail = Omit<Contact, 'email' >;

}

