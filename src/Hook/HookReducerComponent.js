

//action을 판단해서 state를 체인지
const myReducer = (state,action) => {
    //action은객체
    // console.log(state);
    // console.log(action);
    if(action.type === 'increase') {
        state = {value : state.value +1};
    } else if(action.type === 'decrease') {
        state = {value : state.value -1};

    } else if(action.type === 'reset'){
        state = {value : 0};

    }
    return state;
}


const nameReducer = (state,action) =>{

    // console.log(action);//e.target
    //  if(action.name == "name"){
    //     state = {...state,[action.name]:action.value};

    // } else if(action.name== "age"){
    //     state = {...state,[action.name]:action.value};
    // } 

    state = {...state,[action.name]: action.value};

    return state;
}





//기본 디폴트모형
export {myReducer,nameReducer};