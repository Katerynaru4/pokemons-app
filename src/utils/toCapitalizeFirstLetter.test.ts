import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Функция должна принимать строку и возращать ее, изменив первую букву на заглавную', () => {
    const result = toCapitalizeFirstLetter('my string');

    expect(result).toBe('My string');
  });
  test('Функция должна принимать пустую строку и возращать ее', () => {
    const result = toCapitalizeFirstLetter('');

    expect(result).toBe('');
  });
});
