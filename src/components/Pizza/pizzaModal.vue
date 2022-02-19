<template>
  <transition name="fade">
    <div class="pizza-modal" v-if="show">
      <div class="pizza-modal__backdrop" @click="closeModal" />
      <div class="pizza-modal__row">
        <div class="pizza-modal__img">
          <img
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/b145ba5572f4445bbfb335f1a5e25d1c_292x292.jpeg"
            alt=""
          />
        </div>
        <div class="pizza-modal__content">
          <div class="pizza-modal__header">
            <h3 class="pizza-modal__title">Пепперони Фреш с перцем</h3>
          </div>
          <p class="pizza-modal__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            delectus dolores dolore officia libero, voluptate beatae placeat
            fugit aliquam error!
          </p>
          <div class="pizza-block__selector">
            <Types />
            <Sizes />
          </div>
          <button class="pizza-modal__btn">
            Добавить в коризну за {{ 1 }} Р
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Types from './Types'
import Sizes from './Sizes'

export default {
  components: { Types, Sizes },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    openModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    },
  },
}
</script>

<style lang="scss" scoped>
.pizza-modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    background-color: #ffffff;
    position: relative;
    width: 950px;
    margin: 190px auto;
    border-radius: 20px;
    overflow: hidden;
    z-index: 2;
  }
  &__img {
    padding: 90px;
    border: 1px solid red;
    img {
      object-fit: cover;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    background: rgb(252, 252, 252) none repeat scroll 0% 0%;
  }
  &__btn {
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    background: rgb(255, 105, 0);
    border: none;
    padding: 20px 36px;
    border-radius: 30px;
    cursor: pointer;
  }
}

.fade-enter-active {
  animation: fadeIn 0.3s;
}

.fade-leave-active {
  animation: fadeOut 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
