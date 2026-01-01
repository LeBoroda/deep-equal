import { DeepEqualEngine } from './deep-equal-engine.js';

const greatEqualizer = new DeepEqualEngine();
console.log(greatEqualizer.deepEqual([1, 2], [1, 2]));
console.log(
  greatEqualizer.deepEqual(new Date('2323-01-11'), new Date('2323-01-12')),
);
console.log(
  greatEqualizer.deepEqual('I am GROOT!', {
    name: 'Groot',
    phrase: 'I am GROOT!',
  }),
);

//Create object with recursive link 'by mistake'
const spaceOverlord: any = {
  name: 'Peter',
  lastName: 'Quill',
  nickname: null,
};
spaceOverlord.nickname = spaceOverlord;

console.log(greatEqualizer.deepEqual(spaceOverlord, spaceOverlord.nickname));
