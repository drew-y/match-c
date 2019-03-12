
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
        if (this.matched) return this;
        if (comparison === this.val) {
            return new Match(true, this.val, result);
        }
        return this;
    }
}

export const match = <T, U>(val: T, defaultVal: U) =>
    new Match(false, val, defaultVal);

