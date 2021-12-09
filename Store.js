export const initialState={
   favourites:[],
};
//action
//{
 // type:Add_Product_to_Cart,
 // payload:{};
//}
 export const reducer=(state=initialState, action) =>{
switch(action.type){
  case "ADD_TO_FAVOURITES":{
    console.log('added to favourites' , action.payload)
    const {favourites} = state;
    
    const updatedfavourites = [...favourites,action.payload]
  return{
  ...state,
  favourites:updatedfavourites,
  }
  }
   case "REMOVE_FROM_FAVOURITES": {
      const productIdToBeRemove = action.payload.pid;
      const {favourites} = state;

      const filteredfav = favourites.filter(item => (item.id !== productIdToBeRemove))

      return {
        ...state,
        favourites: filteredfav,
      }

    }

  default: return state;
}
}