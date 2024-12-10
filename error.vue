<template>
  <div></div>
</template>

<script setup lang="ts">
const router = useRouter();
onBeforeMount(() => {
  return router.replace("/");
});
</script>
