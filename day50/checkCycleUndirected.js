let graph = {};
function addVertex(vertex) {
    if (!graph[vertex]) {
        graph[vertex] = [];
    }
}
function addEdge(v1, v2) {
    graph[v1].push(v2);
    graph[v2].push(v1);
}
function checkCycle(node, visited = new Set(), parent=null) {
    visited.add(node);
    for (let neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
            if (checkCycle(neighbour, visited, node)) {
                return true;
            }
        }
        else if(neighbour!=parent){
            return true;
        }
    }
    return false;
}
addVertex('A')
addVertex('B')
addVertex('C')
addEdge('A', 'B');
addEdge('B', 'C');
addEdge('C', 'A')
console.log(checkCycle('A'))
console.log(graph)