// https://school.programmers.co.kr/learn/courses/30/lessons/181187

// 1. 이중 for문
// 테스트 케이스 7,8,9,10 실패 - 시간 초과
// 시간 복잡도 불만족
// function solution(r1, r2) {
//   let result = 0;
//   for(let x = 1; x<=r2; x++) {
//     for(let y = 0; y<=r2; y++) {
//       if(x**2+y**2 >= r1**2 && x**2+y**2 <= r2**2) {
//         result ++;
//       }
//     }
//   }
//   return result*4;
// }

// 2. x 값에 따라 y의 범위 구하기
// y^2 = r^2 - x^2
function solution(r1, r2) {
  let result = 0;
  for(let x = 1; x < r2; x++) { // 사분면 x4 이므로 x는 1부터 시작
    const yMax = Math.floor(Math.sqrt(r2**2 - x**2));
    const yMin = r1 > x ? Math.ceil(Math.sqrt(r1**2 - x**2)) : 0 ;
    result += yMax -  yMin + 1;
  }
  result ++; // x = r2 인 경우
  return result*4; // 한 사분면 x 4
}

let r1 = 2, r2 = 3;
console.log(solution(r1, r2));

