<template>
  <transition name="fade">
    <div class="pizza-modal" v-if="show">
      <div class="pizza-modal__backdrop" @click="closeModal" />
      <div class="pizza-modal__row">
        <div class="pizza-modal__img">
          <img :src="pizza.imageUrl" alt="" />
        </div>
        <div class="pizza-modal__content" v-if="pizza">
          <div class="pizza-modal__header">
            <h3 class="pizza-modal__title">{{ pizza.name }}</h3>
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
          <button class="pizza-modal__btn" @click="handleAddCart(pizza)">
            Добавить в коризну за {{ pizza.price }} Р
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Types from './Types'
import Sizes from './Sizes'

export default {
  components: { Types, Sizes },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapGetters(['pizza']),
  },
  methods: {
    ...mapActions(['getPizza']),
    ...mapMutations(['getPizza', 'ADD_CART']),
    openModal() {
      this.show = true
      // this.getPizza(id)
    },
    closeModal() {
      this.show = false
    },
    handleAddCart(pizza) {
      this.ADD_CART(pizza)
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
    max-width: 924px;
    margin: 190px auto;
    border-radius: 20px;
    overflow: hidden;
    z-index: 2;
  }
  &__img {
    height: 500px;
    width: 50%;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: contain;
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
    background-color: rgb(255, 105, 0);
    border: none;
    padding: 20px 36px;
    border-radius: 30px;
    transition: 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background-color: rgb(170, 71, 0);
    }
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

@media (max-width: 768px) {
  .pizza-modal {
    overflow-x: hidden;
    overflow-y: visible;
    position: fixed;
    &__row {
      display: flex;
      flex-direction: column;
    }
    &__img {
      height: 300px;
      width: 100%;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    &__header {
      margin-bottom: 20px;
    }
    &__text {
      margin-bottom: 20px;
    }
    &__btn {
      margin-top: 30px;
    }
  }
}
@media (max-width: 768px) {
  .pizza-modal {
    top: -77px;
  }
}
</style>
