<template>
  <div class="container ">
    <div class="flex justify-between lg:flex-nowrap flex-wrap">
      <p class="lg:text-6xl sm:text-5xl text-4xl font-bold text-primary">Гарантии</p>
      <div class="flex flex-col">
        <p class="lg:text-2xl md:text-xl text-base font-semibold text-black">
          Обмен и возврат по желанию покупателя
        </p>
        <p class="md:w-[640px] md:text-xl text-sm">
          Все товары в магазине «NornLight» имеют гарантию. Она заявляется
          производителем и имеет определенный срок действия на различные группы
          товаров. Если ваше изделие вышло из строя в течение гарантийного
          срока вы можете обратиться к нам и получить бесплатный ремонт. Для
          этого нужно:
        </p>

        <li
          class="md:w-[640px] md:text-xl text-sm ml-2 text-black"
          v-for="(item, i) in data"
          :key="i"
        >
          {{ item }}
        </li>

        <p class="md:w-[640px] md:text-xl text-sm">
          Обращаем внимание, что «А-Свет» не является сервисным центром, а
          выполняет роль посредника между клиентом и поставщиком. Поэтому сроки
          проведения ремонта могут отличаться для товаров различных брендов.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  `
Предоставить чек, накладную или сообщить почту или номер телефона, указанные при
оформлении заказа.

`,

  `Привезти товар к нам на склад или отправить его транспортной
компанией.`,
  `Упаковка товара не имеет повреждений, присутствует
первоначальный товарный вид;`,
  ` Есть документ, подтверждающий покупку в нашем
интернет-магазине.`,
  `
После товар отправляется на экспертизу и ремонт. Если ремонт
невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.`,
];
</script>
