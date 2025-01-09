function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is wrong
  }  
  return a + b; 
}