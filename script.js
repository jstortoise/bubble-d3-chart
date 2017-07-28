var graph = {};


$(function(){
	graph.data = {'bigData' : {'one':3, 'two':45, 'three':67, 'four':32}};
	graph.max();
	
});

graph.return = function(){
	for (var i= 0; i < graph.data.length; i++) 	{
		graph.dataReturn = graph.data[i] / graph.maxVal;
		graph.display(graph.dataReturn);
	};
	
}	

graph.max = function(){
	graph.maxVal = Math.max.apply(Math, graph.data)
	console.log(Math.max.apply(Math, graph.data));
}

graph.display = function(data){
	rad = data * 250
	var circle = $('<div class="circle">').css({width: rad, height: rad})
	console.log(data);
	console.log(circle);
	console.log('I am rad ' + rad);
	
	$('.chart').append(circle);
	

}

// D3.js
graph.diameter = 600;
graph.svg = d3.select('.chart').append('svg')
	.attr('width', graph.diameter)
	.attr('height', graph.diameter)

graph.processData = function(data) {
	var obj = graph.data.bigData;
	graph.newDataset = [];
	console.log(graph.newDataset);
	for(var prop in obj) { graph.newDataset.push({name: prop, className: prop.toLowerCase(), size: obj[prop]}); } return {children: graph.newDataset}; 
} 

graph.bubble = d3.layout.pack()
	.size([graph.diameter,graph.diameter])
	.padding(3)
	.value(function(d){return d.size})

graph.nodes = graph.bubble.nodes(graph.data)

graph.vis = svg.selectAll('circle')
	.data(nodes, function(d){return d.name});

vis.enter().append('circle')
	.attr('transform', function(d) {return 'translate(' + d.x + ',' + d.y + ')';})
	.attr('r', function(d){return d.r; })
	.attr('class', function(d) {return d.className;})







