let graph={};
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(v1,v2){
    graph[v1].push(v2);
}
function checkCycle(node,visited= new Set(), recStack= new Set()){
    if(recStack.has(node)){
        return true;
    }
    if(visited.has(node)){
       return false;
    }
    recStack.add(node);
    visited.add(node);
    for(let neighbour of graph[node]){
        if(checkCycle(neighbour,visited,recStack)){
            return true;
        }
    }
    recStack.delete(node);
    return false;
}
addVertex('A')
addVertex('B')
addVertex('C')
addVertex('D')
// addVertex('E')
addEdge('A','B');
// addEdge('A','E');
addEdge('B','C');
// addEdge('B','E');
addEdge('C','D');
// addEdge('C','E');
// addEdge('D','E');
addEdge('B','D')
addEdge('D','A');
console.log(checkCycle('A'))