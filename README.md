# Code Selectors

> Convention for referencing pieces of code

⚡️ ***It's like CSS selectors, but for code!***

Have you ever wanted a consistent and concise way of referencing a specific part of a code-base?

For example, suppose you wanted to refer to a function named `login` or a constant named `color`. How would you reference them, apart from using a line number (e.g. myfile.ts:23) or plain English (e.g. "the login function in myfile.ts")?

And how would you deal with more complex nested structures, such as `r`, `g` and `b` fields inside an object assigned to a `color` constant, or an anonymous callback passed to a `then` call on a Promise?

Code selectors to the rescue!

Code selectors aim to provide a consistent and concise language allowing you to reference any structure in any code file.

With code selectors, you can now write something like: `myfile.ts/login` to reference your login function or `myfile.ts/colors.r` to reference the `r` field in your `color` constant.

## Characteristics of code selectors

### ***Concise***

Code selectors take as little space as possible. Brevity makes the selectors faster to type, easier to read and more convenient to copy/paste or add to links.

### ***Readable***

Code selectors use the real names of structures as much as possible, to optimise for readability.

Where names are not available, 1-based indeces are used, referencing the *n*th of the class of object being described. For example a reference to the 2nd parameter of a function call uses the index 2, even if it is preceded by previous function calls with their own parameters.

### ***Composable***

Complex references can be be built up from simpler, interchangeable parts.

For example, to refer to a constant in a function in a field on an object, we can compose "closure", "object field" and "structure" together, to create one complete reference.


## Parts of code selectors

* [Structure](#structure)
* [Anonymous structure](#anonymous-structure)
* [Object field](#object-field)
* [Array element](#array-element)
* [Function call](#function-call)
* [Function call argument](#function-call-argument)
* [Closure](#closure)

### Structure

Any named structure (function, constant, etc) declared in the main body of a file can be referenced by name of the file, followed by a "contains" accessor - `/`, followed by the name of the structure.

> [file.ext] / **`name`**

* **`name`** is the name of the structure

For example, to reference the function `bar` in file `myfile.ts`:

```ts
// myfile.ts

function foo() {}

// * reference this
function bar() {}
```

You can use this selector:

> `myfile.ts/bar`

-----

### Anonymous structure

Not all structures have names. We might declare a self-calling function (IFFE) or immediately loop over an array declared inline. We can reference such a structure by its type, followed by an "indexing" accessor, followed by a numeric, 1-based index indicating the order of that structure within the set of all structures of the same type.

> [file.ext] / **`(type)`**@**`(index)`**

* **`type`** is one of the following:
    * `func` - function
    * `arr` - array
    * `obj` - object
    * `clo` - anonymous closure

* **`index`** is an order index, 1 or greater.

For example, to reference the second self-calling function declared in file `myfile.ts`:

```ts
// myfile.ts

(function () {

})();

// * reference this
(function () {
  
})();
```

You can use this selector:

> `myfile.ts/func@2`

Or, to reference the second array declared inline in file `myfile.ts`:

```ts
// myfile.ts

(function () {

})();

[1,2,3].map(console.log);

[4,5,6].map(console.log); // * reference this
```

You can use this selector:

> `myfile.ts/arr@2`

-----

### Object field

Any structure which is declared or set as a field on a containing object can be referenced by referencing the containing structure, followed by the "object field" accessor - `.`, followed by the name of the field itself.

> [file.ext] / **`(object)`**.**`(field)`**

* **`object`** is the *name* of the containing structure

* **`field`** is the name of the contained field

For example, to reference the field `bar`, declared in the object `foo`, declared in file `myfile.ts`:

```ts
// myfile.ts

const foo = {
  bar: '1' // * reference this
};
```

You can use this selector:

> `myfile.ts/foo.bar`

Or, to reference the field `bar`, set as a field on the object `foo`, declared in file `myfile.ts`:

```ts
// myfile.ts

const foo = {};

foo.bar = '1'; // * reference this
```

You can use the same selector as above:

> `myfile.ts/foo.bar`

-----

### Array element

Any structure which is declared as an element on a containing array can be referenced by referencing the containing structure, followed by an "array index" accessor and the index of the item - `[n]`.

> [file.ext] / **`(array)`** [**`(index)`**]

* **`array`** is the *name* of the containing structure

* **`index`** is the *index* of the contained element

For example, to reference the string `bar`, held in the array `foo` at index 1, declared in file `myfile.ts`:

```ts
// myfile.ts

const foo = [
  'baz',
  'bar' // * reference this
];
```

You can use this selector:

> `myfile.ts/foo[1]`

Or, to reference the string `bar`, set at index 1 of the array `foo`, declared in file `myfile.ts`:

```ts
// myfile.ts

const foo = ['baz'];

foo[1] = 'bar'; // * reference this
```

You can use the same selector as above:

> `myfile.ts/foo[1]`

-----

### Function call

Function calls are one of the most common kinds of expressions in any Javascript/Typescript project. We can reference a call by referencing the structure being called, followed by an indicator that it is being called - `()`.

> [file.ext] / **`(call)`**`()`

For example, to reference the call to the imported `foo` function, declared in file `myfile.ts`:

```ts
// myfile.ts

import { foo } from 'foo.utils';

foo('hello');
```

You can use this selector:

> `myfile.ts/foo()`

-----

### Function call argument

Suppose you want to reference an argument being passed to a parameter of a function call. This can be done by referencing the function call, followed by a "containment" indicator - simply `/`, followed by a numeric 1-based index, indicating the parameter's order within the function's parameter list. 

> [file.ext] / **`(call)`** / @**`(index)`**

For example, to reference the anonymous function passed to the 2nd parameter to the imported `foo` function, declared in file `myfile.ts`:

```ts
// myfile.ts

import { foo } from 'foo.utils';

foo('hello', () => 'world');
```

You can use this selector:

> `myfile.ts/foo()/@2`

-----

### Closure

Many of the structures that make up a Javascript/Typescript project are actually found inside a closure of some kind, rather than declared in the top-level scope. We can reference an entity declared inside of a closure by simply referencing that closure, followed by a "containment" indicator - simply `/`, followed by the structure itself.

> [file.ext] / **`(closure)`** / **`(structure)`**

For example, to reference the constant `bar` declared inside the top-level function `foo`, declared in file `myfile.ts`:

```ts
// myfile.ts

function foo() {
  const bar = "hello!"; // * reference this
}
```

You can use this selector:

> `myfile.ts/foo/bar`

-----

## Complex examples

### NodeJS/Express login request handler

```ts
import express from "express";
import { getUser } from "users";

const app = express();

app.post("/login", async (req, res) => {
  const user = await getUser(req.params.username, req.params.password);

  if (user) {
    res.send(200);
  } else {
    res.send(401);
  }
});
```

1. The `app.post` call: `index.ts/app.post()`
2. The post handler: `index.ts/app.post()/@1`
3. The call to `getUser`: `index.ts/app.post()/@1/getUser()`
4. The constant `user`: `index.ts/app.post()/@1/user`
5. The call to `res.send` with `200` passed: `index.ts/app.post()/@1/res.send()@1`
6. The call to `res.send` with `401` passed: `index.ts/app.post()/@1/res.send()@2`


### ReactJS Counter component

```tsx
export const Counter: VFC = () => {
  const [count, setCount] = useState(0);
  const [overLimit, setOverLimit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(() => count + 1);

      if (count > 10) {
        setOverLimit(() => true);
      }
    }, 1_000);

    return () => clearInterval(interval);
  });

  return (
    <span>{count}</span>
  );
}
```

1. The `Counter` itself: `myfile.ts/Counter`
2. The first call to `useState`: `myfile.ts/Counter/useState()@1`
3. The destructured constant `count`: `myfile.ts/Counter/count`
4. The destructured function `setCount`: `myfile.ts/Counter/setCount`
5. The second call to `useState`: `myfile.ts/Counter/useState()@2`
6. The call to `useEffect`: `myfile.ts/Counter/useEffect()`
7. The function passed to `useEffect`: `myfile.ts/Counter/useEffect()/@1`
8. The call to `setInterval`: `myfile.ts/Counter/useEffect()/@1/setInterval()`
9. The function passed to `setInterval`: `myfile.ts/Counter/useEffect()/@1/setInterval()/@1`
10. The call to `setCount`: `myfile.ts/Counter/useEffect()/@1/setInterval()/@1/setCount()`
11. The function passed to `setCount`: `myfile.ts/Counter/useEffect()/@1/setInterval()/@1/setCount()/@1`
12. The constant `interval`: `myfile.ts/Counter/useEffect()/@1/interval`
13. The function returned by function passed to `useEffect`: `myfile.ts/Counter/useEffect()/@1/func@2`









