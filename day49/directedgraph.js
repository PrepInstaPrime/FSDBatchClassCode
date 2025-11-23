// directed graph with the help of adjacency list ( obj + array)
let graph ={}
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(v1,v2){
    graph[v1].push(v2)
}
function printGraph(){
    for(let node in graph){
        console.log(`${node}->${graph[node].join(',')}`)
    }
}

addVertex('A')
addVertex('B')
addVertex('C')
addVertex('D')
addVertex('E')
addEdge('A','B')
addEdge('A','C')
addEdge('B','D')
addEdge('C','E')
addEdge('D','E')
printGraph()
console.log(graph)