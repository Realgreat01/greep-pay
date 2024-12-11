<template>
  <UContainer class="sticky top-10 z-50 w-full">
    <div
      block
      class="top-4 flex items-center justify-between rounded-full border border-[#F1F1F3A3] bg-[#FCFCFD40] p-2"
    >
      <img src="/greep-logo-name.svg" alt="" class="" />

      <UButton :ui="{ rounded: 'rounded-full' }" class="w-fit">
        Get Started
        <UButton
          icon="i-icon-arrow-north-east"
          color="black"
          class="rounded-full"
        />
      </UButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
