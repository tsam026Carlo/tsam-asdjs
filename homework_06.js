function CircularQueue(dim)
    {
        this.inserisci=0;
        this.leggi=0;
        this.que=new Array(dim);
        
    } 
    CircularQueue.prototype.enqueue=function(e)
    {
        if(this.que[this.inserisci]==null)
        {
            this.que[this.inserisci]=e;
            this.inserisci+=1;
            if(this.que.length==this.inserisci)
                this.inserisci=0;
        }
    };
    CircularQueue.prototype.dequeue=function()
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
    CircularQueue.prototype.front=function(){return this.que[this.leggi]};
    CircularQueue.prototype.isEmpty=function(){return this.leggi==this.inserisci;};
    CircularQueue.prototype.size=function()
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
