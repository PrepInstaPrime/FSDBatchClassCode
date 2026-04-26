let graph={}
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(src,dest){
    // undirected graph
    graph[src].push(dest);
    graph[dest].push(src);
}
function display(){
    for(let vertex in graph){
        console.log(vertex+"-> "+graph[vertex])
    }
}
function checkCycle(node , visited=new Set(),parent){
    visited.add(node);
    for(let neighbour of graph[node]){
        if(!visited.has(neighbour)){
            if(checkCycle(neighbour,visited,node)){
                return true;
            }
        }else if(neighbour!=parent){
            return true;
        }
    }
    return false;
}
addVertex(1);
addVertex(2);
addVertex(3);
addVertex(4);
addVertex(5);
addEdge(1,2);
addEdge(2,3);
addEdge(3,4);
addEdge(3,5);
// addEdge(4,2);
display()
console.log(checkCycle(1))