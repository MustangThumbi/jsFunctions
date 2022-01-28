
var numbers=[];
for (i = 1; i <= 100; i++) 
    {
        numbers.push(i)
    }

   
function num()  { 
    let result=numbers.filter(div);
    return result;
    function div(num){
        return num%5==0;
    }
      
}  
     // Input array  
     function add(array){
        let sum =(previousValue,currentValue)=>previousValue+currentValue;
        return numbers.reduce(sum)
     }
 

  console.log(add(num()))



