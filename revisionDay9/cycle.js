let graph={}
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(src,dest){
    // directed graph
    graph[src].push(dest);
}
function display(){
    for(let vertex in graph){
        console.log(vertex+"-> "+graph[vertex])
    }
}
function checkCycle(node,visited= new Set(),recStack= new Set()){
    if(recStack.has(node)){
        return true;
    }
    if(visited.has(node)){
        return false;
    }
    visited.add(node);
    recStack.add(node);
    for(let neighbour of graph[node]){
        if(checkCycle(neighbour,visited,recStack)){
            return true;
        }
    }
    recStack.delete(node);
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
addEdge(4,2);
display()
console.log(checkCycle(1))