# Question: How do you calculate the convex hull from a set of 2D points using Graham’s scan? JavaScript Summary

The provided JavaScript code calculates the convex hull of a set of 2D points using the Graham's scan algorithm. The algorithm begins by defining a `cross` function that calculates the cross product of three points, which is used to determine the relative orientation of three points in the plane. The `convexHull` function is the main function that implements the Graham's scan algorithm. It starts by sorting the points in increasing order of their x-coordinates, and in case of a tie, by their y-coordinates. Then, it computes the lower and upper hulls of the points. The lower hull is computed by iterating through the sorted points from left to right, and for each point, it removes the last point in the lower hull while it makes a non-left turn with the second last point in the lower hull and the current point. The upper hull is computed in a similar way but by iterating through the sorted points from right to left. Finally, it concatenates the lower and upper hulls (after removing their last points to avoid duplication of the leftmost and rightmost points) to form the convex hull of the points. The `points` array contains the set of 2D points for which the convex hull is to be computed. The result, which is the convex hull of the points, is then printed to the console.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of the algorithm used to solve the problem. Both versions use Graham's scan algorithm to calculate the convex hull from a set of 2D points. The main differences between the two versions are due to the features and syntax of TypeScript.

1. TypeScript introduces static types: In the TypeScript version, the `Point` class is defined with `x` and `y` properties, both of which are numbers. This provides a way to define the shape of an object, making the code more predictable and easier to understand. The `cross` and `convexHull` functions also have type annotations for their parameters and return values, which can help catch errors at compile time.

2. TypeScript uses `let` for variable declaration: Unlike JavaScript, which uses `var`, TypeScript uses `let` to declare variables. The `let` keyword in TypeScript (and modern JavaScript) has block scope, which can prevent some common bugs related to variable hoisting and redeclaration in JavaScript.

3. TypeScript uses arrow functions: The TypeScript version uses arrow functions in the `sort` method, which provide a more concise syntax compared to traditional function expressions in JavaScript. Arrow functions also have the benefit of not binding their own `this` value, which can be useful in certain contexts.

4. TypeScript uses classes: The TypeScript version uses a `Point` class to represent a point in 2D space. This provides a more structured and object-oriented way to organize the code compared to the JavaScript version, which uses arrays to represent points.

Overall, the TypeScript version provides a more structured and type-safe way to solve the problem, which can help prevent bugs and make the code easier to understand and maintain.

---

# C++ Differences

The C++ version of the solution uses a similar approach to the JavaScript version, but there are some differences due to the language features and methods used.

1. Data Structure: In C++, a struct is used to represent a point with x and y coordinates. In JavaScript, an array of two elements is used to represent a point.

2. Sorting: In JavaScript, the built-in sort function is used to sort the points. In C++, the qsort function from the C standard library is used. The compare function is used as a callback to determine the order of the points.

3. Stack: In JavaScript, an array is used as a stack with the push and pop methods. In C++, a stack from the Standard Template Library (STL) is used.

4. Cross Product: In JavaScript, the cross product is calculated in a separate function. In C++, the cross product is calculated in the orientation function.

5. Output: In JavaScript, the result is returned as an array of points. In C++, the result is printed to the console directly from the convexHull function.

6. Error Handling: In C++, if the number of unique points is less than 3, the function returns without doing anything. In JavaScript, there is no such error handling.

7. Memory Management: In C++, pointers are used and memory management is more explicit. In JavaScript, memory management is handled automatically by the garbage collector.

8. Function Overloading: In C++, the swap function is overloaded to swap points. In JavaScript, array destructuring is used to swap elements.

9. Type Checking: In C++, types are checked at compile time. In JavaScript, types are checked at runtime.

---
