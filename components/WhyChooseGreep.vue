<template>
  <div
    class="flex flex-col items-center justify-center gap-6 bg-[#000E18] py-10 text-white"
  >
    <UButton
      label="Why Choose Greep"
      class="rounded-full bg-[#00926080] !p-4 !px-6"
    />
    <h2 class="text-[32px] font-semibold">One Platform, Two Solutions</h2>
    <p class="w-1/3">
      Whether you prefer using your smartphone or ourrv dedicated POS device,
      Greeppay has you covered.
    </p>
    <div class="flex gap-x-5">
      <div
        class="xl flex w-[556px] items-center gap-x-4 rounded-2xl border-2 border-[#00926080] bg-[#0092603D] p-5 pb-0"
        v-for="data in infoData"
      >
        <div class="">
          <h2 class="text-xl font-semibold">{{ data.label }}</h2>
          <p class="mt-1 text-justify">{{ data.description }}</p>
        </div>
        <img :src="data.image" alt="" class="w-[232px]" />
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
