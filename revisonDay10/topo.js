let graph={};
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(src,dest){
    graph[src].push(dest);
}
function topo(){
    let inDegree={};
    // create inDegree object with Keys
    for(let vertex in graph){
        inDegree[vertex]=0;
    }
    // calculate inDegree values 
    for(let vertex in graph){
        for(let neighbour of graph[vertex]){
            inDegree[neighbour]++;
        }
    }
    // push all the nodes with inDegree 0 to queue
    let queue=[];
    for(let vertex in inDegree){
        if(inDegree[vertex]==0){
            queue.push(vertex);
        }
    }
    let result=[];
    // BFS
    while(queue.length>0){
        let node= queue.shift();
        result.push(node);
        for(let neighbour of graph[node]){
            inDegree[neighbour]--;
            if(inDegree[neighbour]==0){
                queue.push(neighbour);
            }
        }
    }
    if(result.length!=Object.keys(graph).length){
        console.log("Cycle detected");
        return;
    }
    console.log(result)
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
topo()
