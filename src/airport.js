export default class Airport {
    #planes = [];
    #maxCapacity = 2;
    #isStormy = true;

    constructor(plane) {
        this.#planes = [plane];
    }

    getPlanes() {
        return this.#planes;
    }
    
    landPlane(plane) {
        if (plane !== null
            && this.#planes < this.#maxCapacity
            && !this.#isStormy) {
            this.#planes.push(plane);
        }
    }

    takeOffPlane(plane) {
        if (this.#planes.includes(plane)
            && plane !== null
            && !this.#isStormy) {
            this.#planes.pop(plane);
        }
    }

    setMaxCapacity(maxCapacity) {
        if (this.#planes.length < maxCapacity && maxCapacity < 150) {
            this.#maxCapacity = maxCapacity;
        }
    }

    getMaxCapacity() {
        return this.#maxCapacity;
    }

    isStormy() {
        return this.#isStormy;
    }
}