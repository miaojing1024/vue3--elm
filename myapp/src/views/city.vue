<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_value" type="text" placeholder="输入城市名" />
      </div>
      <button
        @click="$router.push({ name: 'Address', params: { city: city } })"
      >
        取消
      </button>
    </div>
    <div style="height: 100%" v-if="searchList.length == 0">
      <div class="location">
        <Location :address="city" @click="selectCity({ name: city })" />
      </div>
      <Alphabet
        @selectCity="selectCity"
        ref="allcity"
        :cityInfo="cityInfo"
        :keys="keys"
      />
    </div>
    <div class="search_list" v-else>
      <ul>
        <li
          @click="selectCity(item)"
          v-for="(item, index) in searchList"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Location from "../components/Location";
import Alphabet from "../components/Alphabet";
export default {
  name: "city",
  components: {
    Location,
    Alphabet,
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },
  data() {
    return {
      city_value: "",
      cityInfo: null,
      keys: [],
      allCities: [], // 接收所需要的所有数据的city名
      searchList: [], // 存放搜索关键字对应的城市名
    };
  },
  watch: {
    city_value() {
      console.log(this.city_value);
      this.searchCity();
    },
  },
  created() {
    // this.getCityInfo();
    this.mockData(); // 模拟请求到的数据
  },
  methods: {
    getCityInfo() {
      this.$axios("/api/posts/cities")
        .then((res) => {
          console.log(res.data);
          // 接口成功获取数据 可惜俺的接口没有接口
          this.cityInfo = res.data; // 获取的数据为keys对应的热门数据为JSON
          // 处理计算key
          this.keys = Object.keys(res.data);
          // 将key中的后台cities这个可以移除掉
          this.keys.pop();
          // 对keys排序 排出来的为A-Z的数组
          this.keys.sort();
          // 请求完后调用better-scroll
          this.$nextTick(() => {
            this.$refs.allcity.initScroll();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectCity(city) {
      this.$router.push({ name: "Address", params: { city: city.name } });
    },
    mockData() {
      // 模拟数据
      this.cityInfo = {
        A: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        B: [
          { name: "宝鸡", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        C: [
          { name: "成都", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        D: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        E: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        F: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        G: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        H: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        I: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        J: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        K: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        L: [
          { name: "兰州", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        M: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        N: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        O: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        P: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        Q: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        R: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        S: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        T: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        U: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        V: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        W: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        X: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        Y: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        Z: [
          { name: "安康", id: 1, abbr: "XA" },
          { name: "安徽", id: 1, abbr: "XA" },
        ],
        hotCities: [
          { name: "西安", id: 1, abbr: "XA" },
          { name: "成都", id: 2, abbr: "CD" },
          { name: "北京", id: 3, abbr: "BJ" },
          { name: "上海", id: 4, abbr: "SH" },
        ],
      };
      // 模拟数据
      this.keys = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      // 请求完后调用better-scroll
      this.$nextTick(() => {
        this.$refs.allcity.initScroll();
      });
      // 关键字对应显示数据
      /// 存储所有城市,用来搜索遍历
      this.keys.forEach((element) => {
        this.cityInfo[element].forEach((city) => {
          this.allCities.push(city);
        });
      });
    },
    searchCity() {
      console.log(this.city_value);
      if (!this.city_value) {
        // 如果搜索框为空,数组置空
        this.searchList = [];
      } else {
        // 根据输入框的关键字检索城市 并存入到searchList数组
        this.searchList = this.allCities.filter((item) => {
          return item.name.indexOf(this.city_value) != -1;
        });
        console.log(this.searchList);
      }
    },
  },
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  border: none;
  background: #fff;
  color: #009eef;
}
.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}
.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>