/**
 * Created by dcl on 2017/10/11 0011.
 */


interface ValidateData {
    checkData( n: any ):boolean;
}

class StringValidate implements ValidateData{
    checkData(n:any):boolean {
        if( n && typeof n === "string" ){
            return true;
        }else{
            return false;
        }
    }

}

class NumberValidate implements ValidateData{
    checkData(n:any):boolean {
        if( n && typeof n === "number" ){
            return true;
        }else{
            return false;
        }
    }

}


let data = "xx";
let sv = new StringValidate();
let nv = new NumberValidate();

console.log( sv.checkData( data ) );
console.log( nv.checkData( data ) );