<template>
  <div class="message-box">
    <div :class="['line', message.type]" ref="line" v-for="message in messages">
      <div class="wrapper">
        <div class="content">{{ message.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: Array,
  },
  mounted() {
    this.$el.addEventListener('animationend', () => {
      const lines = this.$refs.line
      lines[lines.length - 1].scrollIntoViewIfNeeded()
    })
  }
}
</script>

<style>
@keyframes expand {
  from {
    font-size: 0;
  }
  to {
    font-size: 16px;
  }
}
.message-box {
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
}
.message-box .line {
  width: 100%;
  animation: expand 0.3s ease;
}
.message-box .line.user {
  text-align: right;
}
.message-box .wrapper {
  display: inline-block;
  max-width: 50%;
  padding: 0.8em;
  box-sizing: border-box;
}
.message-box .content {
  position: relative;
  padding: 0.8em;
  border-radius: 8px;
  background: #ec7a79;
  color: #fff;
}
.message-box .content::before {
  content: '';
  position: absolute;
  height: 0;
  width: 0;
  border: 0.5em solid transparent;
  border-left-color: #ec7a79;
  border-top-width: 0;
  bottom: -0.5em;
  right: 50%;
}
.message-box .user .content {
  background: #c3d96a;
}
.message-box .user .content::before {
  border: 0.5em solid transparent;
  border-right-color: #c3d96a;
  left: 50%;
}
</style>
