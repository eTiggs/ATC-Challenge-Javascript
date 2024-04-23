export default class Airport {
    #planes = [];

    getPlanes() {
        return this.#planes;
    }
    
    landPlane(plane) {
        this.#planes.push(plane);
    }
}