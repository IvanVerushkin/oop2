import Daemon from '../js/personages/Daemon'

test('should check the class Daemon', () => {
    const character = new Daemon('Igor', 'Daemon');
    const result = {
        name: 'Victor',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(character).toMatchObject(result);
});