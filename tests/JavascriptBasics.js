console.log ("hello world");
let a =3, b=4
let c = a + b

console.log(c);
const flag = true;

if(!flag)
{
    console.log ("flag is true");
}
else
{
        console.log ("flag is false");
}

let i=0
while(i<10)
{

    i++;
console.log(i);
}

let required = true;
while(required)
{
    console.log(required)
    required=false;
}

/* for (k=0;k<=20;k++)
{
    let n=0;
    if((k%2==0 )&& (k%5==0))
        n++
     console.log(k)
    if(n==3)
        break;
       
} */

var marks = [56,78,67,45,34];
console.log(marks.length);
marks.push(45);
marks.pop();
marks.unshift(12);
marks.shift();
console.log(marks.indexOf(34));
console.log(marks.slice(2,5))

let sum = 0
for (let j=0;j<marks.length;j++)
{
    sum = sum + marks[j];
    console.log(sum)
}

console.log(marks.reduce((sum,totalmarks)=>sum + totalmarks,0))

var evenscore =[];

for (let m=0;m<=marks.length;m++)
{
    if(marks[m] % 2 == 0)
        evenscore.push(marks[m])

    console.log(evenscore)
}

let evenscore2 = marks.filter(marks=>marks%2==0);

let multiplescore = marks.map(marks=>marks*3);
console.log(multiplescore);