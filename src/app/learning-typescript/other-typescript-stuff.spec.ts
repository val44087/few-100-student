import { isEven } from "../utils/is-even";

describe('cool stuff in ts', () => {
    it('should spread like butta', () => {
        // the spread operator
        // ...
        // denotes spreading the indices of an array (or object)
        // across a new structure
        // in other words used to create a deep copy of an old array
        
        const myNums: number[] = [1,5,3,9];

        let spreadNums: number[] =[...myNums]; //give every index of mynums across
        //new array.  Two differetn arrays.  Not like a shallow copy.
        //spreadNums is a depp copy of myNums [1,5,3,9];
        //copy and return

        //manipulate before returning
        let boringSpread = myNums.map((eachNum: number) => isEven(eachNum * 2));
        //spreading content of myNums and adding 7,2,44
        let moreNums: number[] = [...myNums, 7, 2, 44];
    });

    //copy from instructor that is exported
    // it('spread w/ objects', () => {
    //     let mildManneredInstructor = {
    //         ...instuctor
    //     }

    //spreading all the new values from source in the new object and chaning
    // const superInstructor = {
    //     ...mildManneredInstructor,
    //     superPower: 'babbling',
    //     occupation: 'super Instructor' //overried a prop in the source object
    // }
        
    });

    it('should use the rest', () => {
        // the rest operator
        // ...
        
    });

});