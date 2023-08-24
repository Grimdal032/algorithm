// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  new_id = new_id.toLowerCase(); //step 1
  new_id = new_id.replace(/[^\w\-\.]/g, ""); //step 2
  new_id = new_id.replace(/\.{2,}/g, "."); //step 3
  new_id = new_id.replace(/^\.|\.$/, ""); //step 4
  if (new_id.length == 0) {
    new_id = "a";
  } //step 5
  new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/^\.|\.$/, ""); //step 6
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  } // step 7
  return new_id;
}

let ex1 = "...!@BaT#*..y.abcdefghijklm"; // "bat.y.abcdefghi"
let ex2 = "z-+.^."; // "z--"
let ex3 = "=.="; // 	"aaa"
let ex4 = "123_.def"; // "123_.def"
let ex5 = "abcdefghijklmn.p"; // "abcdefghijklmn"

console.log(solution(ex1));
