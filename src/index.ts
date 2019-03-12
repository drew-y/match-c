
export interface MatchCase<T, U> {
    c(comparison: T, result: U): MatchCase<T, U>;
    result: U;
}

export const match = <T, U>(val: T, defaultVal: U) => {
    class Match {
        constructor(private matched: boolean, public result: U) {}

        c(comparison: T, result: U) {
            if (this.matched) return this;
            if (comparison === val) {
                return new Match(true, result);
            }
            return this;
        }
    }

    return new Match(false, defaultVal);
}

