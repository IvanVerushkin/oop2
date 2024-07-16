import Character from '../Character.js'
export default class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.name = 'Ivan'
        this.type = 'Swordsman'
        this.attack = 40;
        this.defence = 10;
    }
}