export default class Airport {
    #planes = [];

    getPlanes() {
        return this.#planes;
    }
    
    landPlane(plane) {
        if (plane !== null) {
            this.#planes.push(plane);
        }
    }

    takeOffPlane(plane) {
        this.#planes.pop(plane);
    }
}