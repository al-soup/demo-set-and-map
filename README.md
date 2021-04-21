# Demo: Set & Map in JS

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-urmfwc)

## Set
Sets are similar to arrays. Key difference: Sets don't contain duplicates and the insertion order is not remembered.

Sets are iterable, so the `forEach` or `for-of` loop can be used on them.

Delition and finding is more trivial and faster than in arrays (because there is no positioning/order).

## Sets vs Arrays
- Use sets when you want to make sure that every value is Unique


## Set Functions
- `clear()`
- `add()`
- `delete()`
- `has()`

### Takeaways
- Focus on Unique values
- Make your array consist of unique values: `[...new Set(arr)]`

## Map
- Remembers insertion key order

### Takaways