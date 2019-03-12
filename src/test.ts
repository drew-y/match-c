import { match } from "./index";
import { strictEqual } from "assert";

// Mathces the proper case
const five = match("Hello!!", 10)
    .c("Hola", 2)
    .c("Hello", 100)
    .c("Hello!!", 5)
    .result;

strictEqual(five, 5);

// Uses defualt when no match is found
const ten = match("Hello!!", 10)
    .c("Hola", 2)
    .c("Hello", 100)
    .c("Hello!!!!!", 5)
    .result;

strictEqual(ten, 10);
