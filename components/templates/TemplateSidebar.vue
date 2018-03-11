<template>
  <div class="wrapper">
    <div class="box header">Header</div>
    <div class="box sidebar">Sidebar</div>
    <div class="box sidebar2">Sidebar 2</div>
    <div class="box content">
      {{ content }}
    </div>
    <div class="box footer">Footer
      <CardBig/>
    </div>
  </div>
</template>

<script>
import CardBig from '~/components/CardBig.vue'

export default {
  scrollToTop: true,

  props: {
    content: {
      type: String,
      default: ''
    }
  },

  components: {
    CardBig
  }
}
</script>

<style>
.sidebar {
		grid-area: sidebar;
	}

	.sidebar2 {
		grid-area: sidebar2;
	}

	.content {
		grid-area: content;
	}

	.header {
		grid-area: header;
	}

	.footer {
		grid-area: footer;
	}

	.wrapper {
		color: saddlebrown;
	}

  .wrapper {
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
     "header"
     "sidebar"
     "content"
     "sidebar2"
     "footer"
  }

	@media only screen and (min-width: 500px)  {
	.wrapper {

		grid-template-columns: 20% auto;
		grid-template-areas:
    "header   header"
		"sidebar  content"
		"sidebar2 sidebar2"
		"footer   footer";
	}
	}

	@media only screen and (min-width: 600px)   {
		.wrapper {
      grid-gap: 20px;
			grid-template-columns: 120px auto 120px;
			grid-template-areas:
      "header  header  header"
			"sidebar content sidebar2"
			"footer  footer  footer";
		}
	}

.box {
  background-color: crimson;
  color: #fff;
  padding: 10px;
  font-size: 150%;
}

.header,
.footer {
  background-color: coral;
}

.sidebar2 {
  background-color: salmon;
  color: whitesmoke;
}
</style>
