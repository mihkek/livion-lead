import { boot } from "quasar/wrappers";

import VueYandexMetrika from "vue3-yandex-metrika";

export default boot(({ app, router }) => {
  app.use(VueYandexMetrika, {
    id: 93830259,
    router: router,
    env: process.env.NODE_ENV,
    webvisor: true,
    options: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    },
  });
});
