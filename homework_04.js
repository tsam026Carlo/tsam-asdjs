    function Stack()
    {
        this.bin=new Array();
        this.push=function(elemento){
            return this.bin.push(elemento);
        }
        this.pop=function(){
            return this.bin.pop();
        }
    }
    function dec2bin(dec)
    {
        element= new Stack();
        dec2bin1(dec,element);
        res="";
        while(element.bin.length>0)
        {
            res+=element.pop();
        }
        return res;
    }
    function dec2bin1(dec,bin)
    {       
            if(dec==1){
            bin.push(1);
            return 0;
            } 
            if(dec%2==1){
            bin.push(1)
            return dec2bin1((dec-1)/2,bin);}
            else{
            bin.push(0)
            return dec2bin1(dec/2,bin);} 
    }
            
     