import heapq

# 그래프는 딕셔너리로 정의, 키 = 정점 / 값 = 인접 정점과 간선의 가중치
def dijkstra(graph, start):
    # 모든 정점까지의 거리를 무한대로 초기화
    distances = {vertex: float('infinity') for vertex in graph}
    # 출발점의 거리는 0으로 설정
    distances[start] = 0
    # 우선순위 큐 생성
    priority_queue = [(0, start)]

    while priority_queue:
        # 가장 짧은 거리를 가진 정점을 꺼냄
        current_distance, current_vertex = heapq.heappop(priority_queue)

        # 이미 처리된 정점이면 건너뜀
        if current_distance > distances[current_vertex]:
            continue

        # 현재 정점의 모든 인접 정점 검사
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            # 새로운 경로가 더 짧은 경우 업데이트
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances

# 예제 그래프
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'D': 2, 'E': 5},
    'C': {'A': 4, 'F': 3},
    'D': {'B': 2},
    'E': {'B': 5, 'F': 1},
    'F': {'C': 3, 'E': 1}
}

# 다익스트라 알고리즘 실행
start_vertex = 'A'
print(dijkstra(graph, start_vertex))