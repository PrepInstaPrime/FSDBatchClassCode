let graph={};
function addVertex(vertex){
    if(!graph[vertex]){
        graph[vertex]=[];
    }
}
function addEdge(v1,v2,weight){
    graph[v1].push({node:v2,weight:weight});
}
function display(){
    for(let vertex in graph){
        console.log(vertex+"->");
        for(let ele of graph[vertex]){
            console.log(`Node : ${ele.node} Weight : ${ele.weight}`)
        }
    }
}
addVertex('A')
addVertex('B')
addVertex('C')
addVertex('D')
addEdge('A','B',2)
addEdge('B','C',3)
addEdge('C','D',4)
addEdge('D','A',1)
addEdge('A','C',3)
console.log(graph)
display()