declare module "fuzzy-matching" {
    declare class FuzzyMatching {
        constructor(items: Array<string>): FuzzyMatching;

        get(
            input: string,
            criteria?: {
                min?: number,
                maxChanges?: number
            }
        ): {
            value: string | null,
            distance: number
        };
    }

    declare export default typeof FuzzyMatching;
}