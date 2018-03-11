<template>
  <div>
    <p>background image (from assets/img)</p>
    <div class="kitten__bg"></div>

    <p>img tag (from assets/img)</p>
    <img src="~/assets/img/kitten02.jpg">

    <p>img tag (from static)</p>
    <img src="/kitten03.jpg">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.kitten__bg {
  width: 300px;
  height: 200px;
  background-image: url('~/assets/img/kitten01.jpg');
  background-size: contain;
  margin: auto;
}
</style>
