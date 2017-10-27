import Vue from 'vue'
import {ApiAiClient} from "api-ai-javascript"
import Frog from './component/frog'
import Editor from './component/editor'
import MessageBox from './component/message-box'


const client = new ApiAiClient({accessToken: 'b6111438a5f54e6eaa70e72aaab8d380'})

client.textRequest('您好!')
    .then((response) => { console.log(response)})
    .catch((error) => {/* do something here too */})
new Vue({
  el: '#app',
  components: {
    'frog': Frog,
    'editor': Editor,
    'message-box': MessageBox,
  },
  data: {
    messages: [
      {
        type: 'frog',
        content: '你好呀，我是小蛙',
      },
      {
        type: 'user',
        content: '你好呀，我是小蛙',
      },
      {
        type: 'frog',
        content: '你好呀，我是小蛙',
      },
    ],
  },
  methods: {
    submit(content) {
      this.messages.push({
        type: 'user',
        content,
      })
      this.messages.push({
        type: 'frog',
        content,
      })
    }
  }
})
