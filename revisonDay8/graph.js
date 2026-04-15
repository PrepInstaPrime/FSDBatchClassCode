let graph={}
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(src,dest){
    graph[src].push(dest);
    graph[dest].push(src);
}
function print(){
    for(let neighbour in graph){
        console.log(neighbour+"->"+graph[neighbour])
    }
}
function bfs(start){
    let queue=[];
    let visited= new Set();
    queue.push(start);
    visited.add(start);
    while(queue.length>0){
        let vertex= queue.shift();
        console.log(vertex);
        for(let neighbour of graph[vertex]){
            if(!visited.has(neighbour)){
                queue.push(neighbour);
                visited.add(neighbour)
            }
        }
    }
}
function dfs(start,visited=new Set()){
        visited.add(start);
        for(let neighbour of graph[start]){
            if(!visited.has(neighbour)){
               
                dfs(neighbour,visited);
            }
        }
        console.log(start);
        
}
addVertex(1);
addVertex(2);
addVertex(3);
addVertex(4);
addVertex(5);
addEdge(1,3);
addEdge(1,4);
addEdge(1,2);
addEdge(2,5);
// print()
console.log("BFS: ")
bfs(1)
console.log("DFS: ")
dfs(1)