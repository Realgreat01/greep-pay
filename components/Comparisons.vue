<template>
  <div class="">
    <UContainer
      class="flex flex-col items-center gap-8 bg-black py-5 text-white lg:p-10 lg:py-10"
    >
      <h2 class="text-2xl font-semibold">Soft POS vs. Hardware POS</h2>

      <div class="grid gap-1 lg:w-3/4">
        <div
          class="grid grid-cols-3 gap-2 rounded-lg p-4 text-xs lg:text-sm lg:font-semibold"
          :class="[index % 2 === 0 ? 'bg-[#3D544D80]' : 'bg-[#3D544D40]']"
          v-for="(feature, index) in features"
        >
          <h2 class="flex items-center justify-start gap-x-2">
            <UIcon :name="feature.icon" /> {{ feature.label }}
          </h2>
          <h2 class="">{{ feature.software }}</h2>
          <h2 class="">{{ feature.hardware }}</h2>
        </div>
      </div>
      <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit">
        Choose Your Solution
        <UButton
          icon="i-icon-arrow-north-east"
          color="black"
          class="rounded-full"
        />
      </UButton>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const features = ref([
  {
    label: "Features",
    icon: "i-icon-star",
    software: "Soft POS (Mobile App)",
    hardware: "Hardware POS (Termina)",
  },
  {
    label: "Setup Time",
    icon: "i-icon-clock",
    software: "Instant",
    hardware: "Shipped and ready to use",
  },
  {
    label: "Best for",
    icon: "i-icon-security",
    software: "Mobile & small businesses",
    hardware: "High-volume & in-store sales",
  },
  {
    label: "Payment",
    icon: "i-icon-wifi",
    software: "QR codes, NFC, digital wallets",
    hardware: "QR codes, NFC, swipe & chip",
  },
  {
    label: "Cost",
    icon: "i-icon-cash-bag",
    software: "Free App",
    hardware: "Affordable one-time device fee",
  },
]);
</script>

<style scoped></style>
