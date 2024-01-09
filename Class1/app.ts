function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const x1 = 1, y1 = 2, x2 = 4, y2 = 6;
const distance = calculateDistance(x1, y1, x2, y2);
console.log(`Distance: ${distance}`);