// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
// 1. 주어진 sides 배열의 값이 가장 긴 변일 경우
// 2. 나머지 한 변이 가장 긴 변인 경우
function solution(sides) {
  let count = 0;
  // 1
  let max = 0;
  let other_side = 0;
  if(sides[0]<sides[1]) {
    max = sides[1];
    other_side = sides[0];
  } else {
    max = sides[0];
    other_side = sides[1];
  }
  //let max = sides[0] < sides[1] ? sides[1] : sides[0];
  let i = max-other_side+1;
  while(true){
    if(i<=max) {
      count ++;
      i++;
      continue;
    }
    else break;
  }
  // 2
  i = max + 1;
  while(true) {
    if(i<max+other_side){
      count ++;
      i++;
      continue;
    }
    else break;
  }
  return count;
}
let sides = [1,2];
console.log(solution(sides));
sides = [3,6];
console.log(solution(sides));
sides = [11,7];
console.log(solution(sides));