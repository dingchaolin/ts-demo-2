/**
 * Created by dcl on 2017/10/10 0010.
 */

class Person {
    name: string;
    age: number;
    private _money: number;
    //私有成员赋值
    set Money( money: number){
        this._money = money;
    }

    get Money():number{
        return this._money;
    }
    say(){
        console.log(`我叫${this.name}, 我今年${this.age}岁了~`);
    }
}