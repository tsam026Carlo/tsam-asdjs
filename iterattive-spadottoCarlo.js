console.log("hello world");
console.log("hello world");

//1 esercizio   O(n)
sumall = [2,5,9,4];
somma=0;
for(i=0;sumall[i]>=0||i>sumall.length;i++)
{
    somma+=sumall[i];
}
console.log(somma);

//esercizio 2 

n=3;
i=1;
somma=0;
while(n>0)
{
   somma+=i;
   n--;
   i=i+2; 
}
console.log(somma);

//esercizio 3
var sum=0;
avarage=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<10;i++) 
{
    sum+=avarage[i];
}
sum=sum/10;
console.log(sum);

//esercizio 4

inter=[2,5];
sum=0;
if(inter[0]>inter[1])
{
    max=inter[0];min=inter[1];
}
else
{
    max=inter[1];min=inter[0];
}
for(i=min;i<=max;i++)
{
    sum+=i;
}
console.log(sum);

//esercizio 5

mult=[2,5];
molti=0;
for(i=0;i<mult[0];i++)
{
    molti+=mult[1];
}
console.log(molti);

//esercizio 6

divi=[13,3];
resto=0;
uguale=0;
i=0
while(true)
{
    if(divi[0]-divi[1]>0)
    {
        divi[0]-=divi[1];
        i++;
    }
    else if(divi[0]-divi[1]==0)
    {
        uguale=i+1;
        resto=0;
        break;
    }
    else
    {
        resto=divi[0];
        uguale=i;
        divi[0]-=divi[1];
        break;
    }
    
}
console.log(uguale+" resto di "+resto);

//esercizio 7


poten = [5,4];
numero=poten[0];
for(h=0;h<poten[1]-1;h++)
{
    mult=[numero,poten[0]];
    molti=0;
    for(i=0;i<mult[0];i++)
    {
        molti+=mult[1];
    }
    numero=molti;
}
console.log(numero);

//esercizio 8

nallaseconda=[1,2,3,4,5,6,7,8,9];
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
console.log(a);
//esercizio 9
array=[2,3,4,5,6];
t=array.length-1;
for(i=0;i<(array.length/2);i++)
{
    
    c=array[i];
    array[i]=array[t];
    array[t]=c;
    t--;
}
console.log(array);

//esercizio 10

inp=[5,6];
replica=[];
replica[0]=inp[0]
for(i=1;i<inp[1];i++)
{
    replica[i]=inp[0];
}
for(i=0;i<inp[1];i++)
{
    console.log(replica[i]);
}

//esercizio 11

input=[1,8,9,5,4,6,4,8,9];
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
for(i=0;i<input.length;i++)
{
    console.log(input[i]);
}


