# 🧩 Utility Library

A lightweight JavaScript utility library providing essential helpers for clamping numbers, controlling function execution, summing arrays, and removing duplicates.

---

## 🚀 Features

| Function                 | Description                                          | Example                                     |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------- |
| **`clamp(n, min, max)`** | Keeps a number within specified bounds.              | `clamp(12, 0, 10) → 10`                     |
| **`once(fn)`**           | Ensures a function can only be called once.          | `const init = once(setup); init(); init();` |
| **`sum(arr)`**           | Returns the total of all numeric values in an array. | `sum([1, 2, 3]) → 6`                        |
| **`uniq(arr)`**          | Removes duplicate elements from an array.            | `uniq([1, 2, 2, 3]) → [1, 2, 3]`            |

---

## 🧠 Usage

```js
const { clamp, once, sum, uniq } = require("utility-lib");

// Clamp
console.log(clamp(15, 0, 10)); // 10

// Once
const greet = once(() => console.log("Hello"));
greet();
greet(); // Ignored after first call

// Sum
console.log(sum([1, 2, 3, 4])); // 10

// Uniq
console.log(uniq([1, 1, 2, 3, 3])); // [1, 2, 3]
```

## 🧪 Testing

```
npm test
```

### Example test structure

```
tests/
├── clamp.test.js
├── once.test.js
├── sum.test.js
└── uniq.test.js
```

Each test ensures correctness and edge-case coverage (e.g., invalid types, empty arrays, or out-of-range values).

## ⚙️ Continuous Integration (CI)

Automatically run tests on each push or pull request using GitHub Actions.

Create this file at .github/workflows/ci.yml:

```
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

```

This workflow ensures that your tests pass before merging any new code.

## 📁 Project Structure

```
.
├── src/
│   ├── clamp.js
│   ├── once.js
│   ├── sum.js
│   └── uniq.js
├── tests/
│   ├── clamp.test.js
│   ├── once.test.js
│   ├── sum.test.js
│   └── uniq.test.js
├── package.json
└── README.md

```

## 📜 License

MIT © 2025 Grace Akpan
