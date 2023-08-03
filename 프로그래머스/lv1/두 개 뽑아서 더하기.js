// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let result = [];
  for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
      result.push(numbers[i]+numbers[j]);
    }
  }
  return [...new Set(result.sort((a,b) => a-b))];
}
// Set으로 중복 제거
// sort 함수로 정렬

let numbers = [2,1,3,4,1];
console.log(solution(numbers));
numbers = [5,0,2,7];
console.log(solution(numbers));

// 8분