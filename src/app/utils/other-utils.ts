import { isEven} from "./is-even";


export const PI = 3.1415927;

export function isEvenTruncateDecimal(n: number): boolean {

    const val = Math.floor(n);

    return isEven(val);

}
