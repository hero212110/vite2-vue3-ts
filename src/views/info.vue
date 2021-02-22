<template>
  <div class="wrapper">
    <!-- <h1>info</h1> -->
    <!-- <p>{{ store.state.count }}</p> -->
    <div class="feature-wrapper">
      <div class="crud">
        <el-button type="success" @click="dialog = true">ADD</el-button>
        <el-button type="danger" @click="removeData">DELETE</el-button>
        <el-button type="primary" @click="reloadData">RELOAD</el-button>
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

    <el-dialog v-model="dialog" width="30%">
      <el-form>
        <el-form-item label="名称" prop="name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addData">新增</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import {
  ref,
  toRefs,
  reactive,
  defineComponent,
  computed,
  onMounted,
} from "vue";
import useBasicValue from "../composables/basic/useBasicValue";
import UserService from "../service/mock/user";
export default defineComponent({
  props: {},
  components: {},
  setup: () => {
    const { route, router, store } = useBasicValue();
    const data = reactive({
      pattern: "",
      loading: false,
      dialog: false,
      name: null,
      address: null,
    });
    onMounted(() => {
      userData.value = UserService.getUserData();
    });

    let userData: any = ref([]);

    const addData = () => {
      userData.value.push({
        date: new Date().toDateString(),
        name: data.name ?? "未輸入",
        address: data.address ?? "未輸入",
      });
      ResetForm();
      data.dialog = false;
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

    const ResetForm = () => {
      data.name = null;
      data.address = null;
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
    flex-wrap: wrap;
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
