export const GetLocalStorage = (key)=>{
    
    return JSON.parse(localStorage.getItem(key));
}