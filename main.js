import Vue from 'vue';
import App from './App';

import http from '@/common/js/http/'
//设置baseUrl
http.config.baseUrl = "https://edgeaccess.iot.kinco.cn/"
//设置请求前拦截器
http.interceptor.request = (config) => {
	//添加通用参数
	config.headers['Content-Type'] = 'application/json;charset=UTF-8';
}
//设置请求结束后拦截器
http.interceptor.response = (response) => {
	console.log(response);
	//判断返回状态 执行相应操作
	return response;
}

Vue.prototype.$request = http;

import uView from 'uview-ui';
Vue.use(uView);

Vue.config.productionTip = false;


App.mpType = 'app';



const app = new Vue({
	...App
})
app.$mount()
