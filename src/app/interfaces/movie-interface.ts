export interface AnimeInfo{
    name: string;
    year: number;
    dubs: boolean;               
}  
export const dbz: AnimeInfo = {
        name: 'dragonball z',
        year: 1989,
        dubs: true
}

export interface Movie{
    title: string;
    director: string;
    yearRelease: number;
    awards?: string[];//optional property ..if it's there it will be a string
};


 export const starWars: Movie = {
     title: 'Star Wars',
     director: 'Lucas',
     yearRelease: 1989
 }