import { IMovie } from "../types";

export function runtimeOfMovie (movie: IMovie)  {
    let runtime
    if(movie?.runtime){
        let hours = Math.trunc(movie?.runtime/60);
        let minutes = movie?.runtime % 60;
        if(hours > 0){
            return runtime = hours + 'h ' + minutes + 'm';
        } else {
            return runtime = minutes + 'm';
        }
    }
}