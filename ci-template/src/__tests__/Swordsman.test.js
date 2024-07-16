import Swordsman from '../js/personages/Swordsman'

test('should check the class Swordsman', () => {
    const character = new Swordsman('Igor', 'Swordsman');
    const result = {
        name: 'Ivan',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(character).toMatchObject(result);
});