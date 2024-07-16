import Zombie from '../js/personages/Zombie'

test('should check the class Zombie', () => {
    const character = new Zombie('Igor', 'Zombie');
    const result = {
        name: 'Oleg',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(character).toMatchObject(result);
});