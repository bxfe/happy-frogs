import Vue from 'vue'
import Frog from './component/frog'
import Editor from './component/editor'
import MessageBox from './component/message-box'
import {ApiAiClient} from "api-ai-javascript"

<<<<<<< HEAD

const client = new ApiAiClient({accessToken: 'b6111438a5f54e6eaa70e72aaab8d380'})

client.textRequest('您好!')
    .then((response) => { console.log(response)})
    .catch((error) => {/* do something here too */})
=======
>>>>>>> 586450cee6e0adb14ab434c3478a45331ad9db05
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
    client: new ApiAiClient({
      accessToken: 'b6111438a5f54e6eaa70e72aaab8d380',
      lang: 'zh-CN',
    })
  },
  methods: {
    submit(content) {
      this.messages.push({
        type: 'user',
        content,
      })
      this.client.textRequest(content)
        .then(({result}) => {
          this.messages.push({
            type: 'frog',
            content: result.fulfillment.speech,
          })
        })
    }
  }
})
