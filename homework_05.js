 
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