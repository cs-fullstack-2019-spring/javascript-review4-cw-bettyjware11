//Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all
// caps. Hint: see toUppercase()
//
// ex. in a galaxy far far away -> in A galaxy FAR far AWAY

var string = 'in a galaxy far far away.';

function toEveryOtherWord(string) {
    var splitStr = string.split(" ");
    //var newArr = [];

    for (var i = 0; i < splitStr.length; i++) {

        let word =  splitStr[i];

            if (i % 2 === 0) {
                word = word.toUpperCase();
            }

            console.log(word);
        }
        // newArr.push(words.join(""));
    }
      // console.log(newArr.join(""));

toEveryOtherWord('in a galaxy far far away'); //Should return 'in'
// console.log(toEveryOtherWord('a')); //Should return 'A'
// console.log(toEveryOtherWord('galaxy')); //Should return 'galaxy'
// console.log(toEveryOtherWord('far')); //Should return 'FAR'
// console.log(toEveryOtherWord('far')); //Should return 'far'
// console.log(toEveryOtherWord('away')); //Should return 'AWAY"














//var words = splitStr[i].split("");