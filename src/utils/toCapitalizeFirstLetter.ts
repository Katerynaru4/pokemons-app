function toCapitalizeFirstLetter(str: string) {
  return str.length === 0 ? str : str[0].toUpperCase() + str.slice(1);
}

export default toCapitalizeFirstLetter;
