<script setup>
import { ref, computed } from 'vue'

// 房源展示数据（示例内容，非真实房源）
const allProperties = [
  { name: '云栖公馆', area: '滨江区', type: '两居', size: '89㎡', price: '¥8,800/月', tag: '人气', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80' },
  { name: '澜庭雅苑', area: '高新区', type: '三居', size: '126㎡', price: '¥12,600/月', tag: '推荐', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80' },
  { name: '华庭壹号', area: '老城区', type: '四居', size: '168㎡', price: '¥18,800/月', tag: '臻品', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80' },
  { name: '云端壹号', area: '高新区', type: '一居', size: '52㎡', price: '¥5,200/月', tag: '优选', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80' },
  { name: '栖霞雅居', area: '老城区', type: '两居', size: '96㎡', price: '¥9,600/月', tag: '新上', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80' },
  { name: '山语墅', area: '近郊', type: '四居', size: '215㎡', price: '¥26,000/月', tag: '墅质', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80' },
  { name: '星海公寓', area: '滨江区', type: '一居', size: '58㎡', price: '¥5,800/月', tag: '特惠', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80' },
  { name: '云谷国际', area: '高新区', type: '两居', size: '102㎡', price: '¥10,200/月', tag: '新盘', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80' },
  { name: '梧桐里', area: '老城区', type: '三居', size: '138㎡', price: '¥14,500/月', tag: '人文', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80' },
]

const areaOptions = ['全部', '滨江区', '高新区', '老城区', '近郊']
const typeOptions = ['全部户型', '一居', '两居', '三居', '四居']

const activeArea = ref('全部')
const activeType = ref('全部户型')

const filtered = computed(() =>
  allProperties.filter((p) => {
    const matchArea = activeArea.value === '全部' || p.area === activeArea.value
    const matchType = activeType.value === '全部户型' || p.type === activeType.value
    return matchArea && matchType
  }),
)

const surroundings = [
  { title: '轨道交通', desc: '步行 3-8 分钟可达地铁站，多线换乘便捷' },
  { title: '商业配套', desc: '大型购物中心、精品超市与特色街区环绕' },
  { title: '教育资源', desc: '幼儿园至高校一站式覆盖，就近入学' },
  { title: '医疗健康', desc: '三甲医院与社区诊所近在咫尺' },
]

const rentSteps = [
  { no: '01', title: '线上选房', desc: '按区域、户型与预算筛选心仪房源' },
  { no: '02', title: '预约看房', desc: '实地考察空间与周边环境' },
  { no: '03', title: '资质核验', desc: '在线提交资料，快速完成资质审核' },
  { no: '04', title: '签约缴费', desc: '电子签约，押金租金线上缴纳' },
  { no: '05', title: '拎包入住', desc: '门禁授权与设备调试，当日入住' },
]

const rentalFaqs = [
  { q: '租金如何支付？', a: '支持押一付一、押一付三等多种方式，线上支付安全便捷，续租享老客户优惠。' },
  { q: '水电燃气如何计费？', a: '水电气按表计量，费用透明可查；部分房源含基础物业费，以合同为准。' },
  { q: '可以养宠物吗？', a: '不同项目政策不同，请在签约前与顾问确认，部分社区设有宠物友好楼层。' },
  { q: '转租或提前退租怎么办？', a: '支持正规转租流程，提前退租按合同条款执行，管家将全程协助办理。' },
  { q: '企业批量租房有优惠吗？', a: '支持企业长租与人才公寓定制，可联系商务顾问获取专属方案与价格。' },
]

const spotlight = {
  name: '云顶公馆 · 顶层跃层',
  desc: '城市天际线上的稀有跃层，270° 环幕视野，配备全屋智能与私人电梯厅，仅此一套。',
  specs: ['跃层 · 320㎡', '四居 + 多功能厅', '私家空中花园', '全屋智能标配'],
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
}
</script>

<template>
  <div class="properties">
    <PageHero
      eyebrow="RESIDENCES · 房源"
      title="房源"
      subtitle="从精致一居到阔绰跃层，覆盖城市核心地段，总有一款契合您的生活方式。"
      image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- 筛选 -->
    <section class="section section--tight">
      <div class="container">
        <div class="filter-bar">
          <div class="filter-group">
            <span class="filter-label">区域</span>
            <button
              v-for="a in areaOptions"
              :key="a"
              class="filter-chip"
              :class="{ 'is-active': activeArea === a }"
              @click="activeArea = a"
            >
              {{ a }}
            </button>
          </div>
          <div class="filter-group">
            <span class="filter-label">户型</span>
            <button
              v-for="t in typeOptions"
              :key="t"
              class="filter-chip"
              :class="{ 'is-active': activeType === t }"
              @click="activeType = t"
            >
              {{ t }}
            </button>
          </div>
        </div>

        <p class="filter-result">共 {{ filtered.length }} 套房源符合条件</p>

        <div class="prop-grid">
          <article v-for="p in filtered" :key="p.name" class="prop-card">
            <div class="prop-card__media">
              <span class="prop-card__tag">{{ p.tag }}</span>
              <img :src="p.image" :alt="p.name" loading="lazy" />
            </div>
            <div class="prop-card__body">
              <h3 class="prop-card__name">{{ p.name }}</h3>
              <p class="prop-card__meta">{{ p.area }} · {{ p.type }} · {{ p.size }}</p>
              <p class="prop-card__price">{{ p.price }}</p>
              <RouterLink to="/contact" class="more-link">预约看房 →</RouterLink>
            </div>
          </article>
        </div>

        <p v-if="filtered.length === 0" class="empty-tip">暂无符合条件的房源，可尝试放宽筛选条件，或联系我们定制。</p>
      </div>
    </section>

    <!-- 优惠活动 -->
    <section class="section section--tight">
      <div class="container promo">
        <div class="promo__text">
          <p class="eyebrow">PROMOTION · 限时活动</p>
          <h2 class="promo__title">新客首月租金 5 折</h2>
          <p class="promo__desc">即日起至 2026 年 9 月 30 日，新签约客户可享首月租金 5 折优惠，更有老带新礼遇（示例活动）。</p>
        </div>
        <RouterLink to="/contact" class="btn btn--accent">立即预约</RouterLink>
      </div>
    </section>

    <!-- 周边配套 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">SURROUNDINGS · 周边配套</p>
          <h2 class="display">不止一处居所，更是一座成熟的生活圈</h2>
        </div>
        <div class="surround-grid">
          <article v-for="s in surroundings" :key="s.title" class="surround">
            <h3 class="surround__title">{{ s.title }}</h3>
            <p class="surround__desc">{{ s.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 特色房源 -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">FEATURED · 特色房源</p>
          <h2 class="display">臻选之作，仅此一套</h2>
        </div>

        <div class="spotlight">
          <div class="spotlight__media">
            <img :src="spotlight.image" :alt="spotlight.name" loading="lazy" />
          </div>
          <div class="spotlight__body">
            <h3 class="spotlight__name">{{ spotlight.name }}</h3>
            <p class="spotlight__desc">{{ spotlight.desc }}</p>
            <ul class="spotlight__specs">
              <li v-for="s in spotlight.specs" :key="s">{{ s }}</li>
            </ul>
            <RouterLink to="/contact" class="btn btn--ink">预约品鉴</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 租房流程 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">RENTAL PROCESS · 租房流程</p>
          <h2 class="display">五步轻松入住</h2>
        </div>
        <ol class="steps">
          <li v-for="s in rentSteps" :key="s.no" class="step">
            <span class="step__no">{{ s.no }}</span>
            <h3 class="step__title">{{ s.title }}</h3>
            <p class="step__desc">{{ s.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- 租赁 FAQ -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">RENTAL FAQ · 租赁常见问题</p>
          <h2 class="display">关于租房，您关心的都在这里</h2>
        </div>
        <ul class="faq-list">
          <li v-for="f in rentalFaqs" :key="f.q" class="faq">
            <h3 class="faq__q">{{ f.q }}</h3>
            <p class="faq__a">{{ f.a }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="cta-band__title">没找到心仪的户型？</h2>
          <p class="cta-band__desc">告诉我们您的预算与偏好，专属顾问将为您定向推荐，或为您定制理想中的家。</p>
        </div>
        <RouterLink to="/custom" class="btn btn--accent">预约定制</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 筛选 */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  padding: 26px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.filter-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-label {
  font-size: 13px;
  letter-spacing: 0.14em;
  color: var(--muted);
  margin-right: 8px;
}

.filter-chip {
  padding: 8px 20px;
  font-size: 14px;
  letter-spacing: 0.06em;
  border: 1px solid var(--line);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s var(--ease);
}

.filter-chip:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.filter-chip.is-active {
  background: var(--ink);
  border-color: var(--ink);
  color: #fff;
}

.filter-result {
  margin: 24px 0 36px;
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--muted);
}

/* 房源网格 */
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
  position: relative;
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

.prop-card__tag {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  padding: 4px 12px;
  background: var(--ink);
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.16em;
}

.prop-card__body {
  padding: 24px 26px 28px;
}

.prop-card__name {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.prop-card__meta {
  margin-top: 8px;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--muted);
}

.prop-card__price {
  margin: 16px 0 18px;
  font-family: var(--font-latin);
  font-size: 21px;
  color: var(--accent);
}

.empty-tip {
  padding: 48px 0;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
  letter-spacing: 0.08em;
}

/* 优惠活动 */
.promo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  background: var(--ink);
  color: #fff;
  padding: 48px 52px;
}

.promo__title {
  margin-top: 14px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #fff;
}

.promo__desc {
  margin-top: 10px;
  max-width: 56ch;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.62);
}

/* 周边配套 */
.surround-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.surround {
  background: #ffffff;
  padding: 38px 32px;
  transition: background 0.4s var(--ease);
}

.surround:hover {
  background: var(--paper-deep);
}

.surround__title {
  position: relative;
  padding-top: 18px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.surround__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--accent);
}

.surround__desc {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* 特色房源 */
.spotlight {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  background: #ffffff;
  border: 1px solid var(--line-soft);
  box-shadow: var(--shadow-md);
}

.spotlight__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 420px;
}

.spotlight__body {
  padding: 56px 52px;
}

.spotlight__name {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.spotlight__desc {
  margin-top: 18px;
  color: var(--muted);
  font-size: 15px;
  line-height: 2;
}

.spotlight__specs {
  margin: 26px 0 34px;
  display: grid;
  gap: 10px;
}

.spotlight__specs li {
  position: relative;
  padding-left: 24px;
  color: var(--ink-soft);
  font-size: 14px;
}

.spotlight__specs li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 10px;
  height: 10px;
  border: 1px solid var(--accent);
}

/* 租房流程 */
.steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.step {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 28px 26px;
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

/* FAQ */
.faq-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.faq {
  background: #ffffff;
  padding: 30px 32px;
}

.faq__q {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.faq__q::before {
  content: "Q";
  font-family: var(--font-latin);
  font-size: 13px;
  color: var(--accent);
  margin-right: 10px;
  vertical-align: 2px;
}

.faq__a {
  margin-top: 10px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* 响应式 */
@media (max-width: 980px) {
  .prop-grid {
    grid-template-columns: 1fr 1fr;
  }

  .surround-grid {
    grid-template-columns: 1fr 1fr;
  }

  .spotlight {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr 1fr;
  }

  .faq-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .prop-grid,
  .surround-grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .spotlight__body {
    padding: 36px 28px;
  }
}
</style>