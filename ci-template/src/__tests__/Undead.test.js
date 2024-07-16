import Undead from '../js/personages/Undead'

test('should check the class Undead', () => {
    const person = new Undead('Tut');
    const result = {
        name: 'Tut',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(person).toEqual(result);
});