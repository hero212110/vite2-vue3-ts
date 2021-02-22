<template>
  <div></div>
</template>

<script lang='ts'>
import { ref, toRefs, reactive, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  props: {},
  components: {},
  setup: () => {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    return { route, router, store };
  },
});

</script>
<style lang="scss" scoped>
</style>
