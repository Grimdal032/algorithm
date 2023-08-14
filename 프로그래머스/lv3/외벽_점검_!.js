// https://school.programmers.co.kr/learn/courses/30/lessons/60062

function solution(n, weak, dist) {
  const len = weak.length;

  // 원형 외벽을 직선으로 만듬
  for (let i = 0; i < len; i++) {
    weak.push(weak[i] + n);
  }

  // 내림차순 재배치
  dist.sort((a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {
    const permutations = getPermutation(dist, i); // 순열 생성

    for (const permutation of permutations) {
      // 취약 지점 커버 여부
      for (let j = 0; j < len; j++) {
        let line = weak.slice(j, len + j);
        for (const p of permutation) {
          const coverage = line[0] + p;
          line = line.filter((e) => e > coverage);
          if (!line.length) return i;
        }
      }
    }
  }
  // 불가능하면 -1 리턴
  return -1;
}

function getPermutation(arr, num) {
  // 1일 때 모든 요소를 배열로 변환하여 반환
  if (num === 1) return arr.map((val) => [val]);
  const result = [];

  // 주어진 배열의 각 요소를 고정값으로 사용하고 나머지 요소들로 재귀 순열 생성
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perms = getPermutation(rest, num - 1);
    const attached = perms.map((perm) => [fixed, ...perm]);
    result.push(...attached);
  });

  return result;
}

let n = 12,
  weak = [1, 5, 6, 10],
  dist = [1, 2, 3, 4];
// result = 2
console.log(solution(n, weak, dist));
(n = 12), (weak = [1, 3, 4, 9, 10]), (dist = [3, 5, 7]);
// result = 1
console.log(solution(n, weak, dist));
