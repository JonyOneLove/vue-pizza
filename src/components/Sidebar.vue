<template>
  <transition name="fade">
    <div class="sidebar" v-if="showSidebar">
      <div class="sidebar__backdrop" />
      <div class="sidebar__content">
        <div class="sidebar__header">
          <img width="38" src="../assets/img/pizza-logo.svg" alt="Pizza logo" />
          <h1>Vue Pizza</h1>
        </div>
        <nav class="sidebar-nav">
          <ul class="sidebar-nav__list">
            <router-link
              :to="{ name: item.route }"
              v-for="item in menu"
              :key="item.title"
              v-slot="{ route, isExactActive, navigate }"
              :custom="true"
            >
              <li
                class="sidebar-nav__item"
                :class="{ active: isExactActive }"
                @click="navigate"
              >
                <a :href="route.fullPath">{{ item.title }}</a>
                <img :src="item.icon" alt="" />
              </li>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script>
import homeIcon from '@/assets/img/home.svg'
import pizzaIcon from '@/assets/img/pizza.svg'

export default {
  props: ['showSidebar'],
  data() {
    return {
      menu: [
        {
          title: 'Главная',
          icon: homeIcon,
          route: 'Home',
        },
        {
          title: 'Пиццы',
          icon: pizzaIcon,
          route: 'Cart',
        },
        {
          title: 'Десерты',
        },
        {
          title: 'Комбо',
        },
        {
          title: 'Напитки',
        },
        {
          title: 'Корзина',
          icon: pizzaIcon,
          route: 'Cart',
        },
        {
          title: 'Админ',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.sidebar {
  padding: 110px 50px 128px 48px;
  background: #f2f2f2;
  position: fixed;
  justify-content: space-between;
  top: 0;
  width: 323px;
  left: 0;
  height: 100vh;
  z-index: 9;
  &__header {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 63px;
    h1 {
      font-size: 24px;
      line-height: 28px;
      font-weight: 900;
      margin-left: 19px;
    }
  }
}

.fade-enter-active {
  animation: fadeIn 0.5s;
}

.fade-leave-active {
  animation: fadeOut 0.5s;
}

@keyframes fadeIn {
  from {
    left: -323px;
  }
  to {
    left: 0;
  }
}

@keyframes fadeOut {
  from {
    left: 0;
  }
  to {
    left: -323px;
  }
}

.sidebar-nav {
  &__item {
    padding: 14px 15px 18px 15px;
    border-radius: 30px;
    margin-top: 21px;
    max-width: 225px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    a {
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    }
    &.active {
      background: #2c2c2c;
      a {
        color: #fff;
      }
      img {
        path {
          fill: white;
        }
      }
    }
    &:last-child {
      background: #fe5f1e;
      a {
        color: white;
      }
      &:hover {
        background: lighten(#fe5f1e, 10%);
      }
      &.activeLi {
        background: rgb(216, 69, 69);
        a {
          color: white;
        }
      }
    }
  }
}
</style>
