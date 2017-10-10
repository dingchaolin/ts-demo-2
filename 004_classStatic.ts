/**
 * Created by dcl on 2017/10/10 0010.
 */

class Animal {
    static animalName:string;
    static eat( food: string):void{
        console.log(`${this.animalName} eat ${food}!`);
    }
}
console.log( Animal )
Animal.animalName = "dog";
Animal.eat("meat");
