<template>
  <div class="testimonial">
    <UContainer
      class="flex h-fit w-full flex-col items-center gap-8 p-10 text-white"
    >
      <h2 class="text-3xl font-semibold">
        Trusted by <span class="text-green-400">Merchants </span>Around the
        World
      </h2>

      <div class="grid grid-cols-3 gap-10">
        <UCard class="bg-[#27322F3D] ring-0" v-for="testimony in testimonials">
          <UIcon name="i-icon-quotes" class="h-12 w-12" />

          <p class="my-5">{{ testimony.testimony }}</p>

          <div class="mt-10 flex items-start justify-start gap-x-2 self-end">
            <img
              :src="testimony.image"
              alt=""
              class="block h-12 w-12 rounded-full"
            />
            <h2 class="">
              <h2 class="text-sm font-medium">{{ testimony.name }}</h2>
              <h2 class="text-xs font-light">{{ testimony.title }}</h2>
            </h2>
          </div>
        </UCard>
      </div>

      <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit" color="white">
        See More Testimonials
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
const testimonials = ref([
  {
    name: "Salawu Miriam",
    title: "Small Business Owner",
    image: "/images/testimonials/salawu.png",
    testimony:
      "Greeppay’s Soft POS helped me start accepting payments on my phone instantly, without needing expensive hardware.",
  },
  {
    name: "Kingsley Knucte",
    title: "Small Business Owner",
    image: "/images/testimonials/jackson.png",
    testimony:
      "The hardware terminal is fast, sleek, and incredibly reliable. I can now serve more customers globally with ease.",
  },
  {
    name: "Adukwu Benjamin",
    title: "Small Business Owner",
    image: "/images/testimonials/jackson.png",
    testimony:
      "The hardware terminal is fast, sleek, and incredibly reliable. I can now serve more customers globally with ease.",
  },
]);
</script>

<style scoped>
.testimonial {
  background-image: url("/images/how-it-works/bg.png");
  background-position: center;
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
</style>
