<template>
  <div class="pizza-block">
    <div class="pizza-block__labels">
      <div class="pizza-block__label pizza-block__label_sale">-30%</div>
    </div>
    <a class="pizza-block__image" @click="nz(pizza.id)">
      <img :src="pizza.imageUrl" alt="Pizza" />
    </a>
    <div class="pizza-block__body">
      <div class="pizza-block__content">
        <h4 class="pizza-block__title">{{ pizza.name }}</h4>
      </div>
      <div class="pizza-block__selector">
        <Types />
        <Sizes />
      </div>
      <div class="pizza-block__bottom">
        <div class="pizza-block__price">от {{ pizza.price }} ₽</div>
        <div @click="handleAddCart" class="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i v-if="pizzaCount">{{ pizzaCount }}</i>
        </div>
      </div>
    </div>
    <PizzaModal ref="pizzaModal" />
  </div>
</template>

<script>
import Types from './Types'
import Sizes from './Sizes'
import { useStore } from 'vuex'
import { computed, ref } from '@vue/reactivity'
import PizzaModal from './pizzaModal.vue'
import pizzaImg from '@/assets/img/pizza-img.jpg'

export default {
  components: { Types, Sizes, PizzaModal },
  props: ['pizza'],
  setup(props) {
    const store = useStore()

    const pizzaCount = computed(() => store.getters.getPizzaCount(props.pizza))
    const handleAddCart = () => {
      store.commit('ADD_CART', props.pizza)
      console.log(props.pizza)
    }
    return { handleAddCart, pizzaCount, pizzaImg }
  },
  data() {
    return {}
  },
  methods: {
    async nz(id) {
      await this.$store.dispatch('getPizza', id)
      this.$refs.pizzaModal.openModal()
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.pizza-block {
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  overflow: hidden;
  &__labels {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    @include adaptive-value('right', 24, 10, 1);
    @include adaptive-value('top', 24, 10, 1);
  }
  &__label {
    flex: 0 0 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    &:not(:last-child) {
      margin: 0px 0px 10px 0px;
    }
    &_sale {
      background: #e97171;
    }
    &_new {
      background: #2ec1ac;
    }
  }
  &__body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
  &__content {
    flex: 1 1 auto;
  }

  &__image {
    padding: 0px 0px 260px/280px * 100% 0px;
    position: relative;
    transition: ease-in 0.2s;
    cursor: pointer;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: contain;
    }
    &:hover {
      transform: translateY(2%);
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
    cursor: pointer;
  }

  &__selector {
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;

    ul {
      display: flex;
      flex: 1;

      &:first-of-type {
        margin-bottom: 6px;
      }

      li {
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        @include noselect();
        &.active {
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          cursor: auto;
        }
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;
  }
}

@media (max-width: 799px) {
  .pizza-block {
    width: 100%;

    &:not(:nth-of-type(4n)) {
      margin-right: 0px;
    }
  }
}

@media (max-width: 1042px) {
  .pizza-block {
  }
}
</style>
