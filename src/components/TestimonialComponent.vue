<template>
  <blockquote
    class="inline-block min-w-full md:min-w-0 overflow-hidden bg-white border border-gray-300 p-8"
  >
    <div class="flex flex-col items-center justify-center">
      <p class="text-center leading-8 font-medium text-gray-900">{{ text }}</p>
      <div class="pt-6 pb-2">
        <g-image class="mx-auto h-10 w-10 rounded-full" :src="image" alt />
      </div>
      <div class="text-base leading-6 font-medium text-gray-900">
        {{ name }}
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  props: ["name", "text", "image"],
};
</script>
