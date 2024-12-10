function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b; 
}