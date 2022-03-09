 export   interface Cat{
        breed: string;
        color: string;
        age: number;
        friendly: boolean;
        kittens?: Cat[];
    };
    
 export   const typeOfCat: Cat = {
       breed: 'Siamese',
       color: 'black',
       age: 9,
       friendly: true
    }

   