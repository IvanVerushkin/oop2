import Magician from '../js/personages/Magician'

test('should check the class Magician', () => {
    const person = new Magician('Jim');
    const result = {
        name: 'Jim',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(person).toEqual(result);
});