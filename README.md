# Match Case

Functional pattern matching for typescript

## Installation

```bash
npm i match-c
```

## Usage

```typescript
import { match } from "match-c";

// Mathces the proper case
const five = match("Hello!!", 10)
    .c("Hola", 2)
    .c("Hello", 100)
    .c("Hello!!", 5)
    .result;

// Uses defualt when no match is found
const ten = match("Hello!!", 10)
    .c("Hola", 2)
    .c("Hello", 100)
    .c("Hello!!!!!", 5)
    .result;
```

## Building and Testing

```bash
npm test # If no errors occur, the test suite passed
```
