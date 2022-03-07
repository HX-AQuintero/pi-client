
const initialState = {
    dogs : [],  //estado que se modificará según actions
    temperaments: [], //estado con todos los temperamentos
    allDogsEver: [], //estado con todas las razas siempre
    dogDetails: [] //estado con la info de detalles de perros
};

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogsEver: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return{
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allDoggs = [...state.allDogsEver];
            const temDogFiltred = action.payload === 'All' 
            ? allDoggs : allDoggs.filter(e => {
                if(e.temperament){
                    return e.temperament.includes(action.payload);
                }
                return null
            })
            return{
                ...state,
                dogs: temDogFiltred
            }
        case 'POST_DOG':
            return{
                ...state,
            }
        case 'FILTER_BY_CREATED':
            let db = state.allDogsEver.filter(e => e.createdInDb);
            let api = state.allDogsEver.filter(e => !e.createdInDb);
            if (action.payload === 'dog_db'){
                if(!db.length){
                    alert('There is not dogs created yet');
                    return {
                        ...state,
                        dogs: state.allDogsEver
                    }
                } else {
                    return {
                        ...state,
                        dogs: db
                    }
                }
            }
            return {
                ...state,
                dogs: action.payload === 'all_dogs' ? state.allDogsEver : api,
            }
            
        case 'ORDER_BY_NAME':
            const allDogggs = state.allDogsEver;
            const arrOrd = action.payload === 'asc_alf' ?
                [...state.dogs].sort((a,b) => {
                    if(a.name < b.name) {
                        return -1};
                    if(a.name > b.name) {
                        return 1};
                    return 0;
                }) :
                [...state.dogs].sort((a,b) => {
                    if(a.name > b.name) {
                        return -1};
                    if(a.name < b.name) {
                        return 1};
                    return 0;
                })
            return {
                ...state,
                dogs: action.payload === 'All' ? allDogggs : arrOrd
            }
        case 'ORDER_BY_WEIGHT':
            const allDooggs = state.allDogsEver;
            const allFilter = state.dogs.filter(e => e.weightMin !== null);
            const OrdMin = action.payload === 'asc_p' ?
                allFilter.sort((a,b) => {
                    if(a.weightMin < b.weightMin) {
                    return -1};
                    if(a.weightMin > b.weightMin) {
                        return 1};
                    return 0;
                }) : 
                allFilter.sort((a,b) => {
                    if(a.weightMin > b.weightMin) {
                        return -1};
                    if(a.weightMin < b.weightMin) {
                        return 1};
                    return 0;
                })
            return {
                ...state,
                dogs: action.payload === 'All' ? allDooggs : OrdMin
            }
        case 'GET_DOGS_NAME':
            return{
                ...state,
                dogs: action.payload
            }
        case 'GET_DETAILS':
            return{
                ...state,
                dogDetails: action.payload
            }
        default:
        return state;
    }
    
}

export default rootReducer;