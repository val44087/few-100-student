import { monitorEventLoopDelay } from "perf_hooks";
import { stringify } from "querystring";

describe('variable, datat types, typing', () => {
    it('should declare a variable', () => {
        //declaring and initialize a variable
            const name = 'valerie';
            let role = 'IT Apps Programmer';
           // let taco = new String('bacon taco');
           // a const is a constant - preferred way
           // you must initializw when you declare


           role = 'IT Apps Programmer, Sr.';

           const bestStudent = 'one of the best';

           let studentCount;

           studentCount = getStudentCount();

    });
    it('talk about the basic types...', () => {
        
        //strings
        const n1 = 12;
        const boringString = new String('booooooring');
        const single = 'this is a single quote';
        const double = "this is a double quote.it's cool";
        const backticks = `backticks have super powers
        wow this is really cool.

        pie is ${n1}

        last power i have this many sudents: ${getStudentCount()}!!!
        `;
        // strings are iterables
        const iterable = 'goku';
        iterable[0]; //'g';

        //concatenation
        const plusop = 'bryon is  + n1 + years old';
    });

    it('should be concat practice', () => {
        const name = 'Valerie';
        let age = 35;
        const intro = 'my name is ${name} and I am ${age} years old';
        expect(intro).toBe('my name is Valerie and I am 35 years old');        
    });

    it('should be an object', () => {
        const dudeTeaching = {
            name: 'val',
            hoursTeaching: 21,
            language: 'TypeScript'
        }  
        
        let care = '19 VW';

        const vehicle = {
            year: 2019,
            make: 'VW',
            model: 'Atlas',
            engine: {
                type: 'vroom',
                displacement: 100
            }
        }

        let sentence = `${dudeTeaching.name} drives a ${vehicle.model}
        his engine is a ${vehicle.engine.type}`;
        let randomProperty = 'make';
        //const vehicleMake = vehicle[vehicle.engine.type];

        //vehicle.model = 'taco';

        //vehicle = {};

    });

    it('should be an array...', () => {
        const people = ['lee', 'michelle', 'sam', 'max'];
        const morePeople = new Array<string>();
        morePeople.push('praveen');
        morePeople.push('angel');

        const empty = [];

        const awesome = people[1];
        const arrLen = people.length;
        const lastIndex = people[people.length - 1];

    });

    it('object and array practice', () => {
        //create a very descriptive object about your
        const Valerie = {
            firstName: 'Valerie',
            middleName: 'Ann',
            lastName: 'Anderson',
            homeAddress: {
                street: '123 Testing',
                city: 'Twins',
                state: 'Ohio'
            },
            workAddress: {
                street: '123 Testing',
                city: 'Mayfield',
                state: 'Ohio'
            },
            occupation: 'developer',
            vehicle: {
                make: 'Subaru',
                model: 'CrossTrek'
            }
        }        
    });
    it('forgot to talk about boolean', () => {
        // true or false
        const isSuperAwesome = true;
        const wasCalled = false;
        const doesExist = 1;
        //truthy values
       // if (true)
      //  if ({})
       // if ([])
       // if (42)
       // if ("0")
       // if ("false")
       // if (new Date())
       // if (-42)
        //if (12n)
       // if (3.14)
        //if (-3.14)
       // if (Infinity)
       // if (-Infinity)
        //explicit conversion from a truthy value to a true value // doublebang
        //if(!!doesExist); 
        let newWord = 'segue';
        //falsy
        //if (false)
        //if (null)
        //if (undefined)
       // if(0)
        //if (-0)
        //if (0n)
       // if(NaN)
       // if("")   
    });
 });

 describe('typing in typescript', () => {
    it('should talk about basic typing', () => {
        const someThing:string = 'jibberjabber';//not used n s2
        const sometThing2 = 'jibber jabber';
        let someNum:number;

       // someNum = true;  //not allowed
       someNum = 41_569;  //you can use underscores in numbers

       const anime = { 
           name: 'yu yu haku',
           year: 1992,
           isGreatestAnumeEver: true
       }

       const releaseYear = anime.year;
       //anime.isGreatestAnumeEver = 'no'; not allowed
       // let someCreature: cat  = 'yup a cat';

       let favFoods: string[] = ['taco', 'chicken', 'spinach', 'beer'];
       favFoods.push('wine');
       let peopleWhoScareMe:Array<string> = ['wife', 'daughter', 'mom'];        
    });     
    it('should talk interfaces', () => {
        interface AnimeInfo{
                name: string;
                year: number;
                dubs: boolean;               
            }  
            const dbz: AnimeInfo = {
                    name: 'dragonball z',
                    year: 1989,
                    dubs: true
            }

            interface Movie{
                title: string;
                director: string;
                yearRelease: number;
                awards?: string[];//optional property ..if it's there it will be a string
            };
            
            const userFaves: (Movie | AnimeInfo)[] = [];

             const starWars: Movie = {
                 title: 'Star Wars',
                 director: 'Lucas',
                 yearRelease: 1989
             }
            userFaves.push(dbz);
            userFaves.push(starWars);

            let Media: AnimeInfo | Movie;
            type Media = AnimeInfo | Movie;
            let faveMedia:Media;


            
    });

    it('should all get along "uniton types"', () => {
        let favFoods: string[] = ['taco', 'chicken', 'spinach', 'beer'];
        let doesByronWantLuch: string | boolean = 'yes';

    //    doesByronWantLuch = true;
        
        
    });
    it('interface practice', () => {   
     
        interface Cat{
            breed: string;
            color: string;
            age: number;
            friendly: boolean;
            kittens?: Cat[];
        };
        const typeOfCat: Cat = {
           breed: 'Siamese',
           color: 'black',
           age: 9,
           friendly: true
        }

        let someCreature: Cat;          
        
    });
    it('enums exist', () => {
        enum Direction{
            Up = 0, 
            Down = 1,
            Left = 2,
            Right = 3,
        }
         let dir = Direction.Left;
         let sum = Direction.Down + 2;
    });
    it('js/ts structures', () => {
        
    });
    describe('structures', () => {
        it('should behave...', () => {
            let max = 'awesome';
            let kerry = 'cool';
            //comparison
            //== don't use double equal
            //==== equals
            //= assignment 
            max === kerry //false

            //Math !!
            // + Addition
            // - Subtraction
            // * Multiplication           
            // / Division
            // % Modulus (division remainder)
            10 % 7 // 3
            6 % 2 //any mod off 2 w/ 0 result is even
            // ++ Increment
            let num = 0;
            num++ * 2;  // =1 // 1 // do whatever on this line and then increment 
            ++num; // 1 //increment then do whatever on this line
            num = num + 1;
            num += 1;
            //also works with strings

            let inClass = 'luke';
            inClass += max + kerry;
            //lukeawesomecool

            it('conditional operators', () => {

                //&& and ||


                let condition = true;
                let anotherCondition = true;
                if(condition){
                    //positiv syntax
                }

                if(condition){
                    //positive
                }else{
                    //neg
                }

                if(condition){

                }else if(anotherCondition){
                    //more pos
                }else{
                    //tech optional
                }

                //ternary
                //short hand conditional
                const isAwesome = condition ? 'yup' : 'nope'; //true or false
                const isTurkey = true;
                //nested ternary
                let isBacon = condition ? 'yup' : isTurkey ? 'no, its turkey' : 'its cardboard'
            });
            it('should behave...', () => {
                const zooAnimals = ['zebra', 'lions', 'bears'];

                for (let index = 0; index < zooAnimals.length; index++){
                    zooAnimals[index]
            }    
                for(const animal of zooAnimals){
                    console.log(animal)}
                
            });
        });
    });
    it('fun syntatice sugar part 1', () => {
       let grandParent:any | undefined = {
           parent: {
               child: {
                   grandChild: 'dave'
               }
           }
       }
        //short circuting
       if(grandParent.parent.child.grandChild == 'Jeff')
        //cannot read child of undefined
        //this is called a short circuit
        if(grandParent && grandParent.parent && grandParent.parent.child && 
            grandParent.parent.child.grandChild == 'Jeff'){

            }

        

        // elvis operator 
        // optional chaining operator

        if(grandParent?.parent?.child?.grandChild === 'dave')
        {
            //let childName = 
        }
        
    });
 });

 describe('functions', () => {
     let sum = addTwoNumbers(2, 4);

     //hoisted
     function addTwoNumbers(parameter1: number, parameter2:number)
     {
        return parameter1 + parameter2;
     }

     //=> function without a name
     const addToSeven = (firstNum: number) => {
         // if you have more than on executible lineyou need curlies
         return firstNum + 7;
     }
     const logNumber = (someNum: number): void => {
         console.log(someNum)
     }
     //return is explicit
     const addNumbers = (num1: number,num2: number = 5)=> num1 + num2;

     const pizzaFunction = function(toppings: string[]) {
         
     }

     let fifteen = addToSeven(8);//15

 });


