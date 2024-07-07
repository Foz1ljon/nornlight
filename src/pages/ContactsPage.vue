<template>
  <div class="container">
    <div class="flex justify-between md:flex-nowrap flex-wrap">
      <div class="flex flex-col">
        <p class="lg:text-6xl sm:text-5xl text-4xl font-bold text-primary">
          Контакты
        </p>
      </div>
      <div class="flex flex-col">
        <p class="lg:text-2xl md:text-xl font-semibold">8 (800) 890-46-56</p>
        <p
          class="lg:w-[209px] md:w-[213px] lg:text-base md:text-sm font-normal"
        >
          Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: 
        </p>
      </div>
    </div>
  </div>
  <div class="w-full relative mb-24">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287927.6577372562!2d37.154618627952686!3d55.68142761532242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskva%2C%20Rossiya!5e0!3m2!1suz!2s!4v1720131932265!5m2!1suz!2s"
      class="w-full mx-auto container xl:max-w-[1600px] md:h-[672px]"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div class="container flex justify-center items-center">
      <div
        class="md:absolute bottom-10 lg:px-4 md:px-2 xl:w-[1300px] bg-white p-4 flex lg:justify-around md:justify-center flex-wrap gap-2 items-center"
      >
        <div class="flex flex-col">
          <p class="lg:text-2xl md:text-xl font-semibold text-primary">
            Адрес магазина
          </p>
          <p class="lg:text-base md:text-sm font-normal text-primary">
            г. Москва, Дмитровское шоссе д.100с2
          </p>
        </div>
        <div class="flex flex-col">
          <p class="lg:text-2xl md:text-xl font-semibold text-primary">Почта</p>
          <p class="lg:text-base md:text-sm font-normal text-primary">
            NORNLIGHT@mail.ru
          </p>
        </div>
        <div class="flex flex-col">
          <p class="lg:text-2xl md:text-xl font-semibold text-primary">
            Телефон
          </p>
          <p class="lg:text-base md:text-sm font-normal text-primary">
            8 (800) 890-46-56
          </p>
        </div>
        <div>
          <button class="text-white bg-primary px-6 py-2 rounded-full">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
