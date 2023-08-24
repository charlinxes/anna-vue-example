export function objSameCompare(objA, objB) {
    const objA_keys = Object.keys(objA);
    const objB_keys = Object.keys(objB);
    if (objA_keys.length !== objB_keys.length) {
        return false;
    }
    for (let k of objA_keys) {
        if (objA[k] !== objB[k]) {
            return false;
        }
    }
    return true;
}

export function objAllValueValid(obj) {
    const obj_values = Object.values(obj);
    for (let val of obj_values) {
        if (!val) {
            return false;
        }
    }
    return true;
}
