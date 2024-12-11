<template>
  <div class="">
    <UContainer
      class="how-it-works flex h-fit w-full flex-col items-center gap-8 py-10 text-white lg:p-10"
    >
      <h2 class="text-3xl">
        How <span class="splash font-semibold"> GreepPay </span> Works
      </h2>
      <div
        class="card-container hidden rounded-2xl bg-[#36625552] py-10 ring-4 ring-[#06DB8F26] lg:block lg:w-4/5"
      >
        <div class="card-inner grid grid-cols-2 gap-10 p-5">
          <div
            class="flex w-full gap-x-2"
            v-for="step in steps"
            :class="step.class"
          >
            <img :src="step.image" alt="" class="block h-32" />
            <div class="pl-2">
              <h2 class="text-lg font-semibold">{{ step.title }}</h2>
              <ul class="ml-4 list-disc text-sm">
                <li v-for="i in step.steps">{{ i }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card-container rounded-2xl bg-[#36625552] py-10 ring-4 ring-[#06DB8F26] lg:hidden lg:w-4/5"
      >
        <div class="card-inners grid gap-10 p-5">
          <div
            class="flex w-full gap-x-2"
            v-for="step in steps.filter((x) => x.title !== '')"
            :class="step.class"
          >
            <img :src="step.image" alt="" class="block h-20" />
            <div class="pl-2">
              <h2 class="font-semibold">{{ step.title }}</h2>
              <ul class="ml-4 list-disc text-xs">
                <li v-for="i in step.steps">{{ i }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit" color="white">
        Join the Waitlist Today
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
const steps = ref([
  {
    title: "Setup Your Way",
    image: "/images/how-it-works/setup.svg",
    steps: [
      "Download our Soft POS app to get started instantly",
      "Or order a Greeppay hardware terminal for a seamless in-store experience.",
    ],
    class: "",
  },
  {
    title: "",
    image: "",
    steps: [],
    class: "invisible",
  },
  {
    title: "",
    image: "",
    steps: [],
    class: "invisible",
  },
  {
    title: "Accepts Payment Anywhere",
    image: "/images/how-it-works/payments.svg",
    steps: [
      "Customers pay using stablecoins or local fiat via QR codes, NFC, or card swipe.",
      "Greeppay converts fiat to stablecoins (and vice versa) instantly.",
    ],
    class: "lg:ml-5",
  },
  {
    title: "Earn GRP Tokens",
    image: "/images/how-it-works/token.svg",
    steps: [
      "Earn GRP tokens for every transaction you process. Redeem them for discounts, cash, or other rewards.",
    ],
    class: "",
  },
]);
</script>

<style scoped>
.how-it-works {
  background-image: url("/images/how-it-works/bg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000e18;
  background-blend-mode: hard-light;
}
.card-container {
  background-image: url("/images/how-it-works/container.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.card-inner {
  background-image: url("/images/how-it-works/ringed-lines.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
