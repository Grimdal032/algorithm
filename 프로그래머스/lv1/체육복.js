function solution(n, lost, reserve) {
  // 초기화
  let stu = [];
  for (let i = 0; i < n; i++) {
    stu.push([i + 1, 1]);
  }
  // lost
  for (let i = 0; i < lost.length; i++) {
    stu[lost[i] - 1][1] = 0;
  }
  // reserve
  for (let j = 0; j < reserve.length; j++) {
    if (stu[reserve[j] - 1][1] == 0) {
      stu[reserve[j] - 1][1] = 1;
    } else {
      stu[reserve[j] - 1][1] = 2;
    }
  }
  //stu.sort((a,b) => a[0]-b[0]);
  // [ [ 1, 2 ], [ 2, 0 ], [ 3, 2 ], [ 4, 0 ], [ 5, 2 ] ]
  // result[0] = [1,2]
  // 1 -> 오른쪽, 2~ -> 왼쪽
  for (let i = 0; i < n - 1; i++) {
    if (Math.abs(stu[i][1] - stu[i + 1][1]) == 2) {
      stu[i][1] = 1;
      stu[i + 1][1] = 1;
    }
  }
  return stu.filter((a) => a[1] > 0).length;
}

let n1 = 13;
let lost1 = [1, 2, 5, 6, 10, 12, 13];
let reserve1 = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

// 11
console.log(solution(n1, lost1, reserve1));

// Math.abs() 절대값
