// undirected graph
let graph = {}
function addVertex(vertex) {
    if (!graph[vertex]) {
        graph[vertex] = []
    }
}
function addEdge(v1, v2) {
    graph[v1].push(v2);
    graph[v2].push(v1);
}
function printGraph() {
    for (let node in graph) {
        console.log(`${node}->${graph[node].join(',')}`)
    }
}
function dfs(start, visited = new Set()) {
    console.log(start);
    visited.add(start);
    for (let neighbour of graph[start]) {
        if (!visited.has(neighbour)) {
            dfs(neighbour, visited);
        }
    }
}
function bfs(start){
    let queue=[];
    let visited = new Set();
    queue.push(start);
    visited.add(start)
    while(queue.length>0){
        let vertex=queue.shift();
        console.log(vertex);
        for(let neighbour of graph[vertex]){
            if(!visited.has(neighbour)){
                queue.push(neighbour);
                visited.add(neighbour);
            }
        }
    }
}
addVertex('A')
addVertex('B')
addVertex('C')
addVertex('D')
addVertex('E')
addEdge('A', 'B')
addEdge('A', 'C')
addEdge('B', 'D')
addEdge('C', 'E')
addEdge('D', 'E')
// printGraph()
// console.log(graph)
console.log("dfs")
dfs('A')
console.log("bfs")
bfs('A')
