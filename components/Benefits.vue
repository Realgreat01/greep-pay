<template>
  <UContainer class="flex flex-col items-center gap-8 py-10 text-white lg:p-10">
    <h2 class="text-center text-xl font-semibold lg:text-2xl">
      What GreepPay Brings to Your Business
    </h2>

    <div
      class="flex flex-col items-stretch justify-between gap-10 lg:w-[70%] lg:flex-row"
    >
      <img
        src="/images/card-payment.svg"
        alt=""
        class="block rounded-lg bg-[#3D544D40] p-4"
      />

      <div class="grid gap-5">
        <div
          class="h-fit border-l-4 border-green-400 pl-4"
          v-for="benefit in benefits"
        >
          <h2 class="font-semibold lg:text-lg">{{ benefit.label }}</h2>
          <p class="text-sm lg:text-base">{{ benefit.description }}</p>
        </div>
        <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit">
          Start Accepting Payments Today
          <UButton
            icon="i-icon-arrow-north-east"
            color="black"
            class="rounded-full"
          />
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const benefits = ref([
  {
    label: "Seamless Cross-Border Payments",
    description: "Remove barriers for your African and global customers.",
  },
  {
    label: "Affordable for All Businesses",
    description: "From small vendors to large retailers, we scale with you.",
  },
  {
    label: "Fast, Reliable, and Secure",
    description:
      "Powered by blockchain, your transactions are instant and tamper-proof.",
  },
]);
</script>

<style scoped></style>
