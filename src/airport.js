export default class Airport {
    #planes = [];
    #maxCapacity = 10;
    #isStormy = false;

    constructor(plane) {
        if (plane !== undefined && plane !== null) {
            this.#planes.push(plane);
        }
    }

    getPlanes() {
        return this.#planes;
    }
    
    landPlane(plane) {
    if (plane !== null
        && this.#planes.length < this.#maxCapacity
        && !this.#isStormy) {
        this.#planes.push(plane);
    }
}

    takeOffPlane(plane) {
        if (this.#planes.includes(plane)
            && plane !== null
            && !this.#isStormy) {
            const planeIndex = this.#planes.indexOf(plane);
            if (plane !== -1) {
                this.#planes.splice(planeIndex, 1);
            }
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

    setStormy(weather) {
        this.#isStormy = weather;
    }
}