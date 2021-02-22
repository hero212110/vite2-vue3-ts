<template>
  <div>
    <p>home</p>
    <el-button type="primary" @click="router.push('/info')">
      Element UI
    </el-button>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup: () => {
    const route = useRoute(); // 相當於 vue2 中的 this.$route
    const router = useRouter(); // 相當於 vue2 中的 this.$router
    const count = ref(0);
    return { route, router, count };
  },
});
</script>
