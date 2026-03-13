# JS HashMap

A simple HashMap implementation in JavaScript, built as part of The Odin Project.

## Features

- Store key-value pairs with `set(key, value)`
- Retrieve values with `get(key)`
- Check if a key exists with `has(key)`
- Remove entries with `remove(key)`
- Get the number of stored entries with `length()`
- Clear the map with `clear()`
- Get all keys with `keys()`
- Get all values with `values()`
- Get all entries with `entries()`
- Automatically resizes when the load factor is exceeded

## Methods

- `set(key, value)` — adds a new key-value pair or updates an existing one
- `get(key)` — returns the value for a key, or `null` if not found
- `has(key)` — returns `true` if the key exists, otherwise `false`
- `remove(key)` — removes a key-value pair
- `length()` — returns the number of stored entries
- `clear()` — removes all entries
- `keys()` — returns an array of all keys
- `values()` — returns an array of all values
- `entries()` — returns an array of `[key, value]` pairs

## How to run

Make sure Node.js is installed.

If using ES modules, add this to `package.json`:

```json
{
  "type": "module"
}
Run the test file with:

bash
node test.js