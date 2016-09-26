
const f= function(n) {
  if(n <= 0){
    return 1;
  }

  
return (n * f(n-1));

  
  }

const factorial = function(n){ 
   console.log(f(n));
}

factorial(5);
