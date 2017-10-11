/**
 * Created by dcl on 2017/10/11 0011.
 */
//模板函数
function test<T>( n:T ) :T {
    return n;
}


//模板类
class Person<T>{

}

class UserInfo{
    name :string;
    age :number;
}
let a = new Person<UserInfo>();

//模板接口
interface School<T> {
    add( n: T):boolean;
}

class Student implements School<UserInfo> {
    add(n:UserInfo):boolean {
        return true;
    }

}