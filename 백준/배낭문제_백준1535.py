# 백준 1535번 - 배낭 문제
# https://www.acmicpc.net/problem/1535

def solution(N, L, J):
    max_health = 100
    dp = [[0 for _ in range(max_health+1)] for _ in range(N+1)]

    for l in range(1, N+1):
        for j in range(1, max_health+1):
            if L[l-1] <= j:
                dp[l][j] = max(dp[l-1][j], dp[l-1][j-L[l-1]]+J[l-1])
            else:
                dp[l][j] = dp[l-1][j]
    return dp[N][max_health-1]

N = int(input())
L = [int(x) for x in input().split()]
J = [int(x) for x in input().split()]
print(solution(N,L,J))