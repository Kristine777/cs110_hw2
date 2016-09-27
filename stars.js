const space = function(s){
  if( s=== 0){
    return "";
  }
 return " " + space(s-1);
};


const stars = function(a) {
  if(a===0){
    return "";
  }
  return "*" + stars(a-1);
 
};

const f1 = function(n, a, s) {
  if (n===0){
    return "";
  }
  
  console.log(space(s)+stars(a));
  f1((n-1),(a+2),(s-1));
};

const TriangleStars =function(n){
  f1(n,1,n-1);
};

TriangleStars(4);
