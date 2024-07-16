import Bowerman from '../js/personages/Bowerman'

test('should check the class Bowerman', () => {
    const character = new Bowerman('Igor', 'Bowerman');
    const result = {
        name: 'Igor',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(character).toMatchObject(result);
});