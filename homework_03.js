   var n= new Array();
   n=[2,3,5,6];
   Array.prototype.ex_1 = function()
    {
        somma=0;
        for(i=0;this[i]>=0||i>this.length;i++)
        {
            somma+=this[i];
        }
        return somma
    }
    Array.prototype.ex_3 = function()
    {
	var sum=0;
	for(var i=0;i<this.length;i++) 
	{
		sum+=this[i];
	}
	sum=sum/this.length;
	return (sum);
    }

    Array.prototype.ex_11 = function(){
	var l1 = this.filter( x => !(x%2 == 0));
	var l2 = this.filter( x => x%2 == 0 );
	return l1.concat(l2);
	}
