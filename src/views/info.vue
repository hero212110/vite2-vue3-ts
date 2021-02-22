<template>
  <div class="wrapper">
    <!-- <h1>info</h1>
    <p>{{ store.state }}</p> -->

    <div class="feature-wrapper">
      <div class="crud">
        <el-button @click="addData">ADD</el-button>
        <el-button @click="removeData">DELETE</el-button>
        <el-button @click="reloadData">RELOAD</el-button>
      </div>
      <div class="search">
        <el-input v-model="pattern" placeholder="请输入内容"></el-input>
      </div>
    </div>

    <el-table
      :data="filteredData"
      v-loading="loading"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { ref, toRefs, reactive, defineComponent, computed } from "vue";
import useBasicValue from "../composables/basic/useBasicValue";
import useUserData from "../composables/user/useUserData";
export default defineComponent({
  props: {},
  components: {},
  setup: () => {
    const { route, router, store } = useBasicValue();
    const data = reactive({
      pattern: "",
      loading: false,
    });

    const { userData } = useUserData();
    const addData = () => {
      userData.value.push({
        date: new Date().toDateString(),
        name: `名字${new Date().getTime()}`,
        address: "上海市普陀区金沙江路 1517 弄",
      });
    };

    const removeData = () => {
      if (userData.value.length > 0) {
        userData.value.length = userData.value.length - 1;
      }
    };

    const reloadData = () => {
      data.loading = true;
      setTimeout(() => {
        data.loading = false;
      }, 2000);
    };

    const filteredData = computed(() => {
      if (!data.pattern) {
        return userData.value;
      } else {
        let tmp = userData.value.filter((item: any) => {
          if (item.name.indexOf(data.pattern) != -1) {
            return item;
          }
        });
        return tmp;
      }
    });

    return {
      ...toRefs(data),
      route,
      router,
      store,
      userData,
      filteredData,
      addData,
      removeData,
      reloadData,
    };
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  .feature-wrapper {
    display: flex;
    width: 100%;
    padding: 10px 0;
    .crud {
      width: 70%;
      display: flex;
      justify-content: flex-start;
    }

    .search {
      width: 30%;
    }
  }

  > h1 {
    color: $color-blue;
  }
  > p {
    color: green;
  }
}
</style>
