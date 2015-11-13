function ex_1_I(n)
{
	somma=0;
	for(i=0;n[i]>=0||i>n.length;i++)
	{
		somma+=n[i];
	}
	return somma
}
function ex_1_R(x)
{
    if(x[0]<=0||x.length==0)
    {
        return 0;
    }
    else
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
	for(var i=0;i<avarage.length;i++) 
	{
		sum+=avarage[i];
	}
	sum=sum/avarage.length;
	return (sum);
}

function ex_3_RI(x)
{
    if(x.length==0)
    {
        return 0;
    }
    else
    {
        return ex_3_RI(x.slice(1))+x[0];
    }
}
function ex_3_R(x)
{
	var a = ex_3_RI(x);
	return a/x.length;
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
	return [uguale,resto];
}

function ex_6_R(x,y)
{
	var Ri=0;
	var res=0;
	return ex_6_RI(x,y,Ri,res);
}
function ex_6_RI(x,y,Ri,res)
{
    
    if(x>=y)
    {   
		Ri++;
		res=x-y;
        return ex_6_RI(x-y,y,Ri,res);
		
    }
    else if(x<y)
    {
		ris=Ri;
        return [uguale,resto];
    }
	
}
//esercizio 7
function ex_7_I(a,n)
{
	pow=a;
		for(i=1;i<n;i++)
		{
			pow=ex_5_R(pow,a);
		}
	return (pow);
}
function ex_7_RI(x,y,pow)
{
    if(y==1)
    {
        return pow*x;
    }
    else
    {
        return ex_7_RI(x,y-1,pow*x);
    }
}
function ex_7_R(x,y)
{
	pow=1;
	return ex_7_RI(x,y,pow);

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
function ex_8_R(nallaseconda)
{
	ass=Math.sqrt(nallaseconda.length)
	Narray=new Array();
	return ex_8_RI(nallaseconda,Narray,-1,ass,ass);

}
function ex_8_RI(nallaseconda,Narray,vert,ori,sett)
{
	
	if(ori==sett)
	{
		if(vert==sett-1)
		{
			return Narray;
		}
		Narray[vert+1]=new Array();
		return ex_8_RI(nallaseconda,Narray,vert+1,0,sett);
	}
	else
	{
		Narray[vert][ori]=nallaseconda[0];
		return ex_8_RI(nallaseconda.slice(1),Narray,vert,ori+1,sett);
	}
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
function ex_9_R(x)
{
		out9=new Array(x.length);
        return ex_9_RI(x,out9);
}
function ex_9_RI(x,out)
{
    if(x.length==0)
    {
        return out9;
    }
    else
    {
        out9[x.length-1]=x[0];
        return ex_9_RI(x.slice(1),out9);
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
	disp=[];
	par=[];
	controllo=true;
	for(i=0;i<input.length;i++)
	{
		if(input[i]%2==0)
		{
			par.push(input[i]);
		}
		else
		{
			disp.push(input[i]);
		}
	}
	


	return disp.concat(par);
}

function ex_11_R(x)
{
	disp=[];
	par=[];
	return ex_11_RI(x,disp,par);
}
function ex_11_RI(x,disp,par)
{
    if(x.length==0)
    {
        out= disp.concat(par);
        return out;
    }
    else if(x[0]%2==0)
    {
        par.push(x[0]);
        return  ex_11_RI(x.slice(1),disp,par);
    }
    else if(x[0]%2!=0)
    {
        disp.push(x[0]);
        return  ex_11_RI(x.slice(1),disp,par);
    }
    
}