var arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
//1ci
var count = 0;
for(var i = 0; i<arr.length;i++)
{
    if(arr[i]==5)
    {
        count = count+1;
    }
}
document.write("Reqemlerin nece defe tekrarlanmasi:"+count+"<br>");
//2ci
var cem=0;
for(i=0;i<arr.length;i++)
{
    cem+=arr[i];
}
console.log("Cemi:" +cem);
//3cu 1ci usul
// var a =arr[0];
// for(i=0;i<arr.length;i++)
// {
//     if (arr[i]>a)
//     {
//         a=arr[i]
//     }
// }
// console.log(a);
//2ci usul
var sert=0;
for(i=0;i<arr.length;i++)
{
    if (arr[i]>sert)
    {
        sert=arr[i]
    }
}
console.log("En boyuk eded:"+sert);
//4-cu

var arr2 = [
    {
      name:'test',
      key:1
    },
    {
      name:'task',
      key:2
    },
    {
      name:'tanqo',
      key:3
    },
    {
      name:'like',
      key:4
    },
    {
      name:'task',
      key:5
    },
    {
      name:'trust',
      key:6
    },
    {
      name:'test',
      key:7
    },
    {
      name:'last',
      key:8
    },
    {
      name:'tanqo',
      key:9
    },
    {
      name:'elephant',
      key:10
    },
    {
      name:'love',
      key:11
    },
    {
      name:'small',
      key:12
    },
    {
      name:'little',
      key:13
    },
     ]
     var arr=[];
     for(i=0;i<arr2.length;i++)
     {
        if(arr2[i].name.charAt(0)=='t')
        {
            arr.push(arr2[i]);
        }
     }console.log(arr);

     //5ci
