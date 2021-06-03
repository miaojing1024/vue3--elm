<template>
  <div>
    <div class="location">
      <div class="title">当前定位</div>
      <div class="des">
        <i class="fa fa-location-arrow"></i>
        <span>{{ address }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "location",
  props: {
    address: String,
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/index.styl';

.title {
  margin-top: 5px;
  font-size: 12px;
}

.des {
  padding: 10px 0;
}

.des i {
  color: $main-color;
}

.des span {
  color: #333;
  font-weight: bold;
  margin-left: 5px;
  display: inline-block;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>