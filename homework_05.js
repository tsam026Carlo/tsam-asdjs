function queue()
    {
        this.que=new Array();
        this.enqueue=function(e){return this.que.unshift(e)};
        this.dequeue=function(){return this.que.pop()};
        this.front=function(){return this.que[this.que.length-1]};
        this.isEmpty=function(){return this.size()==0};  
    }  
    function Stack()
    {
        this.bin=new Array();
        this.push=function(elemento){
            return this.bin.push(elemento);
        }
        this.pop=function(){
            return this.bin.pop();}
    }

function rpn_1(ris,array)
{
    if(array.length==0)
    {
        return ris.pop();
    }
    switch(array[0])
    {
        case '+':
                ris.push(ris.pop()+ris.pop());
                break;
        case '*':
                ris.push(ris.pop()*ris.pop());
                break;
        case '-':
                tmp=ris.pop();
                ris.push(ris.pop()-tmp);
                break;
        
        case '/':
                tmp=ris.pop();
                ris.push(ris.pop()/tmp);
                break;
        default:
                ris.push(parseInt(array[0]));
                break;
    }
    return rpn_1(ris,array.slice(1));
    } 
function rpn(array)
{
    ris= new Stack();
    array=array.split(' ');
    return rpn_1(ris,array);
}