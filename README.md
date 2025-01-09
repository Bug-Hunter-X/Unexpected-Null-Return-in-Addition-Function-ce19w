# Unexpected Null Return in Addition Function

This repository demonstrates a common, yet subtle, bug in JavaScript related to type coercion and null handling. The `foo` function is designed to add two numbers; however, it incorrectly returns `null` in certain scenarios, even when a valid numerical result should be possible.

## The Bug

The issue lies in the conditional statement: `if (a === null || b === null)`.  While this check appears to correctly handle null values, it does not account for the case where one input is 0.  Since 0 is considered falsy in JavaScript, the function will incorrectly return `null` if either 'a' or 'b' is 0.  This is because `0 === null` is false. 

## The Solution

The solution involves a more robust null check.  Instead of directly comparing with `null`, we should use a technique that handles both `null` and `0` explicitly: 

```javascript
if (a == null || b == null) { ... }
```
By using the loose equality operator (`==`), we ensure 0 is treated differently and not cause an erroneous return of null.

## How to Run

1. Clone this repository.
2. Open the `bug.js` and `bugSolution.js` files to examine the problematic and corrected code.
3. You can run the javascript files directly in the browser console or in NodeJs.