// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let n = nums.length / 2; //선택해야하는 갯수
  let set = new Set(nums); // 중복 제거
  let arr_set = [...set].sort((a, b) => a - b); // 정렬
  // 최대한 많은 종류를 뽑아야 하므로
  // arr_set >= n  => n
  // arr_set < n => arr_set.length 를 반환
  if (arr_set.length >= n) {
    return n;
  } else if (arr_set.length < n) {
    return arr_set.length;
  }
}

let nums1 = [3, 1, 2, 3];
let nums2 = [3, 3, 3, 2, 2, 4];
let nums3 = [3, 3, 3, 2, 2, 2];
