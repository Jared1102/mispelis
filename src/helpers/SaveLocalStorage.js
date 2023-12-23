import { GetLocalStorage } from "./GetLocalStorage";

export const SaveLocalStorage = (key,object)=>{
    //Conseguir los elementos que hay en localStorage
    let films=GetLocalStorage(key);
    
    if(Array.isArray(films)){
        films.push(object);
    }else{
        films = [object];
    }
    
    //Guardar en el localStorage
    localStorage.setItem(key,JSON.stringify(films));
}

