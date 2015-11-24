function CircularQueue(dim)
    {
        this.inserisci=0;
        this.leggi=0;
        this.que=new Array(dim);
        
    } 
    Queue.prototype.enqueue=function(e)
    {
        if(this.que[this.inserisci]==null)
        {
            this.que[this.inserisci]=e;
            this.inserisci+=1;
            if(this.que.length==this.inserisci)
                this.inserisci=0;
        }
    };
    Queue.prototype.dequeue=function()
    {
        if(this.que[this.leggi]!=null)
        {
            variable = this.que[this.leggi];
            this.que[this.leggi]=null;
            this.leggi+=1;
            if(this.que.length==this.leggi)
                this.leggi=0;
            return variable;

        }
    };
    Queue.prototype.front=function(){return this.que[this.leggi-1]};
    Queue.prototype.isEmpty=function(){return this.leggi==this.inserisci;};
    Queue.prototype.size=function()
    {
            if(this.inserisci>this.leggi)
            {
                return this.inserisci-this.leggi;
            }
            else{
                return (this.que.length-this.leggi)+this.inserisci;
            }
    };  

    variabile=new CircularQueue(3);
    variabile.enqueue(1);
    console.log(variabile.que)
    variabile.enqueue(2);
    console.log(variabile.que)
    variabile.enqueue(3);
    console.log(variabile.que)
    variabile.enqueue(4);
    console.log(variabile.que)
    variabile.dequeue();
    variabile.dequeue();
    variabile.enqueue(4);
    console.log(variabile.que)
    variabile.dequeue();
    variabile.dequeue();
    variabile.enqueue(4);
    console.log(variabile.que)
    variabile.enqueue(4);
    console.log(variabile.que)
