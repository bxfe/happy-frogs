<template>
  <div class="editor">
    <input class="control" type="text" @keyup.enter="submit">
  </div>
</template>

<script>

export default {
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
</style>
