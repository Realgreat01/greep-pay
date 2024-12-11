<template>
  <UContainer class="grid bg-white py-10 lg:grid-cols-2 lg:py-0">
    <div class="flex flex-col justify-center gap-y-4 lg:w-3/4 lg:gap-y-10">
      <h2 class="text-xl font-semibold lg:text-2xl">
        Join the Waitlist and Earn More
      </h2>
      <p class="text-base lg:text-xl">
        Don’t just process payments—turn every transaction into an opportunity.
        Greeppay gives you seamless payment solutions and rewards your growth
        with GRP tokens.
      </p>
      <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit">
        Join the Waitlist Today
        <UButton
          icon="i-icon-arrow-north-east"
          color="black"
          class="rounded-full"
        />
      </UButton>
    </div>
    <img src="/images/party.png" alt="" class="lg:max-h-[550px]" />
  </UContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
