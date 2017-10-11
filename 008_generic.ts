/**
 * Created by dcl on 2017/10/11 0011.
 */
//数据库 CURD

interface IData<T> {
    Add( info:T ):boolean;
    Delete( info:T ):boolean;
    Update( info:T ):T;
    Find( info:T, id: number ):T;
}

// 一个类实现一个泛型接口 这个类也必须是泛型的
class MySqlData<T> implements IData<T> {
    Add(info:T):boolean {
        return undefined;
    }

    Delete(info:T):boolean {
        return undefined;
    }

    Update(info:T):T {
        return undefined;
    }

    Find(info:T, id:number):T {
        return info;
    }

}

class MongoData<T> implements IData<T> {
    Add(info:T):boolean {
        return undefined;
    }

    Delete(info:T):boolean {
        return undefined;
    }

    Update(info:T):T {
        return undefined;
    }

    Find(info:T, id:number):T {
        return info;
    }

}

class UserInfo {
    name: string;
    password: string;
}

//调用的时候 需要传入具体的类型
class UserData extends MySqlData<UserInfo> {
    public GetUserInfo( id: number ) : UserInfo {
        let info = new UserInfo();
        info.name = "zhangsan";
        info.password = "123";
        return this.Find( info, id );
    }
}

let ud = new UserData();
let user = ud.GetUserInfo(1);
console.log( user );