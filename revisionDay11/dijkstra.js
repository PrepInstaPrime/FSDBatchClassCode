let graph={};
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(src, dest, weight){
    // directected Graph
    graph[src].push({node:dest,weight:weight});
}
function shortestPath(start,end){
    let distance={};
    let visited=new Set();
    for(let node in graph){
        distance[node]=Infinity;
    }
    distance[start]=0;
    function getMinDistance(){
        let minDis=Infinity;
        let nearestNode=null;
        for(let node in distance){
            if(!visited.has(node)&&distance[node]<minDis){
                minDis=distance[node]
                nearestNode=node;
            }
        }
        return nearestNode;
    }
    while(true){
        let current=getMinDistance();
        if(current==null){
            break;
        }
        for(let {node,weight} of graph[current]){
            let newDistance=distance[current]+weight;
            if(newDistance<distance[node]){
                distance[node]=newDistance;
            }
        }
        visited.add(current)
    }
    console.log(distance)
    return distance[end];
}
addVertex('A');
addVertex('B');
addVertex('C');
addVertex('D');
addVertex('E');
addEdge('A','B',2);
addEdge('A','D',8);
addEdge('B','C',2);
addEdge('C','E',2);
addEdge('C','D',3);
addEdge('D','E',2);
console.log(graph)
console.log(shortestPath('A','D'));