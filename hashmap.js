class HashMap {
    constructor(loadFactor = 0.75,capacity=17) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.size = 0;
        this.buckets = Array.from({ length: capacity }, () => []);
    }
    cache = [this.capacity]; // init 17
    hash(key, capacity = 17) {
        let hashCode = 0;
        key = String(key);
        const PRIME_NUMBER = 31;

        for (let i =0; i<key.length; i++) {
            hashCode = PRIMENUMBER * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }

        return hashCode;

    }
    set(key,value) {
        if (this.has(key)) {
            cache[this.hash(key)] = value; //overwrite
        }
        else cache[this.hash(key)] = value; 
    }

    get(key) {
        return this.has(key) ? this.cache[this.hash(key)] : null;
    }
    has(key) {
        return this.cache[this.hash(key)] ? true : false;
    }
    remove(key) {

    }
    length() {

    }
    clear() {

    }
    keys() {

    }
    values(){

    }
    // returns aan array contains each key,value as [[firstkey,firstvalue],[secondkey,secondvalue]]
    entries()
}

function 

function 