import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('The function should take a string and return it with the first letter capitalized', () => {
    const result = toCapitalizeFirstLetter('my string');

    expect(result).toBe('My string');
  });
  test('The function must take an empty string and return it.', () => {
    const result = toCapitalizeFirstLetter('');

    expect(result).toBe('');
  });
});
