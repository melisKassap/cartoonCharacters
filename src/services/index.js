import axios from "axios";

export const getCharactersData = () =>{
    const data = axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons");
    return data;
}

