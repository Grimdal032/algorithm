def floyd_warshall(graph):
    # 정점의 개수
    V = len(graph)
    
    # dist 배열 초기화
    dist = [[float('inf')] * V for _ in range(V)]
    
    # 그래프의 인접 행렬로 dist 배열 초기화
    for i in range(V):
        for j in range(V):
            if i == j:
                dist[i][j] = 0
            elif graph[i][j] != 0:
                dist[i][j] = graph[i][j]
    
    # 동적 프로그래밍으로 최단 경로 갱신
    for k in range(V): # 중간 정점
        for i in range(V): # 시작 정점
            for j in range(V): # 도착 정점
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist

# 예제 그래프 (인접 행렬)
graph = [
    [0, 3, float('inf'), 5],
    [2, 0, float('inf'), 4],
    [float('inf'), 1, 0, float('inf')],
    [float('inf'), float('inf'), 2, 0]
]

# 플로이드-워셜 알고리즘 실행
distances = floyd_warshall(graph)

# 최단 경로 출력
for row in distances:
    print(row)