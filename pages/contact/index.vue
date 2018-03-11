<template>
  <div>
    <h1>Contact page</h1>
    <template-sidebar :content="content"/>
  </div>
</template>

<script>
import TemplateSidebar from '~/components/templates/TemplateSidebar.vue'


export default {
  components: {
    TemplateSidebar
  },

  computed: {
    content () {
      return `Building server-rendered apps in Vue using Nuxt.js
This post will walk you through the process of building server-rendered webpages in Vue — a progressive JavaScript framework that is simple to start using. I’ll also discuss Nuxt, a tool that makes the server-rendering process seamless. Finally, as a practical example, we will build an app that shows pictures of dogs based on their breed.

We are going to build a server rendered Vue app that loads very quickly, even before JavaScript is loaded, and is discoverable by search engines.

To better understand the problem, open an SPA built with any framework and try to inspect the page. Here is an example of one of my Vue demo projects:


Regardless of the project’s size, relevance, or beauty, this is what you end up with:


The content you see in your page source is the server response. Notice how it’s just the div#id tag that’s shown and all other contents, including those pretty images, are nowhere to be found.

That’s a problem.

Actually, there are a lot of potential problems we could discuss.

Let’s focus on the most glaring — web crawling. Search engines and other web crawlers don’t know much about the visuals of your website after they are rendered. They just care about that ugly HTML sent as a response from your server. Here, when a crawler visits our website, it goes home with nothing but that div tag and some contents in the head tag.`
    }
  }
}
</script>

