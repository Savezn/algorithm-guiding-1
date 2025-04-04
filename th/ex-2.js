const romanToInt = function (s) {
  //Start coding here
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  let result = 0
  
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    console.log(romanNumerals[s[i]]);

    const currentValue = romanNumerals[s[i]];
    const nextValue = romanNumerals[s[i + 1]];

    if (nextValue && currentValue < nextValue) {
      result -= currentValue
    } else {
      result += currentValue
    }

     console.log(result);
  }


  return result
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
