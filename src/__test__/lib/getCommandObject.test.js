import { getCommandObject } from '../../lib/index.js';

it('returns a command nested object when correct command', () => {
  // Assemble
  const command = 'PLACE 80,100,WEST';
  const result = {
    trigger: 'PLACE',
    position: { x: 80, y: 100 },
    orientation: { deg: 270, bearing: 'WEST' },
  };
  // Assert
  const cmdObject = getCommandObject(command);

  // expect
  expect(cmdObject).toMatchObject(result);
  expect(cmdObject).toHaveProperty('orientation');
  expect(cmdObject).toHaveProperty('position');
  expect(cmdObject).toHaveProperty('trigger');
});

it('returns a command object when command is correct', () => {
  // Assemble
  const command = 'MOVE';
  const result = { trigger: 'MOVE' };
  // Assert
  const cmdObject = getCommandObject(command);
  // expect
  expect(cmdObject).toMatchObject(result);
  expect(cmdObject).toHaveProperty('trigger');
});

it('returns null if any commands are incorrect', () => {
  // Assemble
  const command1 = 'Lift 80,100,  WEST';
  const command2 = 'REMOVE';
  // Assert
  const cmdObject = getCommandObject(command1);
  const cmdObject2 = getCommandObject(command2);

  expect(cmdObject).toBeNull();
  expect(cmdObject2).toBeNull();
});
