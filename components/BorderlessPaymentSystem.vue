<template>
  <div class="w-full bg-white">
    <UContainer class="payment-system min-h-[740px] w-full py-10 lg:p-10">
      <div
        class="flex flex-col items-center justify-center gap-6 lg:ml-28 lg:flex-row lg:justify-between"
      >
        <h2 class="text-center text-xl font-semibold lg:text-left lg:text-2xl">
          Borderless Payments for <span class="splash">African Merchants</span>
        </h2>
        <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit">
          Learn more about GRP rewards
          <UButton
            icon="i-icon-arrow-north-east"
            color="black"
            class="rounded-full"
          />
        </UButton>
      </div>

      <div
        class="ziggy-lines relative ml-28 mt-36 hidden h-[360px] w-[1000px] grid-cols-2 gap-x-20 gap-y-28 pl-10 lg:grid"
      >
        <UCard
          :class="info.class"
          class="h-[104px] w-[365px] ring-2 ring-[#009260]"
          v-for="info in paymentInfo"
        >
          <h2 class="text-sm font-semibold">{{ info.title }}</h2>
          <p class="text-xs">{{ info.description }}</p>
        </UCard>
        <h2 class="absolute bottom-[100px] right-0 text-xl font-semibold">
          Seamless Payments, <span class="splash">Extra Rewards</span>
        </h2>
      </div>

      <!-- Small Screen -->
      <div class="ziggy-line relative my-10 grid gap-5 lg:hidden">
        <UCard
          :class="info.class"
          class="h-[104px] w-[365px] ring-2 ring-[#009260]"
          v-for="info in paymentInfo"
        >
          <h2 class="text-sm font-semibold">{{ info.title }}</h2>
          <p class="text-xs">{{ info.description }}</p>
        </UCard>
        <h2 class="mt-[20px] text-xl font-semibold">
          Seamless Payments, <span class="splash">Extra Rewards</span>
        </h2>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const paymentInfo = ref([
  {
    title: "Accept Local and Global Currencies",
    description:
      "Let customers pay in stablecoins like USDT or their local African currencies.",
    class: "bg-[#06DB8F] lg:-mt-14",
  },
  {
    title: "Instant Settlements",
    description:
      "Skip the wait receive payments in stablecoins or fiat immediately.",
    class: "bg-[#06DB8F] lg:mt-8 lg:-ml-16",
  },
  {
    title: "Low Fees , Maximum Profit",
    description:
      "Enjoy lower transaction costs compared to traditional POS systems.",
    class: "bg-[#06DB8F] lg:-mt-10 lg:ml-14",
  },
  {
    title: "Earn GRP Tokens",
    description:
      "Every payment processed through Greeppay earns you GRP tokens—our exclusive rewards currency.",
    class: "bg-[#06DB8F26] lg:mt-10",
  },
]);
</script>

<style scoped>
.payment-system {
  background-image: url("/images/world-map.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.ziggy-lines {
  background-image: url("/images/zig-lines.svg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
