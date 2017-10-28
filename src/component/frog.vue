<template>
  <div class="frog-mascot">
    <img class="image" src="//file.baixing.net/201710/ed7355c9d3ee55c55ac951a006d08502.gif"
      @click="touch" alt="There is a frog">
  </div>
</template>

<script>
export default {
  data() {
    return {
      recent: null,
    }
  },
  methods: {
    touch(e) {
      if (speechSynthesis.speaking) {
        return speechSynthesis.cancel()
      }
      const X = e.offsetX
      const Y = e.offsetY
      if (Y < 110 || Y > 150) {
				this.trigger('head')
      } else if (X > 10 && X < 60) {
				this.trigger('left')
      } else if (X > 140 && X < 186) {
				this.trigger('right')
      } else {
				this.trigger('middle')
      }
    },
    trigger(position) {
      if (position === this.recent) return
      this.recent = position
      this.$emit('touch', position)
    },
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
