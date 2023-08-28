function removeVowel(string) {
  const regex = /[aeiou]/gi;
  return string.replace(regex, "");
}
