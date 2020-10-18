module.exports = function toReadable (number) {
  function check1(number) {
    switch(number){
      case 0: return 'zero'
      case 1: return 'one '
      case 2: return 'two '
      case 3: return 'three '
      case 4: return 'four '
      case 5: return 'five '
      case 6: return 'six '
      case 7: return 'seven '
      case 8: return 'eight '
      case 9: return 'nine '
    }
  } 
  function check2(number) {
    if (number <= 18 && number != 14 && number != 16 && number != 17 ){
      switch (number) {
        case 10: return 'ten '
        case 11: return 'eleven '
        case 12: return 'twelve '
        case 13: return 'thirteen '
        case 15: return 'fifteen '
        case 18: return 'eighteen '
      }
    }
    else if (number < 20){
      return check1(number - 10).trim() + 'teen'
    }
    else if (number < 100 && number % 10 == 0) {
      switch(number){
        case 20: return 'twenty '
        case 30: return 'thirty '
        case 40: return 'forty '
        case 50: return 'fifty '
        case 60: return 'sixty '
        case 70: return 'seventy '
        case 80: return 'eighty '
        case 90: return 'ninety '
      }
    }
    else {
      return check2(number - +number.toString()[1]) + check1(+number.toString()[1])
    }
  }

  function check3(number){
    if (+number.toString()[1] == 0 && +number.toString()[2] == 0){
      return check1(number / 100) + 'hundred '
    }
    else if(+number.toString()[1] == 0 && +number.toString()[2] != 0){
      return check1(+number.toString()[0]) + 'hundred ' + check1(+number.toString()[2])
    }
    else return check1(+number.toString()[0]) + 'hundred ' + check2(+number.toString().slice(1,3))
  }

  if (number < 10) return check1(number).trim()
  else if (number < 100) return check2(number).trim()
  else return check3(number).trim()
}
