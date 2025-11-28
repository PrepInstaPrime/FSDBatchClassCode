let graph={}
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[]
    }
}
function addEdge(v1, v2, weight){
    graph[v1].push({node:v2, weight:weight});
}
function dijkstra(start,end){
    let distances={};
    let visited=new Set();
    for(let node in graph){
        distances[node]=Infinity;
    }
    distances[start]=0;
    function getMinDistance(){
        let minDis=Infinity;
        let minNode=null;
        for(let node in distances){
            if(!visited.has(node)&&distances[node]<minDis){
                minDis=distances[node];
                minNode=node;
            }
        }
        return minNode;
    }
    while(true){
        let current= getMinDistance();
        if(current==null){
            break;
        }
        visited.add(current);
        for(let {node:neighbour, weight} of graph[current]){
            let newDistance= distances[current]+weight;
            if(newDistance<distances[neighbour]){
                distances[neighbour]=newDistance;
            }
        }
    }
    return distances[end];
}
addVertex('A')
addVertex('B')
addVertex('C')
addVertex('D')
addVertex('E')
addEdge('A','B',2)
addEdge('A','D',3)
addEdge('A','E',3)
addEdge('B','E',2)
addEdge('C','A',1)
addEdge('D','C',3)
addEdge('E','D',2)
console.log(dijkstra('A','D'));
// console.log(graph)