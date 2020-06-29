<template>
<div>
  <mt-header :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <mt-navbar v-model="selected" style="overflow-y: scroll;">
    <mt-tab-item style="width: 90px;flex: none;" id="1">基本信息</mt-tab-item>
    <mt-tab-item style="width: 90px;flex: none;" id="2">相关单位</mt-tab-item>
    <mt-tab-item style="width: 90px;flex: none;" id="3">申报材料</mt-tab-item>
    <mt-tab-item style="width: 90px;flex: none;" id="4">活动日程</mt-tab-item>
    <mt-tab-item style="width: 90px;flex: none;" id="5">参会人员</mt-tab-item>
    <mt-tab-item style="width: 90px;flex: none;" id="6">安保人员</mt-tab-item>
    <mt-tab-item style="width: 90px;flex: none;" id="7">涉会车辆</mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1"></mt-tab-container-item>
    <mt-tab-container-item id="2"></mt-tab-container-item>
    <mt-tab-container-item id="3"></mt-tab-container-item>
    <mt-tab-container-item id="4"></mt-tab-container-item>
    <mt-tab-container-item id="5"></mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: '',
      selected: '1'
    }
  }
}
</script>

<style scoped>

</style>
