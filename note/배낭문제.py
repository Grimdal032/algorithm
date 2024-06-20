# 주어진 물품 각각이 무게와 가치가 있을 때, 배낭에 담을 수 있는 최대 무게를 초과하지 않으면서 담을 수 있는 물품의 최대 가치를 찾는 문제
# 상향식 접근

def knapsack(weights, values, max_weight):
    n = len(weights)
    # 2차원 리스트 생성
    dp = [[0 for _ in range(max_weight + 1)] for _ in range(n + 1)]

		# 1. 배낭에 물품을 넣지 않은 경우 i = 0
		# dp[0][w]는 항상 0
		# 2. 배낭의 용량이 0인 경우 w = 0
		# dp[i][0]도 항상 0
		# 3. 일반 경우
    for i in range(1, n + 1):
        for w in range(1, max_weight + 1):
		# 3.1 현재 물품을 배낭에 넣을 수 있는 경우
            if weights[i - 1] <= w:
		# 현재 물품을 넣지 않는 경우 vs 넣는 경우 => max
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
		# 3.2 무게 초과 = 배낭에 넣을 수 없음
            else:
                dp[i][w] = dp[i - 1][w]

    return dp[n][max_weight]

# 예제 사용
weights = [1, 2, 3, 5]
values = [1, 6, 10, 16]
max_weight = 7
print(knapsack(weights, values, max_weight))  # 출력: 22