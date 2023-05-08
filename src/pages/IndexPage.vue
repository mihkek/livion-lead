<template>
  <q-page class="flex flex-center main_wrapper">
    <q-card class="main_card rounded">
      <h6 class="text-h6 q-pa-none q-ma-none">Ваш тариф</h6>
      <h1 class="q-mb-md">Доступ на 3 месяца (все ключено)</h1>
      <div class="price_card">
        <div class="price_card_head">
          <p class="q-ma-none q-pa-none">ваша скидка 40%</p>
        </div>
        <div class="price_card_content q-pa-sm">
          <div class="price_card_discount">8900₽</div>
          <div class="price_card_item">
            <h5>5 350₽</h5>
            <p>(445₽ / неделя)</p>
          </div>
        </div>
      </div>

      <img class="payments_img sm_hide" src="payments.png" alt="" />
      <div class="main_card_footer sm_hide">
        <div class="footer_label">
          <p class="q-pa-none q-ma-none">начало занятий:</p>
          <span class="q-pa-none q-ma-none">04 мая 2023</span>
        </div>
        <div class="footer_label">
          <p class="q-pa-none q-ma-none">как войти:</p>
          <span class="q-pa-none q-ma-none">на почту придет доступ</span>
        </div>
      </div>
    </q-card>
    <q-card class="main_card rounded" style="background: #ffffff">
      <h6 class="text-h6 q-pa-none q-ma-none">Оформление покупки</h6>
      <div class="steps_wrapper sm_hide">
        <div class="steps_item active">
          <div class="steps_number">1</div>
          <div class="steps_text">
            Создать личный кабинет и заполнить контактные данные
          </div>
        </div>
        <div class="steps_item">
          <div class="steps_number">2</div>
          <div class="steps_text">Оплатить доступ</div>
        </div>
      </div>

      <q-form class="full-width reg_form">
        <q-input
          class="form_input"
          outlined
          rounded
          label="Имя"
          v-model="name"
          :rules="[(val) => val.length >= 3 || 'Введите имя']"
          type="text"
          lazy-rules
        />
        <q-input
          class="form_input"
          v-model="email"
          outlined
          rounded
          lazy-rules
          label="Почта"
          :rules="[(val) => isValidEmail(val) || 'Введите корректный email']"
          type="email"
        />
        <q-input
          class="form_input"
          outlined
          rounded
          lazy-rules
          v-model="phone"
          label="Телефон"
          :rules="[(val) => val.length >= 8 || 'Введите телефон']"
          mask="#-###-###-##-##"
          hint="Телефон в виде: 8-###-###-##-##"
        />

        <q-btn type="submit" label="Оплатить" class="form_btn q-mt-sm" />
      </q-form>
      <p class="form_footer">
        Нажимая на кнопку, я соглашаюсь на
        <a href="#">обработку персональных данных</a> и
        <a href="#">с правилами пользования платформой</a>
      </p>

      <div
        class="steps_wrapper sm_show"
        style="margin-top: 65px; margin-bottom: 30px"
      >
        <div class="steps_item active">
          <div class="steps_number">1</div>
          <div class="steps_text">
            Создать личный кабинет и заполнить контактные данные
          </div>
        </div>
        <div class="steps_item">
          <div class="steps_number">2</div>
          <div class="steps_text">Оплатить доступ</div>
        </div>
      </div>

      <div class="main_card_footer sm_show">
        <div class="footer_label">
          <p class="q-pa-none q-ma-none">начало занятий:</p>
          <span class="q-pa-none q-ma-none">04 мая 2023</span>
        </div>
        <div class="footer_label">
          <p class="q-pa-none q-ma-none">как войти:</p>
          <span class="q-pa-none q-ma-none">на почту придет доступ</span>
        </div>
      </div>
      <img class="payments_img sm_show" src="payments.png" alt="" />
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(email)) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>
