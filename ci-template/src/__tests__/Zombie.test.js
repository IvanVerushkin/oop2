import Zombie from '../js/personages/Zombie'

test('should check the class Zombie', () => {
    const person = new Zombie('Oleg');
    const result = {
        name: 'Oleg',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(person).toEqual(result);
});