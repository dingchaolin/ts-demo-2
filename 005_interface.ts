/**
 * Created by dcl on 2017/10/11 0011.
 */
interface DoSomting {
    shopping( n:number ) :string;
    eating( n:number ) :string;
}
// alt + enter + enter 快速实现
class Student implements DoSomting{
    //必须实现接口中的所有的属性和方法
    shopping(n:number):string {
        return "yifu";
    }

    eating(n:number):string {
        return "ok";
    }


}

//接口对批量函数的约定
interface myFunction{
    (n:string,a:number):boolean;
}

let func1: myFunction;
func1 = function(n:string,a:number):boolean{
    return false;
}

let func3: myFunction;
func3 = function(n:string,a:number):boolean{
    return false;
}

//对于单个函数的声明
let func2:(n:string,a:number)=>boolean = function(n:string,a:number):boolean{
    return true;
}


//接口对数组的约定
//对一系列的数组进行约束
interface StringArr {
    [index:number]:string
}


interface Arr {
    [index:number]:any // any
}


let arr1: StringArr;
arr1 = ["1"]


//接口对json的约束
interface JData{
    name:string;
    age:number;
    addr: string;
    sex? : string;// ? 表示可选

}

function JM( n: JData ){
    console.log( n )
}

let jd = {
    name:"dcl",
    age: 10,
    addr: "beijing"
}

JM( jd )