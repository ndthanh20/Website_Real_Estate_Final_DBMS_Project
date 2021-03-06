import {elements} from './elements';


export const clearPage = () =>{
    elements.container.innerHTML = '';
}

export const getCompanyCodeFromUrl = url =>{
    return url.slice(29, url.length);
}

export const getJobCodeFromUrl = url =>{
    return url.slice(28, url.length);
}
export const getHouseCodeFromUrl = url =>{
    return url.slice(26, url.length);
}
export const getApartmentCodeFromUrl = url =>{
    return url.slice(26, url.length);
}
export const getLandCodeFromUrl = url =>{
    return url.slice(26, url.length);
}
export const convertDocument = doc =>{
    const arr = doc.split('\n');
    const res = arr.map(p => `<p>${p}</p>`).join('');
    return res;
}

export const tagStyle = `
    display: inline-block;
    white-space: nowrap;
    background-color: brown; 
    margin: 10px;
    padding: 10px;
    border-radius: 10px;font-size:15px;
    color: white;`;

export const formStyle = `
    display: inline-block;
    width: 250px;
    height: 30px;
    font-size:20px;
    margin-bottom: 20px`;

export const signUpStyle=`
    height: auto;
    padding: 50px; 
    text-align: center;
`