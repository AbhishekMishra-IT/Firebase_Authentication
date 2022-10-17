import {ADD_DETAILS,REMOVE_DETAILS} from './detailActionType';

export const addDetailsAction=(data)=>{
	return{
		type:ADD_DETAILS,
		payload:data
	}
}

export const removeDetailsAction=(index)=>{
	return{
		type:REMOVE_DETAILS,
		payload:index
	}
}

// export const updateDetailsAction=(index)=>{
// 	return{
// 		type:UPDATE_DETAILS,
// 		payload:index
// 	}
// }
