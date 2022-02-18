<template>
  <div class="empty-page">
    <h1 class="empty-page__title">Page not found <icon>😕</icon></h1>
    <h1 class="empty-page__title">404</h1>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <!-- <img :src="emptyCart" alt="Empty cart" /> -->
    <router-link :to="{ name: 'Home' }" class="button button--black">
      <span>Вернуться на главную</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.empty-page {
  padding: 100px 0 290px;
  text-align: center;
}

.empty-page > *:not(:last-child) {
  margin-bottom: 25px;
}
</style>
