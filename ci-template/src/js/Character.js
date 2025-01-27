export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string') {
            throw new Error ('Ошибка в параметре name')
        }
        if (name.length < 2 || name.length > 10) {
            throw Error ('Ошибка')
        }

        this.name = name
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
        else {
            throw new Error('Нельзя повысить уровень, умер');
        }
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}