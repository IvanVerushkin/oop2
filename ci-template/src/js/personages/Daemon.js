import Character from '../Character.js'
export default class Daemon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.name = 'Victor'
        this.type = 'Daemon'
        this.attack = 10;
        this.defence = 40;
    }
}