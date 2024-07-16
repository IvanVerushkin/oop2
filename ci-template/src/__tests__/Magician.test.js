import Magician from '../js/personages/Magician'

test('should check the class Magician', () => {
    const character = new Magician('Igor', 'Magician');
    const result = {
        name: 'Jim',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(character).toMatchObject(result);
});