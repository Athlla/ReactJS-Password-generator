const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
const numberChar = '0123456789';
const symbolChar = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

export const generatePass = (options, passLength) => {
  let charList = '';
  if (
    !options.uppercase &&
    !options.lowercase &&
    !options.number &&
    !options.symbol
  ) {
    return '';
  }
  if (options.uppercase) {
    charList += upperChar;
  }
  if (options.lowercase) {
    charList += lowerChar;
  }
  if (options.number) {
    charList += numberChar;
  }
  if (options.symbol) {
    charList += symbolChar;
  }

  console.log(charList);

  let generatedPass = '';
  for (let i = 0; i < passLength; i++) {
    generatedPass += charList[Math.floor(Math.random() * charList.length)];
  }

  return generatedPass;
};
