<template>
  <q-page class="flex flex-center main_wrapper">
    <q-card class="main_card rounded">
      <h6 class="text-h6 q-pa-none q-ma-none">Ваш тариф</h6>
      <h1 class="q-mb-md">Доступ на {{ order_label }} (все ключено)</h1>
      <div class="price_card">
        <div class="price_card_head">
          <p class="q-ma-none q-pa-none">ваша скидка 40%</p>
        </div>
        <div class="price_card_content q-pa-sm">
          <div class="price_card_discount">{{ getDiscountPrice }}₽</div>
          <div class="price_card_item">
            <h5>{{ order_price_label }}₽</h5>
            <p>({{ weekly_price }} ₽ / неделя)</p>
          </div>
        </div>
      </div>

      <div class="payments_img sm_hide">
        <img class="payments_img_item" src="mir.png" alt="" />
        <img class="payments_img_item" src="visa.png" alt="" />
        <img class="payments_img_item" src="qiwi.png" alt="" />
        <img
          class="payments_img_item"
          src="mc.png"
          style="height: 26px"
          alt=""
        />
      </div>
      <div class="main_card_footer sm_hide">
        <div class="footer_label">
          <p class="q-pa-none q-ma-none">начало занятий:</p>
          <span class="q-pa-none q-ma-none">{{ getCurrentDate }}</span>
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

      <q-form @submit.prevent="sendData" class="full-width reg_form">
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

        <q-btn
          type="submit"
          no-caps
          label="Оплатить"
          class="form_btn q-mt-sm"
        />
      </q-form>
      <p class="form_footer">
        Нажимая на кнопку, я соглашаюсь на
        <a target="_blank" href="https://livionclass.ru/privacy_policy"
          >обработку персональных данных</a
        >
        и
        <a target="_blank" href="https://livionclass.ru/oferta"
          >с правилами пользования платформой</a
        >
      </p>

      <div
        class="steps_wrapper sm_show"
        style="margin-top: 60px; margin-bottom: 30px"
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
          <span class="q-pa-none q-ma-none">{{ getCurrentDate }}3</span>
        </div>
        <div class="footer_label">
          <p class="q-pa-none q-ma-none">как войти:</p>
          <span class="q-pa-none q-ma-none">на почту придет доступ</span>
        </div>
      </div>
      <div class="payments_img sm_show">
        <img class="payments_img_item" src="mir.png" alt="" />
        <img class="payments_img_item" src="visa.png" alt="" />
        <img class="payments_img_item" src="qiwi.png" alt="" />
        <img
          class="payments_img_item"
          src="mc.png"
          style="height: 20px"
          alt=""
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import authApi from "src/api/auth";

import { defineComponent } from "vue";
/* eslint-disable */
export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      order_type: "1_M",
      order_label: "1 месяц",
      order_price: 1,
      order_price_label: "1",
      weekly_price: 1,
    };
  },
  mounted() {
    console.log(this.$route.query.type);
    this.calcOrderData();
  },
  computed: {
    getDiscountPrice() {
      return (this.order_price *= 1.4);
    },
    getCurrentDate() {
      var months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ];

      var date = new Date(); // создаем объект даты с текущим временем
      var day = date.getDate().toString().padStart(2, "0"); // получаем день и добавляем ведущий ноль, если число меньше 10
      var month = months[date.getMonth()]; // получаем месяц в текстовом формате из массива months
      var year = date.getFullYear(); // получаем год

      var formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
    },
  },
  methods: {
    calcOrderData() {
      switch (this.$route.query.type) {
        case "1":
          this.order_type = "1_M";
          this.order_price = 1;
          this.order_price_label = "1";
          this.order_label = "1 месяц";
          this.weekly_price = "11";
          break;
        case "3":
          this.order_type = "3_M";
          this.order_price = 2;
          this.order_price_label = "2";
          this.order_label = "3 месяца";
          this.weekly_price = "11";
          break;
        case "12":
          this.order_type = "12_M";
          this.order_price = 3;
          this.order_price_label = "3";
          this.order_label = "12 месяцев";
          this.weekly_price = "11";
          break;
        default:
          this.order_type = "12_M";
          this.order_price = 3;
          this.order_price_label = "3";
          this.order_label = "12 месяцев";
          this.weekly_price = "11";
          break;
      }
    },
    isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(email)) {
        return true;
      } else {
        return false;
      }
    },
    sendData() {
      this.$q.loading.show({
        message: `Минуту, делаем всё необходимое....<br>`,
        html: true,
      });
      authApi
        .register(this.email, this.order_type, this.name, this.phone)
        .then((res) => {
          this.$q.loading.hide();
          location.href = res.data.payment.link;
        })
        .catch((err) => {
          this.$q.loading.hide();
          console.log("Error - ", err);
          this.$q.dialog({
            dark: false,
            color: "red",
            title: "Ошибка",
            message:
              "Произошла непредвиденная ошибка. Повторите попытку позднее",
          });
        });
    },
  },
});
</script>
