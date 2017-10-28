<template>
  <div class="frog-mascot">
    <img class="image" src="//file.baixing.net/201710/ed7355c9d3ee55c55ac951a006d08502.gif"
      @click="touch" alt="There is a frog">
  </div>
</template>

<script>
export default {
  methods: {
    touch(e) {
      const X = e.offsetX
      const Y = e.offsetY
      if (Y < 110 || Y > 150) {
				this.$emit('touch', 'head')
      } else if (X > 10 && X < 60) {
				this.$emit('touch', 'left')
      } else if (X > 140 && X < 186) {
				this.$emit('touch', 'right')
      } else {
				this.$emit('touch', 'middle')
      }
    }
  }
}
</script>

<style>
.frog-mascot {
  width: 50%;
  text-align: center;
  margin-bottom: 2em;
}
.frog-mascot .image {
  max-width: 100%;
}
</style>
