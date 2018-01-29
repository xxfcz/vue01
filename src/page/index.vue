<template>
  <div>
    <Header></Header>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
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
