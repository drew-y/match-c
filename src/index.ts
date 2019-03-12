
export interface MatchCase<T, U> {
    c(comparison: T, result: U): MatchCase<T, U>;
    result: U;
}

class Match<T, U> {
    constructor(
        private matched: boolean,
        private val: T,
        public result: U
    ) { }

    c(comparison: T, result: U) {
        if (this.matched || comparison !== this.val) return this;
        return new Match(true, this.val, result);
    }
}

export const match = <T, U>(val: T, defaultVal: U) =>
    new Match(false, val, defaultVal);

