// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";
import VueDisqus from "vue-disqus";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);
  Vue.use(VueDisqus);

  head.meta.push({
    name: "keywords",
    content:
      "Tourisme, Voyage, Visite, Visite touristique, région occitanie, randonnée",
  });

  head.meta.push({
    name: "description",
    content: "Margalaguia guide conférencière",
  });

  head.meta.push({
    name: "author",
    content: "Timothy ALCAIDE",
  });

  head.meta.push({
    name: "image",
    content: "./static/hero-site.png",
  });

  head.meta.push({
    name: "url",
    content: "https://margalaguia.com/",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
  });
}
