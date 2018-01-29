<template>
  <div>
    <myHeader></myHeader>
    <div>
      <ul>
        <li v-for="(item,index) in list" v-bind:key="index">
          <time v-text="$utils.goodTime(item.create_at)"></time>
          <router-link :to="'/content/' + item.id">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from "../components/myHeader.vue";
import myFooter from "../components/myFooter.vue";
export default {
  components: { myHeader, myFooter },
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData() {
      this.$api.get("topics", null, r => {
        console.log(r);
        this.list = r.data;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>
