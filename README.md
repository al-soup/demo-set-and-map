# Demo: Set & Map in JS

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/typescript-urmfwc)

## Sets
Sets are similar to arrays. Key difference: Sets **don't contain duplicates** and the **insertion order is not remembered**.

Sets are iterable, so the `forEach` or `for-of` loop can be used on them.

Delition and finding is more trivial and faster than in arrays (because there is no positioning/order).

## Sets vs Arrays
- Use Sets when you want to make sure that every value is Unique
- Use Sets when you do a lot of searching a deleting

### Remember
- Focus on Unique values and speed
- Make your array consist of unique values: `[...new Set(arr)]`

## Maps
Maps are key-value pairs, similar to objects. Key difference: **insertion of key order is rememberd** and **keys can be of *any* type**. 

Maps are iterable. Unlike objects they are only used for data storage.

### Remember
- Focus on insertion order or non-string keys