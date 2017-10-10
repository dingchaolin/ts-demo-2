/**
 * Created by dcl on 2017/10/9 0009.
 */

function test( name:string, age:number = 19 ){
    return age;
}

//完整的函数声明
let test4 : ( name:string, age?:number) => string = function( name:string, age:number):string{
    return "good";
}


//可变参数
let test6 = function( name:string, ...params:any[]):string{
    return params.join("-");
}

//函数的重载：方法名一样 参数列表不同 返回值不同
function test7(n:string):number;
function test7(n:number):string;

function test7( n:any ):any{
    if( n && typeof n === "string"){
        console.log( "string" );
    }else{
        console.log("number");
    }
}
test7("ccc");
test7(123);
