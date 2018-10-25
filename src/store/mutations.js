const mutation = {
	//商品详情规格信息
	SET_REGIONADDRESS(state,value){
		var response = value.data;
		state.regionAddressMsg = response;
	},
	SET_POINTADDRESS(state,value){
		var response = value.data;
		state.pointAddressMsg = response;
	},
	SET_REGIONGPS(state,value){
		var response = value.data;
		state.regionGpsMsg = response;
	},
	SET_POINTGPS(state,value){
		var response = value.data;
		state.pointGpsMsg = response;
	},
	GET_ATTRIBUTEINFO(state,value){
		var response = value.data;
		state.attributeInfo = response;
	},
	
}
export default mutation;
