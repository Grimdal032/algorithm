from collections import deque

def bfs(graph, start):
    # 방문한 정점을 추적하기 위한 집합
    visited = set()
    # 탐색할 정점을 추적하기 위한 큐
    queue = deque([start])
    # 시작 정점을 방문했다고 표시
    visited.add(start)

    while queue:
        # 큐의 앞쪽에서 정점을 하나 꺼냄
        vertex = queue.popleft()
        print(vertex, end=" ")

        # 인접한 모든 정점을 검사
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# 예제 그래프
# 키는 정점, 값을 해당 정점에 인접한 정점들의 리스트
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# BFS 실행
bfs(graph, 'B')