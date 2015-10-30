//esercizio 1

sumall=[3,4,5];
function sommatoria(x,j)
{
    if(x[j]<=0||j==x.length)
    {
        return 0;
    }
    else
    {
        return sommatoria(x,j+1)+x[j];
    }
}
var varia= sommatoria(sumall,0);
console.log(varia);

//esercizio 2

function sommaN(n,j,i)
{
    if(n==i){return j;}
    else
    {return sommaN(n,j+2,i+1)+j;}
}
var varia = sommaN(3,1,1);
console.log(varia);

//esercizio 3
function avarage(j,somm,x)
{
    if(j==10)
    {
        return somm/j;
    }
    else
    {
        return avarage(j+1,somm+x[j],x);
    }
}
media=[1,2,3,4,5,6,7,8,9,10];
console.log(avarage(0,0,media));

//esercizio 4

function intervallo(a,b)
{
    if(a==b)
    {
        return a
    }
    else if(a>b)
    {
        return intervallo(a,b+1)+b;
    }
    else if(a<b)
    {
        return intervallo(a+1,b)+a;
    }
}
console.log(intervallo(2,5));

//esercizio 5

function mult(x,y,i)
{
    if(y==i)
    {
        return x;
    }
    else
    {
        return mult(x,y,i+1)+x;
    }
}
console.log(mult(2,4,1));

//esercizio 6

function divisione(x,y,i,res)
{
    
    if(x>=y)
    {
        return divisione(x-y,y,i+1,x-y);
    }
    else if(x<y)
    {
        return i+" resto "+res;
    }

}
console.log(divisione(25,4,0,0)); 

//esercizio 7

function Pow(x,y,i)
{
    if(y==i)
    {
        return x;
    }
    else
    {
        return Pow(x+x,y,i+1);
    }
}
console.log(Pow(2,6,1));

//esercizio 9

function inverti(x,i)
{
    if(i>=(x.length/2))
    {
        return x;
    }
    else
    {
        c=x[i];
        x[i]=x[x.length-i-1];
        x[x.length-i-1]=c;
        return inverti(x,i+1);
    }
}
stringa=[1,2,3,4,5];
console.log(inverti(stringa,0));

//esercizio 10
repl=[];
function replicante(a,n,i)
{
    if(i==n)
    {
        return 0;
    }
    else
    {
        repl[i]=a;
        return replicante(a,n,i+1);
    }
}
replicante(5,4,0);
console.log(repl);

//esercizio 11
disp=[];
par=[];
function ordina(x,i,p,d)
{
    if(i==(x.length))
    {
        x= disp.concat(par);
        return x;
    }
    else if(x[i]%2==0)
    {
        par[p]=x[i];
        return ordina(x,i+1,p+1,d);
    }
    else if(x[i]%2!=0)
    {
        disp[d]=x[i];
        return ordina(x,i+1,p,d+1);
    }
    
}
es11=[1,2,3,4,5,6,7,8,9];

console.log(ordina(es11,0,0,0));

