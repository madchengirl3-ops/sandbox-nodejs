import { booksHandler } from "./booksHandler";
import { defaultHandler } from "./defaultHandler";
import { usersHandler } from "./usersHandler";
export const mainHandler = (req, res) => {

    const {url} = req;

    if(url.startsWith('/api')) {

        if(url.startsWith('/api/books')) {
            return booksHandler(req, res);
            
        }
        if(url.startsWith('/api/users')) {
            return usersHandler(req, res);
            

        }  

    } 

    return defaultHandler(req, res);
    
 
};