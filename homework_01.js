function ex_1_I(n)
{
	somma=0;
	for(i=0;n[i]>=0||i>n.length;i++)
	{
		somma+=n[i];
	}
	console.log(somma);
}
function ex_1_R(x)
{
    if(x[0]<=0||x.length==0)
    {
        return 0;
    }
    elsez
    {
        return ex_1_R(x.slice(1))+x[0];
    }
}


//esercizio 2 
function ex_2_I(n)
{
	somma=0;
    somma=Math.pow(n,2);
    return somma;
}
function ex_2_R(n)
{
    if(n==1){return 1;}
    else
    {return ex_2_R(n-1)+(n*2-1);}
}

//esercizio 3
function ex_3_I(avarage)
{
	var sum=0;
	for(var i=0;i<10;i++) 
	{
		sum+=avarage[i];
	}
	sum=sum/10;
	return (sum);
}
somma=0;
function ex_3_R(x)
{
    if(x.length==0)
    {
        return somm/10;
    }
    else
    {
		somm+=x[0];
        return ex_3_R(x.slice(1));
    }
}
//esercizio 4
function ex_4_I(a,n)
{
	sum=0;
	if(a>n)
	{
		max=a;min=n;
	}
	else
	{
		max=n;min=a;
	}
	for(i=min;i<=max;i++)
	{
		sum+=i;
	}
	return sum;
}
function ex_4_R(a,b)
{
    if(a==b)
    {
        return a
    }
    else if(a>b)
    {
        return ex_4_R(a,b+1)+b;
    }
    else if(a<b)
    {
        return ex_4_R(a+1,b)+a;
    }
}
//esercizio 5
function ex_5_I(a,n)
{
	molti=0;
	for(i=0;i<a;i++)
	{
		molti+=n;
	}
	return (molti);
}
function ex_5_R(x,y)
{
    if(y==1)
    {
        return x;
    }
    else
    {
        return ex_5_R(x,y-1)+x;
    }
}
//esercizio 6
function ex_6_I(a,b)
{
	resto=0;
	uguale=0;
	i=0
	while(true)
	{
		if(a-b>0)
		{
			a-=b;
			i++;
		}
		else if(a-b==0)
		{
			uguale=i+1;
			resto=0;
			break;
		}
		else
		{
			resto=a;
			uguale=i;
			a-=b;
			break;
		}
		
	}
	return (uguale+" resto di "+resto);
}
var Ri=0;
var res=0;
function ex_6_R(x,y)
{
    
    if(x>=y)
    {   
		Ri++;
		res=x-y;
        return ex_6_R(x-y,y);
		
    }
    else if(x<y)
    {
		var ris=Ri;
		Ri=0;
        return (ris+" resto di "+res);
    }
	
}
//esercizio 7
function ex_7_I(a,n)
{
	numero=a;
	for(h=0;h<n-1;h++)
	{
		mult=[numero,a];
		molti=0;
		for(i=0;i<mult[0];i++)
		{
			molti+=mult[1];
		}
		numero=molti;
	}
	return (numero);
}
function ex_7_R(x,y)
{
    if(y==1)
    {
        return x;
    }
    else
    {
        return Pow(x+x,y-1);
    }
}
//esercizio 8
function ex_8_I(nallaseconda)
{
	lun=nallaseconda.length;
	lun=Math.sqrt(lun);
	a=new Array(lun);
	c=0;
	for(i=0; i<lun; i++)
	{

		a[i]=new Array(lun);
		for(j=0 ; j<lun; j++)
		{
			a[i][j]=nallaseconda[c];
			c++;
		}
	}
	return (a);
}
//esercizio 9
function ex_9_I(array)
{
	t=array.length-1;
	for(i=0;i<(array.length/2);i++)
	{
		
		c=array[i];
		array[i]=array[t];
		array[t]=c;
		t--;
	}
	return array;
}
out9=[];
function ex_9_R(x)
{
    if(x.length/2<1)
    {
        return out9;
    }
    else
    {
        out9[out9.length/2-1]=x[0];
        out9[out9.length/2]=x[x.length-1];
        return ex_9_R(x.slice(1,x.length-1));
    }
}
//esercizio 10
function ex_10_I(a,n)
{
	replica=[];
	replica[0]=a
	for(i=1;i<n;i++)
	{
		replica[i]=a;
	}
	return replica;
}
repl=[];
function ex_10_R(a,n)
{
    if(n==0)
    {
		att=repl
		repl=[];
        return att;
    }
    else
    {
        repl.push(a);
        return ex_10_R(a,n-1);
    }
}
//esercizio 11
function ex_11_I(input)
{
	controllo=true;
	for(i=0;i<input.length;i++)
	{
		if(input[i]%2==0)
		{
			for(j=i;j<input.length;j++)
			{
				if(input[j]%2!=0)
				{
					c=input[i];
					input[i]=input[j];
					input[j]=c;
					controllo=false;
				}
			}
			if(controllo==true)
			{
				break;
			}
			controllo=true;
		}
	}

	return input;
}
disp=[];
par=[];
function ex_11_R(x)
{
    if(x.length==0)
    {
        out= disp.concat(par);
        return out;
    }
    else if(x[0]%2==0)
    {
        par.push(x[0]);
        return  ex_11_R(x.slice(1));
    }
    else if(x[0]%2!=0)
    {
        disp.push(x[0]);
        return  ex_11_R(x.slice(1));
    }
    
}
