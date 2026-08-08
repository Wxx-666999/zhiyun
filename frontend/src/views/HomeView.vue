<script setup>
// 首页展示数据（示例内容，非真实房源/新闻）
const heroStats = [
  { num: '12,000+', label: '服务公寓套数' },
  { num: '1,000+', label: '智能覆盖楼栋' },
  { num: '98%', label: '业主满意度' },
  { num: '15+', label: '城市布局' },
]

const pillars = [
  { no: '01', title: '品质营造', desc: '严选建材与精工工艺，从空间尺度到光影细节，以克制而考究的设计，营造历久弥新的居住质感。' },
  { no: '02', title: '智慧运维', desc: '人脸识别、智能门锁、全屋互联与能耗管理一体化，让科技隐形于日常，安全与便捷自然发生。' },
  { no: '03', title: '温度服务', desc: '专属管家 7×24 小时响应，从入住到日常维护，以有温度的服务回应每一位家人的需求。' },
]

const whys = [
  { title: '城市核心地段', desc: '布局城市 CBD、高新产业区与人文老城，通勤高效，生活配套成熟。' },
  { title: '真材实料交付', desc: '全屋精装标准统一，材料可溯源，交付前逐项验收。' },
  { title: '科技赋能生活', desc: '全屋智能与社区物联一体，安全、能耗、服务全部可视化。' },
  { title: '运营体系成熟', desc: '十余年公寓运营经验，从租务到服务形成标准化的闭环。' },
]

const properties = [
  {
    name: '云栖公馆',
    location: '滨江区 · 云栖大道',
    type: '两居 · 89㎡',
    price: '¥8,800/月',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: '澜庭雅苑',
    location: '高新区 · 科技大道',
    type: '三居 · 126㎡',
    price: '¥12,600/月',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: '华庭壹号',
    location: '老城区 · 梧桐里',
    type: '四居 · 168㎡',
    price: '¥18,800/月',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
  },
]

const locations = [
  { title: '轨道交通', desc: '多数项目步行 5 分钟可达地铁站，主干路网快速通达全城。' },
  { title: '商圈配套', desc: '周边覆盖大型购物中心、精品超市与特色餐饮街区。' },
  { title: '教育资源', desc: '邻近重点中小学与高校，为家庭生活提供更多可能。' },
  { title: '医疗健康', desc: '三甲医院与社区诊所就近可达，健康更有保障。' },
]

const smartFeatures = [
  { title: '无感通行', desc: '人脸识别门禁与电梯联动，访客授权远程开启' },
  { title: '全屋互联', desc: '灯光、窗帘、空调、安防一键场景化控制' },
  { title: '恒温恒湿', desc: '中央新风与地暖联动，四季如春的体感' },
  { title: '能耗智管', desc: '水电气能耗实时可视，账单清晰透明' },
]

const services = [
  { title: '专属管家', desc: '一对一管家，7×24 小时响应' },
  { title: '24 小时安保', desc: '人脸布控与安保巡更双保险' },
  { title: '智能维修', desc: '线上报修，30 分钟上门' },
  { title: '保洁养护', desc: '定期深度保洁与空间养护' },
  { title: '快递代收', desc: '智能快递柜与前台代收' },
  { title: '健康关怀', desc: '义诊、体检与心理健康服务' },
]

const steps = [
  { no: '01', title: '预约到访', desc: '线上预约或电话预约，专属顾问一对一接待' },
  { no: '02', title: '实地看房', desc: '亲临社区，感受空间、光照与周边配套' },
  { no: '03', title: '签约入住', desc: '标准合同、透明条款，全程指引办理' },
  { no: '04', title: '智能交付', desc: '门禁授权、设备调试，拎包即住' },
  { no: '05', title: '专属服务', desc: '管家服务与社区运营，持续陪伴日常' },
]

const news = [
  { date: '2026.07.28', tag: '集团动态', title: '智慧云居与多家头部物业达成战略合作', desc: '双方将围绕智慧社区运营展开深度合作，共同推动行业服务标准升级。' },
  { date: '2026.06.15', tag: '项目动态', title: '云栖公馆二期正式开放预约', desc: '二期新品以更大户型与更优景观面亮相，即日起接受预约到访。' },
  { date: '2026.05.20', tag: '社区升级', title: '社区智能安防系统全面升级', desc: '新增高空抛物监测与电动车入梯预警，安全守护再进一步。' },
]
</script>

<template>
  <div class="home">
    <!-- ===== 首屏 ===== -->
    <section class="hero">
      <div
        class="hero__bg"
        :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80)' }"
      ></div>
      <div class="hero__veil"></div>
      <div class="container hero__inner">
        <p class="hero__eyebrow">SMART CLOUD RESIDENCE · 高端智能公寓社区</p>
        <h1 class="hero__title">居于云端，安享智慧生活</h1>
        <p class="hero__lead">
          智慧云居以科技与人文相融的营造理念，为都市菁英打造安全、舒适、雅致的高品质公寓社区，让每一次归家，都是一场身心的安放。
        </p>
        <div class="hero__actions">
          <RouterLink to="/properties" class="btn btn--accent">浏览房源</RouterLink>
          <RouterLink to="/custom" class="btn btn--ghost">定制理想家</RouterLink>
        </div>
      </div>

      <div class="hero__strip-wrap">
        <div class="container">
          <ul class="hero__strip">
            <li v-for="item in heroStats" :key="item.label">
              <strong>{{ item.num }}</strong>
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===== 品牌理念 ===== -->
    <section class="section">
      <div class="container split">
        <div class="split__intro">
          <p class="eyebrow">BRAND PHILOSOPHY · 品牌理念</p>
          <h2 class="display">让居住回归本真，<br />让生活从容发生</h2>
          <p class="split__text">
            我们相信，好的住宅不止于空间与功能，更关乎日复一日的体验。智慧云居以「品质、智慧、温度」为营造准则，在城市核心地段，构建有归属感的现代社区。
          </p>
          <RouterLink to="/community" class="more-link">了解社区生活 →</RouterLink>
        </div>

        <ol class="split__list">
          <li v-for="p in pillars" :key="p.no" class="pillar">
            <span class="pillar__no">{{ p.no }}</span>
            <div>
              <h3 class="pillar__title">{{ p.title }}</h3>
              <p class="pillar__desc">{{ p.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ===== 为什么选择我们 ===== -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">WHY US · 为什么选择我们</p>
          <h2 class="display">选择智慧云居的四个理由</h2>
        </div>
        <div class="why-grid">
          <article v-for="w in whys" :key="w.title" class="why-card">
            <h3 class="why-card__title">{{ w.title }}</h3>
            <p class="why-card__desc">{{ w.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== 精选房源 ===== -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">SELECTED RESIDENCES · 精选房源</p>
          <h2 class="display">从一居到四居，总有一处安放理想</h2>
        </div>

        <div class="prop-grid">
          <article v-for="p in properties" :key="p.name" class="prop-card">
            <div class="prop-card__media">
              <img :src="p.image" :alt="p.name" loading="lazy" />
            </div>
            <div class="prop-card__body">
              <h3 class="prop-card__name">{{ p.name }}</h3>
              <p class="prop-card__meta">{{ p.location }} · {{ p.type }}</p>
              <p class="prop-card__price">{{ p.price }}</p>
              <RouterLink to="/properties" class="more-link">查看详情 →</RouterLink>
            </div>
          </article>
        </div>

        <div class="prop-more">
          <RouterLink to="/properties" class="btn btn--line">查看全部房源</RouterLink>
        </div>
      </div>
    </section>

    <!-- ===== 区位优势 ===== -->
    <section class="section section--deep">
      <div class="container split split--reverse">
        <div class="split__media">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="智慧云居城市布局"
            loading="lazy"
          />
        </div>
        <div class="split__intro">
          <p class="eyebrow">LOCATION · 区位优势</p>
          <h2 class="display">择址城市核心，<br />把时间留给生活</h2>
          <p class="split__text">
            智慧云居坚持在城市成熟板块布局，让通勤更短、配套更近、生活更从容。
          </p>
          <ul class="loc-list">
            <li v-for="l in locations" :key="l.title" class="loc">
              <h3 class="loc__title">{{ l.title }}</h3>
              <p class="loc__desc">{{ l.desc }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===== 社区生活 ===== -->
    <section class="section">
      <div class="container split">
        <div class="split__media">
          <img
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
            alt="智慧云居社区公共空间"
            loading="lazy"
          />
        </div>
        <div class="split__intro">
          <p class="eyebrow">COMMUNITY LIFE · 社区生活</p>
          <h2 class="display">邻里相知，生活有温</h2>
          <p class="split__text">
            社区不止是居住的集合，更是生活方式的共同体。共享书吧、健身空间、儿童天地与四季活动，让邻里在互动中彼此熟识，让社区保有持久的温度。
          </p>
          <ul class="check-list">
            <li>共享书吧与轻办公空间</li>
            <li>健身房、瑜伽室与儿童天地</li>
            <li>四季主题社区活动</li>
            <li>24 小时安全巡更与管家值守</li>
          </ul>
          <RouterLink to="/community" class="more-link">进入用户社区 →</RouterLink>
        </div>
      </div>
    </section>

    <!-- ===== 智能科技 ===== -->
    <section class="section section--ink">
      <div class="container split">
        <div class="split__intro">
          <p class="eyebrow">SMART LIVING · 智慧科技</p>
          <h2 class="display">科技隐于日常，<br />安心无处不在</h2>
          <p class="split__text">
            以自研智慧社区平台为底座，将安全、舒适与便捷融入生活的每一处细节。少一些操作，多一份从容。
          </p>
        </div>
        <ul class="feature-grid">
          <li v-for="f in smartFeatures" :key="f.title" class="feature">
            <h3 class="feature__title">{{ f.title }}</h3>
            <p class="feature__desc">{{ f.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- ===== 物业服务 ===== -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">CONCIERGE · 物业服务</p>
          <h2 class="display">六项基础服务，随时在身边</h2>
        </div>
        <ul class="service-grid">
          <li v-for="s in services" :key="s.title" class="service">
            <h3 class="service__title">{{ s.title }}</h3>
            <p class="service__desc">{{ s.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- ===== 服务流程 ===== -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">OUR SERVICE · 服务流程</p>
          <h2 class="display">五步入住，全程省心</h2>
        </div>
        <ol class="steps">
          <li v-for="s in steps" :key="s.no" class="step">
            <span class="step__no">{{ s.no }}</span>
            <h3 class="step__title">{{ s.title }}</h3>
            <p class="step__desc">{{ s.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ===== 新闻资讯 ===== -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">NEWS · 新闻资讯</p>
          <h2 class="display">了解智慧云居最新动态</h2>
        </div>
        <div class="news-grid">
          <article v-for="n in news" :key="n.title" class="news-card">
            <span class="news-card__tag">{{ n.tag }}</span>
            <h3 class="news-card__title">{{ n.title }}</h3>
            <p class="news-card__desc">{{ n.desc }}</p>
            <span class="news-card__date">{{ n.date }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="cta-band__title">开启您的<em>智慧云居</em>生活</h2>
          <p class="cta-band__desc">预约实地看房，或告诉我们您理想中的家，专属顾问将为您提供一对一服务。</p>
        </div>
        <div class="cta-band__actions">
          <RouterLink to="/contact" class="btn btn--accent">预约看房</RouterLink>
          <RouterLink to="/custom" class="btn btn--ghost">定制理想家</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- 首屏 ---------- */
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(28, 27, 24, 0.28) 0%, rgba(28, 27, 24, 0.55) 55%, rgba(28, 27, 24, 0.82) 100%);
}

.hero__inner {
  position: relative;
  padding: 120px 28px 40px;
}

.hero__eyebrow {
  font-family: var(--font-latin);
  font-size: 13px;
  letter-spacing: 0.4em;
  color: var(--accent-soft);
  text-transform: uppercase;
}

.hero__title {
  margin-top: 22px;
  font-size: clamp(38px, 6vw, 68px);
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1.25;
  text-shadow: 0 2px 24px rgba(28, 27, 24, 0.3);
}

.hero__lead {
  margin-top: 24px;
  max-width: 52ch;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
}

.hero__actions {
  margin-top: 40px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.hero__strip-wrap {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.hero__strip {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  padding: 34px 0;
}

.hero__strip li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero__strip strong {
  font-family: var(--font-latin);
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.02em;
}

.hero__strip span {
  font-size: 13px;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.6);
}

/* ---------- 通用分栏 ---------- */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.split--reverse .split__media {
  order: 2;
}

.split__text {
  margin-top: 22px;
  color: var(--muted);
  max-width: 52ch;
}

.split__intro .more-link {
  margin-top: 30px;
}

.split__media img {
  width: 100%;
  height: 100%;
  min-height: 380px;
  object-fit: cover;
}

/* ---------- 品牌理念 ---------- */
.split__list {
  border-top: 1px solid var(--line);
}

.pillar {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 20px;
  padding: 34px 0;
  border-bottom: 1px solid var(--line);
}

.pillar__no {
  font-family: var(--font-latin);
  font-size: 22px;
  color: var(--accent);
  line-height: 1.2;
}

.pillar__title {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.pillar__desc {
  margin-top: 10px;
  color: var(--muted);
  font-size: 14px;
  max-width: 48ch;
}

/* ---------- 为什么选择我们 ---------- */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.why-card {
  background: #ffffff;
  padding: 42px 34px;
  transition: background 0.4s var(--ease);
}

.why-card:hover {
  background: var(--paper-deep);
}

.why-card__title {
  position: relative;
  padding-top: 18px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.why-card__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--accent);
}

.why-card__desc {
  margin-top: 14px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* ---------- 精选房源 ---------- */
.prop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.prop-card {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  box-shadow: var(--shadow-sm);
}

.prop-card__media {
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.prop-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s var(--ease);
}

.prop-card:hover .prop-card__media img {
  transform: scale(1.05);
}

.prop-card__body {
  padding: 26px 28px 30px;
}

.prop-card__name {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.prop-card__meta {
  margin-top: 8px;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.prop-card__price {
  margin: 18px 0 20px;
  font-family: var(--font-latin);
  font-size: 22px;
  color: var(--accent);
}

.prop-more {
  margin-top: 48px;
  text-align: center;
}

/* ---------- 区位优势 ---------- */
.loc-list {
  margin-top: 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px 32px;
}

.loc__title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.loc__title::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 1px solid var(--accent);
  margin-right: 10px;
  vertical-align: 1px;
}

.loc__desc {
  margin-top: 8px;
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.8;
}

/* ---------- 社区生活 ---------- */
.check-list {
  margin-top: 26px;
  display: grid;
  gap: 12px;
}

.check-list li {
  position: relative;
  padding-left: 26px;
  color: var(--ink-soft);
  font-size: 15px;
}

.check-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 10px;
  height: 10px;
  border: 1px solid var(--accent);
}

/* ---------- 智能科技 ---------- */
.section--ink .split__text {
  color: rgba(255, 255, 255, 0.6);
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature {
  background: var(--ink);
  padding: 34px 32px;
}

.feature__title {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #fff;
}

.feature__title::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: var(--accent);
  margin-bottom: 16px;
}

.feature__desc {
  margin-top: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
}

/* ---------- 物业服务 ---------- */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.service {
  background: #ffffff;
  padding: 36px 34px;
  transition: background 0.4s var(--ease);
}

.service:hover {
  background: var(--paper-deep);
}

.service__title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.service__title::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 1px solid var(--accent);
  margin-right: 10px;
  vertical-align: 1px;
}

.service__desc {
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--muted);
}

/* ---------- 服务流程 ---------- */
.steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.step {
  padding-top: 24px;
  border-top: 2px solid var(--accent);
}

.step__no {
  font-family: var(--font-latin);
  font-size: 20px;
  color: var(--accent);
}

.step__title {
  margin-top: 14px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.step__desc {
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--muted);
  line-height: 1.8;
}

/* ---------- 新闻资讯 ---------- */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.news-card {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 34px 34px 32px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.4s var(--ease);
}

.news-card:hover {
  box-shadow: var(--shadow-md);
}

.news-card__tag {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.16em;
}

.news-card__title {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.06em;
  line-height: 1.5;
  color: var(--ink);
}

.news-card__desc {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

.news-card__date {
  display: block;
  margin-top: 20px;
  font-family: var(--font-latin);
  font-size: 13px;
  color: var(--muted);
  letter-spacing: 0.08em;
}

/* ---------- 响应式 ---------- */
@media (max-width: 980px) {
  .split {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .split--reverse .split__media {
    order: 0;
  }

  .prop-grid,
  .why-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }

  .service-grid {
    grid-template-columns: 1fr 1fr;
  }

  .steps {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .hero__inner {
    padding-top: 80px;
  }

  .hero__strip {
    gap: 28px;
  }

  .feature-grid,
  .service-grid,
  .steps,
  .loc-list {
    grid-template-columns: 1fr;
  }
}
</style>