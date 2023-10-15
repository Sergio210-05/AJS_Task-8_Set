import Character from '../char';
import Team from '../team';

const LilTimmy = new Character('Little Timmy', 'Gul');
const Illidan = new Character('Illidan', 'Night Elf');
const Artas = new Character('Artas', 'Death Knigth');

test('Testing addAll function', () => {
  const DreamTeam = new Team();
  const exTeam = new Set([LilTimmy, Illidan]);

  DreamTeam.addAll(LilTimmy, Illidan);
  expect(DreamTeam.members).toEqual(exTeam);
});

test('Testing add function', () => {
  const DreamTeam = new Team();
  const exTeam = new Set([LilTimmy]);

  DreamTeam.add(LilTimmy);
  expect(DreamTeam.members).toEqual(exTeam);
  expect(() => { DreamTeam.add(LilTimmy); }).toThrow(Error);
});

test('Testing toArray function', () => {
  const DreamTeam = new Team();

  DreamTeam.addAll(LilTimmy, Illidan, Artas);
  expect(DreamTeam.toArray()).toEqual([LilTimmy, Illidan, Artas]);
});
