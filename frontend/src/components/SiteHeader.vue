<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navs = [
  { path: '/', label: '首页' },
  { path: '/community', label: '用户社区' },
  { path: '/properties', label: '房源' },
  { path: '/contact', label: '联系' },
  { path: '/custom', label: '定制' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="container header-inner">
      <RouterLink to="/" class="brand">
        <span class="brand__mark">智</span>
        <span class="brand__text">
          <strong>智慧云居</strong>
          <em>SMART CLOUD RESIDENCE</em>
        </span>
      </RouterLink>

      <nav class="nav" aria-label="主导航">
        <RouterLink
          v-for="item in navs"
          :key="item.path"
          :to="item.path"
          class="nav__link"
          :class="{ 'is-active': isActive(item.path) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <RouterLink to="/contact" class="btn btn--accent header__cta">预约看房</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247, 244, 239, 0.96);
  border-bottom: 1px solid var(--line-soft);
  transition: box-shadow 0.4s var(--ease), background 0.4s var(--ease);
}

.site-header.is-scrolled {
  box-shadow: 0 8px 30px rgba(28, 27, 24, 0.06);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: 22px;
  line-height: 1;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.brand__text strong {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink);
}

.brand__text em {
  font-family: var(--font-latin);
  font-style: normal;
  font-size: 10px;
  letter-spacing: 0.32em;
  color: var(--muted);
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav__link {
  position: relative;
  font-size: 15px;
  letter-spacing: 0.12em;
  color: var(--text);
  padding: 8px 0;
  transition: color 0.3s var(--ease);
}

.nav__link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.35s var(--ease);
}

.nav__link:hover,
.nav__link.is-active {
  color: var(--ink);
  font-weight: 500;
}

.nav__link:hover::after,
.nav__link.is-active::after {
  width: 100%;
}

@media (max-width: 860px) {
  .header-inner {
    height: 64px;
  }

  .brand__text em {
    display: none;
  }

  .nav {
    gap: 16px;
  }

  .nav__link {
    font-size: 14px;
    letter-spacing: 0.06em;
  }

  .header__cta {
    display: none;
  }
}

@media (max-width: 560px) {
  .brand__mark {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  .brand__text strong {
    font-size: 16px;
  }

  .nav {
    gap: 12px;
  }

  .nav__link {
    font-size: 13px;
  }
}
</style>