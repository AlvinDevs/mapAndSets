//new Set([1,1,2,2,3,4])

//Set(4) {1, 2, 3, 4}

//[...new Set("referee")].join("")

// 'ref'

//let m = new Map();
//m.set([1,2,3], true);
//m.set([1,2,3], false);

//Map(2) {Array(3) => true, Array(3) => false}

const hasDuplicate = (dup) => new Set(dup).size !== (dup).length;

hasDuplicate([1,3,2,1]); // true
hasDuplicate([1,5,-1,4]); // false


const isVowel = (char) => "aeiou".includes(char);

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }






