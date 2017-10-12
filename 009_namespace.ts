/**
 * Created by dcl on 2017/10/12 0012.
 */

namespace Validate {

    interface ValidateData {
        checkData( n:any ):boolean;
    }

    export class StringValidate implements ValidateData {
        checkData(n:any):boolean {
            if( n && typeof n === "string"){
                return true;
            }else{
                return false;
            }
        }

    }

    export class NumberValidate implements ValidateData {
        checkData(n:any):boolean {
            if( n && typeof n === "number"){
                return true;
            }else{
                return false;
            }
        }

    }
}

