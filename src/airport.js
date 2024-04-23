export default class Airport {
    #planes = [];

    constructor(plane) {
        this.#planes = [plane];
    }

    getPlanes() {
        return this.#planes;
    }
    
    landPlane(plane) {
        if (plane !== null) {
            this.#planes.push(plane);
        }
    }

    takeOffPlane(plane) {
        if (this.#planes.includes(plane) && plane !== null) {
            this.#planes.pop(plane);
        }
    }
}