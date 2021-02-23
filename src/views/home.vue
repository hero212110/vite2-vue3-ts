<template>
  <div>
    <el-row>
      <el-col :lg="12"> <p>home</p></el-col>
      <el-col :lg="12">
        <el-button type="primary" @click="router.push('/info')">
          Element UI
        </el-button>
      </el-col>
    </el-row>
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
    const route = useRoute();
    const router = useRouter();
    const count = ref(0);
    return { route, router, count };
  },
});
</script>
