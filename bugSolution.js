function foo(a, b) {
  if (a == null || b == null) {
    return 0; //Should return 0 when either a or b is null or undefined
  }  
  return a + b; 
}