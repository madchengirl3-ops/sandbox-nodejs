import { booksHandler } from "./booksHandler.js";
import { defaultHandler } from "./defaultHandler.js";
import { usersHandler } from "./usersHandler.js";
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