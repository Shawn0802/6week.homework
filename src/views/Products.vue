<template>
  <div class="about">
    <h1>前台產品列表頁面</h1>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>
          <router-link :to="`/product/${item.id}`">看產品</router-link> <!--帶入item.id進入單一產品頁面-->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created () {
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products` // 查看單一產品細節ajax
    this.$http.get(url)
      .then((res) => {
        console.log(res)
        this.products = res.data.data
      })
  }
}
</script>
