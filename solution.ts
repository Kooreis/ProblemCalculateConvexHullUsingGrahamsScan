Here is a TypeScript solution for calculating the convex hull from a set of 2D points using Graham’s scan:

```typescript
class Point {
    constructor(public x: number, public y: number) { }
}

function cross(o: Point, a: Point, b: Point): number {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

function convexHull(points: Point[]): Point[] {
    points.sort((a, b) => a.x == b.x ? a.y - b.y : a.x - b.x);

    let lower: Point[] = [];
    for (let i = 0; i < points.length; i++) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
            lower.pop();
        }
        lower.push(points[i]);
    }

    let upper: Point[] = [];
    for (let i = points.length - 1; i >= 0; i--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
            upper.pop();
        }
        upper.push(points[i]);
    }

    upper.pop();
    lower.pop();
    return lower.concat(upper);
}

let points: Point[] = [new Point(4, 4), new Point(1, 3), new Point(3, 1), new Point(2, 2), new Point(5, 3), new Point(6, 2), new Point(7, 4), new Point(5, 5), new Point(7, 6), new Point(8, 6)];
let result: Point[] = convexHull(points);
console.log(result);
```

This program first sorts the points lexicographically (first by x-coordinate, and in case of a tie, by y-coordinate), and then constructs upper and lower hulls of the points in O(n) time. An upper hull is the part of the convex hull, which is visible from the above of the plane. A lower hull is the remaining part of the convex hull.