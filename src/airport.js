export default class Airport {
    #planes = [];
    #maxCapacity = 2;

    constructor(plane) {
        this.#planes = [plane];
    }

    getPlanes() {
        return this.#planes;
    }
    
    landPlane(plane) {
        if (plane !== null && this.#planes < this.#maxCapacity) {
            this.#planes.push(plane);
        }
    }

    takeOffPlane(plane) {
        if (this.#planes.includes(plane) && plane !== null) {
            this.#planes.pop(plane);
        }
    }

    setMaxCapacity(maxCapacity) {
        if (this.#planes.length < maxCapacity) {
            this.#maxCapacity = maxCapacity;
        }
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }
}