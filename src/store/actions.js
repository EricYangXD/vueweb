import Vue from 'vue'
import axios from 'axios'
export default{
	/*标注信息维护模块*/
	regionAddress(context,data){
		context.commit("SET_REGIONADDRESS",{
			data
		});
	},
	regionGps(context,data){
		context.commit("SET_REGIONGPS",{
			data
		});
	},
	pointAddress(context,data){
		context.commit("SET_POINTADDRESS",{
			data
		});
	},
	pointGps(context,data){
		context.commit("SET_POINTGPS",{
			data
		});
	},
	attributeInfo(context,data){
		context.commit("GET_ATTRIBUTEINFO",{
			data
		});
	},
	
}
