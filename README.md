# Handling Division by Zero in TypeScript

This repository demonstrates a common error in TypeScript: division by zero. The `bug.ts` file shows a function that throws an error when dividing by zero.  The `bugSolution.ts` demonstrates best practices for handling such situations.

## Problem

Dividing a number by zero results in an error.  In TypeScript, this can cause your application to crash unexpectedly.  Robust error handling is needed.

## Solution

The solution involves implementing error handling to gracefully manage division by zero and prevent crashes.  This can be done by checking for a zero divisor before performing the division.