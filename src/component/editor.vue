<template>
  <div class="editor">
    <div class="input">
      <input class="control" type="text" @keyup.enter="submit">
    </div>
    <div :class="['voice', {'listening': listening}]" @click="$emit('start')"></div>
  </div>
</template>

<script>
export default {
  props: {
    listening: Boolean,
  },
  methods: {
    submit(e) {
      const {value} = e.target
      e.target.value = ''
      this.$emit('submit', value)
    }
  }
}
</script>

<style>
.editor {
  display: flex;
  box-shadow: 0 0 8px 2px #f1f1f1;
}
.editor .control {
  -webkit-appearance: none;
  padding: 0 1em;
  border: none;
  font: inherit;
  color: inherit;
  background: transparent;
  outline: none;
  line-height: 3.6em;
  width: 100%;
  box-sizing: border-box;
}
.editor .input {
  flex-grow: 1;
}
.editor .voice {
  width: 3.6em;
  height: 3.6em;
  border-left: 1px solid #f1f1f1;
  background: url('//file.baixing.net/201710/8f6a4c7445d8073f1951710759acbfbc.png') no-repeat center;
  background-size: contain;
  transition: background-color ease 0.3s;
  cursor: pointer;
}
.editor .voice.listening {
  background-color: #f4b3c1;
}
</style>
