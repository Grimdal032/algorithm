// 1. 재귀함수
// 정확성 테스트는 통과했으나, 효율성 테스트를 통과하지 못함
// function solution(n, money) {
//   if(n === 0) return 1;
//   if(n < 0 || money.length == 0) return 0;
//   return solution(n, money.slice(1)) + solution(n-money[0], money);
// }

// 1-1. money의 길이가 1 일때 바로 끝까지 계산
// x + 2y + 5z = 10
// z = 0,1,2 인 경우로 나눠서 풀이
// 효율성 테스트 2,3,4,5 통과 못함

// function solution(n, money) {
//   m = money.reverse();
//   function countCombinations(n,m){
//     if(m.length == 1) {
//       while(true) {
//         n -= m[0];
//         if(n === 0) return 1;
//         if(n < 0) return 0;
//       }
//     }
//     else {
//       if(n === 0) return 1;
//       if(n < 0 || m.length == 0) return 0;
//     }
//     return countCombinations(n, m.slice(1)) + countCombinations(n-m[0], m);
//   }
//   return countCombinations(n,m);
// }

// 2. 메모이제이션 사용 - 바텀-업 방식
// 중복 계산 제거 - 이미 계산된 결과를 저장하고 재활용
function solution(n, money) {
  const memo = Array(n+1).fill(0);
  memo[0] = 1;  // base case
  for(let i=0; i<money.length; i++) {
    for(let j=money[i]; j<=n; j++) {
      memo[j] += memo[j-money[i]];
    }
  }
  return memo[n];
}

let n = 5, money = [1,2,5]
console.log(solution(n,money));
