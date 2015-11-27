
function QueueItem(i,p){
	this.value = i;
	this.priority = p;
}

function PriorityQueue(){
	this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e){
	if(this.isEmpty()){ 
		this.queue.push(e);
	}else{
		this.queue.every(function(x,y,arr){
				if(x.priority > e.priority){
					if(y == arr.length -1)
						arr.push(e);
					return true;
				}else{
					arr.splice(y,0,e);
					return false;
				}
			});
	}
}
PriorityQueue.prototype.dequeue = function(){
	return this.queue.pop();
}
PriorityQueue.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}
PriorityQueue.prototype.isEmpty = function(){
	return this.size() == 0;
}
PriorityQueue.prototype.size = function(e){
	return this.queue.length;
}


//modalita callback



function PriorityQueueC(callback){
	this.queue = [];
	this.p = callback;
}

PriorityQueueC.prototype.enqueue = function(e){
	var that = this;
	if(this.isEmpty()){ 
		this.queue.push(e);
	}else{
		this.queue.every(function(x,index,arr){
				if(that.p(x,e) != -1){
					if(index == arr.length -1) 
						arr.push(e);
					return true;
				}else{
					arr.splice(index,0,e);
					return false;
				}
			});
	}
}
PriorityQueueC.prototype.dequeue = function(){
	return this.queue.pop();
}
PriorityQueueC.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}
PriorityQueueC.prototype.isEmpty = function(){
	return this.size() == 0;
}
PriorityQueueC.prototype.size = function(e){
	return this.queue.length;
}

function funzione(x,p){
	if(x.priority<p.priority)
		return -1;
	else if(x.priority == p.priority)
		return 0;
	else
		return 1;
}
