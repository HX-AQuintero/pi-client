import axios from 'axios';

//action que permite renderizar todos los perros en Home

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get('https://pi--dogs.herokuapp.com/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

//---------------------------------------------------------------------------

//action que permite renderizar todos los temperamentos en Home

export function listOfTemperaments(){
    return async function(dispatch){
        var json = await axios.get('https://pi--dogs.herokuapp.com/temperament');
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    }
}

//---------------------------------------------------------------------------

//action que permite filtrar los temperamentos

export function filterByTemp(payload){
    return{
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

//---------------------------------------------------------------------------

//action que permite filtrar el origen de los perros (API, DB)

export function filterByCreated(payload){
    return{
        type: 'FILTER_BY_CREATED',
        payload
    }
}

//---------------------------------------------------------------------------

//action que permite ordenar alfabéticamente por nombre

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

//---------------------------------------------------------------------------

//action que permite ordenar peso de menor a mayor y viceversa

export function orderByWeight(payload){
    return{
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}

//---------------------------------------------------------------------------

//action que busca perros por nombre 

export function getNameDogs(name){
    return async function(dispatch){
        try{
            var json = await axios.get('https://pi--dogs.herokuapp.com/dogs?name=' + name);
            return dispatch({
                type: 'GET_DOGS_NAME',
                payload: json.data
            })
        } catch(error){
            console.log(error.message);
            return alert('Breed not found. Try again')
        }
    }
}

//---------------------------------------------------------------------------

//action que recibe la info con el perro a crear

export function postDog(payload){
    return async function(){
        var json = await axios.post('https://pi--dogs.herokuapp.com/dog', payload);
        return json;
    }
}

//---------------------------------------------------------------------------

//action que recibe la info con los detalles del perro 

export function getDetails(id){
    return async function(dispatch){
        try{
            var json = await axios.get('https://pi--dogs.herokuapp.com/dogs/' + id);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        }catch(error){
            console.log(error)
            return alert('Dog not found. Try again')
        }
    }
}
