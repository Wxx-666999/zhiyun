<script setup>
const navs = [
  { path: '/', label: '首页' },
  { path: '/community', label: '用户社区' },
  { path: '/properties', label: '房源' },
  { path: '/contact', label: '联系' },
  { path: '/custom', label: '定制' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <span class="footer-brand__mark">智</span>
        <div>
          <strong>智慧云居</strong>
          <em>SMART CLOUD RESIDENCE</em>
        </div>
        <p>以科技与人文相融的营造理念，为都市菁英打造安全、舒适、雅致的高品质公寓社区。</p>
      </div>

      <div class="footer-col">
        <h4>网站导航</h4>
        <ul>
          <li v-for="item in navs" :key="item.path">
            <RouterLink :to="item.path">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>联系我们</h4>
        <ul>
          <li>服务热线：400-888-6688</li>
          <li>咨询邮箱：hello@zhuyun.life</li>
          <li>体验中心：滨江区云栖大道 88 号</li>
          <li>营业时间：每日 9:00 - 21:00</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>关注我们</h4>
        <ul>
          <li>微信公众号：智慧云居</li>
          <li>官方微博：@智慧云居</li>
          <li>视频号：智慧云居</li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© 2026 智慧云居 版权所有</span>
      <span>浙ICP备2026000000号-1（示例）</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--ink);
  color: rgba(255, 255, 255, 0.72);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 48px;
  padding: 72px 28px 56px;
}

.footer-brand__mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--accent-soft);
  color: var(--accent-soft);
  font-family: var(--font-serif);
  font-size: 22px;
  margin-bottom: 16px;
}

.footer-brand strong {
  display: block;
  font-size: 20px;
  letter-spacing: 0.18em;
  color: #fff;
  font-weight: 600;
}

.footer-brand em {
  display: block;
  font-family: var(--font-latin);
  font-style: normal;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 4px;
}

.footer-brand p {
  margin-top: 18px;
  max-width: 34ch;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.footer-col h4 {
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #fff;
  font-weight: 500;
  margin-bottom: 22px;
}

.footer-col ul li {
  font-size: 14px;
  line-height: 2.3;
  color: rgba(255, 255, 255, 0.58);
}

.footer-col a {
  transition: color 0.3s var(--ease);
}

.footer-col a:hover {
  color: var(--accent-soft);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 28px;
  padding-bottom: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 980px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer-grid {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
}
</style>