//esercizio 1
function ex_1_F(array)
{
    tot=0;
    array.every(x=> {
        if(x>0)
        {
            tot+=x;
            return true;
        }
        else{
            return false;
        }
    })
    return tot;
}


//ex 2

function ex_2_F(n)
{
    a=[]
    for(i=1;i<n*2;i=i+2)                  //i=1 i<6 a[0]=1  |   i=3  3<6  a[1]=3; |   i=5   5<6   a[2]=5   |    i=7   7<6
    {
        a.push(i);
    }
    return a.reduce((x,y)=>x+y);
}

// ex 4

function ex_04_I(num1,num2)
{
    a=[]
    for(i=num1;i<=num2;i++)
    {
        a.push(i);
    }
    return a.reduce((x,y)=>x+y);
}
function ex_4_F(interv)
{
    if(interv[0]>interv[1])
    {
        return ex_04_I(interv[1],interv[0]);
    }
    else
    {
        return ex_04_I(interv[0],interv[1]);
    }

}

//ex 5

function ex_5_F(c,b)
{
    a=[]
    for(i=0;i<b;i++)
    {
        a.push(c);
    }
    return a.reduce((x,y)=>x+y);
}

//ex 6

function ex_6_F(a,b)
{
    var div=new Array();
    return ex_06_I(a,b,div);
}
function ex_06_I(a,b,div)
{
    if(a==0)
    {    Res=[];
         div.sort();
         if(div[0]!=div[1])
         {
             Res[0]=div[0];
             div=div.slice(1);
         }
         else
         {
             Res[0]=0;
         }
         Res[1]=div.length;
         return Res;
    }
     else if(a<b)
    {
        div.push(a);
        return ex_06_I(a-a,b,div);
    }
    
    else
    {   
        div.push(b);
        return ex_06_I(a-b,b,div);
    }

}

//ex 07

function ex_7_F(a,b)
{
    res=1;
    for(i=0;i<b;i++)
        res=ex_05(res,a);
    return res;
}

function ex_08(array)
{
    lung=Math.sqrt(array.length);
    return ex_08_I(array,lung);
}
function ex_08_I(array,lung)
{
    if(lung==array.length)
    {
        return [array];
    }
    else
    {
        return unione(array.slice(0,lung),
                                            ex_08_I(array.slice(lung),lung));
    }
}
function unione(array,matrix)
{
    
    matrix.unshift(array);
    return matrix;
}




function ex_8_I(a,len,mat)
{
    if(a.length==0)
    {
        return mat;
    }
    else
    {
        b=[];
        b=a.splice(0,len);
        mat.push(b);
        return ex_8_I(a,len,mat);
    }
}



function ex_8_F(a)
{
    len=Math.sqrt(a.length);
    mat=[];
    return ex_11_I(a,len,mat);
}

function ex_11_F(a)
{
    return dispari(a).concat(pari(a));
}
function pari(a)
{
    return a.filter(x => x%2==0);
}
function dispari(a)
{
    return a.filter(x => x%2!=0);
}