/*Iteration 1: Names and Input*/

/*1.1 Create a variable `hacker1` with the driver's name.=> Barbara.*/
let hacker1 = "Barbara";

/*1.2 Print `"The driver's name is XXXX"`.*/
console.log(`The driver´s name is ${hacker1}.`)

/*1.3 Create a variable `hacker2` with the navigator's name. => ALexandre.*/
let hacker2 = "Alexandre";

/*1.4 Print `"The navigator's name is YYYY"`.*/
console.log(`The navigator's name is ${hacker2}.`)

/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
}

/*Iteration 3: Loops*/

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/
let hacker1Upper = hacker1.toUpperCase();

let hacker1Final = "";

for(let i=0; i < hacker1Upper.length; i++){
  hacker1Final = hacker1Final + hacker1Upper[i] + " ";
}
console.log(hacker1Final);
 
/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/
let hacker2final = "";

for(let j=(hacker2.length - 1); j>=0; j--){
  hacker2final = hacker2final + hacker2[j];
}
console.log(hacker2final);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1.localeCompare (hacker2)<0){
  console.log(`- The driver's name goes first.`)
}
else if (hacker1.localeCompare (hacker2)>0){
  console.log(`- Yo, the navigator goes first definitely.`)
}
else{
  console.log(`- What?! You both have the same name?`)
}

//Bonus Time!

//Bonus 1 - count word

let a = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id convallis dolor, ornare venenatis orci. Curabitur a convallis purus. Nullam eget purus sed tellus ornare egestas quis non leo. Quisque imperdiet vitae enim vel dignissim. Sed quis libero a ligula gravida ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam interdum elit a enim pretium, a mollis magna placerat. In convallis mi sed elit ullamcorper iaculis. Sed est felis, vulputate quis arcu sit amet, porttitor placerat orci. Aenean efficitur, orci vel sagittis consectetur, turpis massa rutrum magna, in sagittis magna lectus id risus. \nQuisque imperdiet est nec tempor consequat. Phasellus sit amet varius elit. Ut velit quam, sagittis eu laoreet sit amet, gravida vel lorem. Nunc condimentum nisi quis placerat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar, dolor vitae sollicitudin pellentesque, neque eros maximus justo, quis sagittis ex odio vitae metus. Sed maximus dui et leo cursus, eu dictum ligula dapibus. Sed porttitor ultricies lectus sit amet consequat. Aliquam enim leo, sollicitudin nec nibh id, elementum fermentum orci. Integer consequat urna quis auctor sodales. Ut finibus porta lectus sit amet tristique. \nSuspendisse vitae rhoncus sapien. Mauris elementum nunc eu nisl malesuada eleifend. Nunc vitae varius velit. Nulla purus lorem, vulputate eget tincidunt sit amet, efficitur vel lacus. Suspendisse placerat nunc sit amet fringilla lacinia. Pellentesque sed augue libero. Mauris blandit euismod volutpat. Nulla ultrices sagittis dui et suscipit. Nulla facilisi. Curabitur sollicitudin sapien arcu, quis fringilla tellus accumsan sed. Nullam id rhoncus neque. Duis tincidunt mollis orci vel iaculis.";

console.log(a)

let countWord = 1; /*última palavra não tem espaço*/

for(let i=0; i<a.length; i++){
  if(a[i]===" "){
    countWord++
  }
}

console.log(countWord)

/*Bonus 1 - count et*/
/*Make your program count the number of times the Latin word et appears.*/

let countEt = 1; /*última palavra não tem espaço*/

for(let i=0; i<a.length; i++){
  if(a[i]==="et"){
    countEt++
  }
}

console.log(countEt)

/*BONUS 2*/
let phraseToCheck = "A man, a plan, a canal, Panama";
let phraseToCheck2 = phraseToCheck.toUpperCase();

console.log(`phraseToCheck2 é igual à ${phraseToCheck2}`);

let palindromeToCheck = [];
let phraseToCheck3 = [];

/*criar nova array sem vírgula e espaço e na ordem inversa, colocando sempre no início da variável*/
for (let i=0; i<phraseToCheck2.length; i++){
  if(phraseToCheck2[i] !== "," && phraseToCheck2[i] !== " "){
    phraseToCheck3.push(phraseToCheck2[i]);
    palindromeToCheck.unshift(phraseToCheck2[i]);
  }
}
console.log(`phraseToCheck3 é igual à ${phraseToCheck3} e \npalindromeToCheck é igual à ${palindromeToCheck}`);

/*comparar array1 e array2*/

for (let j=0; j<phraseToCheck3.length; j++){
    if(phraseToCheck3[j] !== palindromeToCheck[j]){
      console.log(`${phraseToCheck} it is not a palindrome`);
      break;
    }
    else {
      continue;
    }
  }

console.log(`${phraseToCheck} it is a palindrome`);