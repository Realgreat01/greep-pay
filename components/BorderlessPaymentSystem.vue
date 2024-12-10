<template>
  <div class="w-full bg-white">
    <UContainer class="payment-system min-h-[740px] w-full p-10">
      <div class="ml-28 flex items-center justify-between">
        <h2 class="text-2xl font-semibold">
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
        class="ziggy-lines relative ml-28 mt-36 grid h-[360px] w-[1000px] grid-cols-2 gap-x-20 gap-y-28 pl-10"
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
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const paymentInfo = ref([
  {
    title: "Accept Local and Global Currencies",
    description:
      "Let customers pay in stablecoins like USDT or their local African currencies.",
    class: "bg-[#06DB8F] -mt-14",
  },
  {
    title: "Instant Settlements",
    description:
      "Skip the wait receive payments in stablecoins or fiat immediately.",
    class: "bg-[#06DB8F] mt-8 -ml-16",
  },
  {
    title: "Low Fees , Maximum Profit",
    description:
      "Enjoy lower transaction costs compared to traditional POS systems.",
    class: "bg-[#06DB8F] -mt-10 ml-14",
  },
  {
    title: "Earn GRP Tokens",
    description:
      "Every payment processed through Greeppay earns you GRP tokens—our exclusive rewards currency.",
    class: "bg-[#06DB8F26] mt-10",
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
