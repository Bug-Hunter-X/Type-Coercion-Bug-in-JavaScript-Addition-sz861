# Type Coercion Bug in JavaScript Addition

This repository demonstrates a common type coercion issue in JavaScript when performing addition.  The bug arises when using the + operator on values that are not explicitly numbers. JavaScript's dynamic typing may cause unexpected results if one or more of the operands are not numbers. For example, adding a number to a string will cause implicit string concatenation.

## Bug Description
The provided JavaScript function `foo` adds two numbers together. However, it lacks robust type checking and may produce incorrect results if inputs are not numbers. 

## Solution
The solution employs explicit type checking using typeof operator before performing the addition.  This ensures the function correctly handles various input types, preventing unexpected type coercion.