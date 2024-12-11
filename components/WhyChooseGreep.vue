<template>
  <div
    class="flex flex-col items-center justify-center gap-6 bg-[#000E18] p-5 text-white lg:p-10 lg:px-0"
  >
    <UButton
      label="Why Choose Greep"
      class="rounded-full bg-[#00926080] !p-4 !px-6"
    />
    <h2 class="text-center text-[32px] font-semibold">
      One Platform, Two Solutions
    </h2>
    <p class="text-center lg:w-1/3">
      Whether you prefer using your smartphone or ourrv dedicated POS device,
      Greeppay has you covered.
    </p>
    <div class="flex flex-col gap-5 lg:flex-row">
      <div
        class="flex flex-col-reverse items-center gap-4 rounded-2xl border-2 border-[#00926080] bg-[#0092603D] p-5 lg:w-[556px] lg:flex-row lg:pb-0"
        v-for="data in infoData"
      >
        <div class="">
          <h2 class="text-lg font-semibold lg:text-xl">{{ data.label }}</h2>
          <p class="mt-1 text-sm lg:text-justify lg:text-base">
            {{ data.description }}
          </p>
        </div>
        <img :src="data.image" alt="" class="w-[156px] lg:w-[232px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const infoData = ref([
  {
    label: "Soft POS",
    description:
      "Turn any smartphone into a payment terminal with our secure app. Perfect for mobile businesses.",
    image: "/images/greep-app.png",
  },
  {
    label: "Hardware POS",
    description:
      "A sleek, dedicated device for businesses that need high volume or in-store payment solutions.",
    image: "/images/pos-machine.png",
  },
]);
</script>

<style scoped></style>
