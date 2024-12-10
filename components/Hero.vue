<template>
  <div class="hero">
    <Header />
    <UContainer>
      <div class="relative flex justify-center gap-10 pt-20 lg:min-h-[600px]">
        <div
          class="flex w-fit max-w-[578px] flex-col gap-5 text-white lg:mt-[120px]"
        >
          <UButton
            class="h-12 w-fit rounded-full bg-[#00926026] !p-4 font-normal italic"
            :ui="{
              rounded: 'rounded-full',
            }"
            label="🔥 Pay with African Currencies anywhere"
            block
          />
          <h1 class="text-4xl font-bold leading-[64px] lg:text-[64px]">
            Get Paid and Earn Rewards with
            <span class="greep-pay">
              Greep<span class="text-green-400">Pay &nbsp; &nbsp;</span>
            </span>
          </h1>
          <h2 class="text-gray-400">
            Accept African currencies and stablecoins like USDT while earning
            GRP tokens every time you process a payment. Join our waitlist and
            be part of the future of borderless payments!
          </h2>

          <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit">
            Join the Waitlist Now

            <UButton
              icon="i-icon-arrow-north-east"
              color="black"
              class="rounded-full"
            />
          </UButton>
        </div>
        <img src="/images/greep-pos.png" alt="" class="h-[635px]" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  background-image: url("/images/hero.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.greep-pay {
  position: relative;
  background-image: url("/images/spiral.svg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-size: 85%;
  background-origin: content-box;
  z-index: 10;
}
</style>
