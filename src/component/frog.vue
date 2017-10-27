<template>
  <div class="frog-mascot">
    <img class="image" src="//file.baixing.net/201710/ed7355c9d3ee55c55ac951a006d08502.gif"
         ref="frog" alt="There is a frog">
  </div>
</template>

<script>
  export default {
  	mounted() {
  		const frog = this.$refs['frog']
  		frog.addEventListener('click', (e) => {
            const X = e.offsetX, Y = e.offsetY
            console.log(X, Y)
            if (Y < 150 && Y > 110) {
  				if (X > 10 && X < 60) {
  					this.$emit('touch', 'left')
                } else if (X > 140 && X < 186) {
  					this.$emit('touch', 'right')
                } else {
  					this.$emit('touch', 'middle')
                }
            } else {
  				this.$emit('touch', 'head')
            }
		}, false)
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
