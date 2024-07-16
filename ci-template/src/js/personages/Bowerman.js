import Character from '../Character.js'
export default class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.name = 'Igor'
        this.type = 'Bowerman'
        this.attack = 25;
        this.defence = 25;
    }
}