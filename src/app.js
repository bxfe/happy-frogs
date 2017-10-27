import Vue from 'vue'
import Frog from './component/frog'
import Editor from './component/editor'
import MessageBox from './component/message-box'

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
