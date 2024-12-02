Here is a JavaScript solution using Graham's scan algorithm:

```javascript
function cross(o, a, b) {
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

function convexHull(points) {
    points.sort(function(a, b) {
        return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
    });

    var lower = [];
    for (var i = 0; i < points.length; i++) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
            lower.pop();
        }
        lower.push(points[i]);
    }

    var upper = [];
    for (var i = points.length - 1; i >= 0; i--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
            upper.pop();
        }
        upper.push(points[i]);
    }

    upper.pop();
    lower.pop();
    return lower.concat(upper);
}

var points = [[0, 3], [2, 2], [1, 1], [2, 1], [3, 0], [0, 0], [3, 3]];
console.log(convexHull(points));
```

This console application will calculate the convex hull from a set of 2D points using Graham’s scan. The `cross` function is used to calculate the cross product of three points (o, a, b). The `convexHull` function is the main function that calculates the convex hull. It first sorts the points and then calculates the lower and upper hulls. The result is the concatenation of the lower and upper hulls. The `points` array is the set of 2D points. The result is printed to the console.