/**
 * Created by dcl on 2017/10/10 0010.
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.eat = function (food) {
        console.log(this.animalName + " eat " + food + "!");
    };
    return Animal;
}());
console.log(Animal);
Animal.animalName = "dog";
Animal.eat("meat");
//# sourceMappingURL=004_classStatic.js.map