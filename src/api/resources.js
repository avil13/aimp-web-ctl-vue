import Vue from 'vue';
import VueResource from 'vue-resource';
import config from './../config';

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next) => {
    // Здесь обрабатывается тело запроса
    request.headers = request.headers || {};

    next((response) => {
        // При этом могут быть обработаны в соответствии с результатами
        if (!response.ok && !request.no_warning) {
            Vue.swal(response.statusText, response.bodyText, 'error');
        }
    });
});

export const VK = Vue.resource(
    config.HOST + config.API,
    {},
    {
        user: {
            method: 'POST',
            url: `${config.HOST}${config.API}/vk-friend/user`
        },
        friends: {
            method: 'POST',
            url: `${config.HOST}${config.API}/vk-friend/friends`
        }
    }
);
