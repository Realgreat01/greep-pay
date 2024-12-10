<template>
  <UContainer class="grid grid-cols-2 bg-white">
    <div class="flex w-3/4 flex-col justify-center gap-y-10">
      <h2 class="text-2xl font-semibold">Join the Waitlist and Earn More</h2>
      <p class="text-xl">
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
    <img src="/images/party.png" alt="" class="h-[550px]" />
  </UContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
