import Vue from 'vue'
import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: 'b6111438a5f54e6eaa70e72aaab8d380'})

.textRequest('Hello!')
    .then((response) => { console.log(response)})
    .catch((error) => {/* do something here too */})

new Vue({
    el: '#app',
    template: '<p>{{message}}</p>',
    data: {
        message: 'hello yp'
    }
})