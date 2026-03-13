export default HashMap;

class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = Array.from({ length: capacity }, () => []);
  }

  hash(key) {
    key = String(key);
    let hashCode = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * PRIME_NUMBER + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let [k, v] of bucket) {
      if (k === key) return v;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let [k] of bucket) {
      if (k === key) return true;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [k] of bucket) result.push(k);
    }
    return result;
  }

  values() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [, v] of bucket) result.push(v);
    }
    return result;
  }

  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const pair of bucket) result.push(pair);
    }
    return result;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [k, v] of bucket) {
        this.set(k, v);
      }
    }
  }
}
