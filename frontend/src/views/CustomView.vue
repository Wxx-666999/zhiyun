<script setup>
import { ref } from 'vue'

const processSteps = [
  { no: '01', title: '沟通需求', desc: '与设计师面对面沟通生活方式、预算与偏好' },
  { no: '02', title: '方案设计', desc: '空间规划、风格定位与智能方案一体呈现' },
  { no: '03', title: '智装施工', desc: '标准化工艺与全程监理，节点透明可查' },
  { no: '04', title: '交付入住', desc: '软装陈设与设备调试一站式完成，拎包即住' },
]

const directions = [
  { title: '户型改造', desc: '空间重构、动静分区，让格局贴合生活动线' },
  { title: '风格营造', desc: '现代轻奢、原木侘寂、意式极简等多种风格' },
  { title: '智能家居', desc: '全屋智能场景定制，灯光、安防、影音一体联动' },
  { title: '软装陈设', desc: '家具、灯具、布艺与艺术陈设，整体搭配交付' },
]

const includes = [
  '全案设计：平面、效果、施工图一步到位',
  '硬装施工：水电、泥瓦、木作与油漆全包',
  '智能家居：门锁、灯光、窗帘、空调全屋联动',
  '软装交付：家具、灯具、布艺与饰品整体配齐',
  '主材升级：环保板材与品牌卫浴，可溯源',
  '售后保障：隐蔽工程 5 年质保，整体 2 年',
]

const guarantees = [
  { title: '透明报价', desc: '分项清单报价，无增项陷阱，签约前全部确认' },
  { title: '工期保障', desc: '合同约定工期，延期按日赔付，进度节点透明' },
  { title: '环保材料', desc: '全屋环保材料，交付前空气质量检测合格' },
  { title: '售后无忧', desc: '隐蔽工程 5 年质保，管家 7×24 在线响应' },
]

const designers = [
  { name: '陈 默', title: '首席设计总监', exp: '从业 15 年 · 500+ 全案落地', style: '现代轻奢 / 极简' },
  { name: '林 溪', title: '高级设计师', exp: '从业 10 年 · 300+ 全案落地', style: '原木侘寂 / 新中式' },
  { name: '周 屿', title: '智能方案专家', exp: '从业 8 年 · 200+ 智慧家落地', style: '智能场景 / 影音集成' },
]

const cases = [
  { name: '云栖 · 现代轻奢', size: '110㎡ · 三居', cost: '约 28 万', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80' },
  { name: '澜庭 · 原木侘寂', size: '89㎡ · 两居', cost: '约 18 万', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80' },
  { name: '华庭 · 意式极简', size: '140㎡ · 四居', cost: '约 42 万', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80' },
  { name: '星海 · 新中式', size: '126㎡ · 三居', cost: '约 32 万', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80' },
  { name: '云谷 · 智能公寓', size: '52㎡ · 一居', cost: '约 12 万', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80' },
  { name: '山语 · 度假居所', size: '168㎡ · 四居', cost: '约 56 万', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80' },
]

const tiers = [
  { name: '轻享版', price: '12 万起', desc: '基础硬装 + 基础软装 + 智能门锁灯光', fit: '适合一居、两居的精装升级' },
  { name: '臻选版', price: '28 万起', desc: '全案设计 + 硬装 + 全屋智能 + 软装交付', fit: '适合三居、四居的全案定制', highlight: true },
  { name: '尊享版', price: '50 万起', desc: '高端主材 + 影音系统 + 全屋智能 + 艺术陈设', fit: '适合大平层与跃层的顶配定制' },
]

const faqs = [
  { q: '定制服务包含哪些内容？', a: '包含全案设计、硬装施工、智能家居与软装交付，真正做到拎包入住，具体以合同清单为准。' },
  { q: '工期一般需要多久？', a: '一居两居约 45 天，三居四居约 60-75 天，大平层与跃层视体量另行评估，工期写入合同。' },
  { q: '可以先看方案再决定吗？', a: '可以。首次咨询与初步方案免费，满意后再签约进入深化设计阶段。' },
  { q: '异地可以服务吗？', a: '支持杭州、上海及周边城市的上门服务，异地项目可远程沟通并按节点驻场。' },
]

const form = ref({ name: '', phone: '', house: '', preference: '' })
const submitted = ref(false)

function handleSubmit() {
  // 纯前端示例：不发送真实数据，仅展示提交反馈
  if (!form.value.name || !form.value.phone) return
  submitted.value = true
}
</script>

<template>
  <div class="custom">
    <PageHero
      eyebrow="BESPOKE · 定制"
      title="定制"
      subtitle="从空间到生活方式，把您理想中的家，交由我们来实现。"
      image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- 定制理念 -->
    <section class="section">
      <div class="container custom-lead">
        <p class="eyebrow">BESPOKE LIVING · 定制理念</p>
        <h2 class="display">每一套房子，<br />都应当为它的主人而生</h2>
        <p class="custom-lead__text">
          定制不是堆砌，而是取舍。我们从您的生活方式出发，在户型、风格、智能与软装四个维度提供一体化方案，让空间真正成为您生活的延伸。
        </p>
      </div>
    </section>

    <!-- 定制流程 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">PROCESS · 定制流程</p>
          <h2 class="display">四步，让理想落地</h2>
        </div>

        <ol class="steps">
          <li v-for="s in processSteps" :key="s.no" class="step">
            <span class="step__no">{{ s.no }}</span>
            <h3 class="step__title">{{ s.title }}</h3>
            <p class="step__desc">{{ s.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- 定制方向 -->
    <section class="section">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">DIRECTIONS · 定制方向</p>
          <h2 class="display">四大方向，随心组合</h2>
        </div>

        <div class="dir-grid">
          <article v-for="d in directions" :key="d.title" class="dir-card">
            <h3 class="dir-card__title">{{ d.title }}</h3>
            <p class="dir-card__desc">{{ d.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 定制包含清单 -->
    <section class="section section--deep">
      <div class="container split">
        <div class="split__intro">
          <p class="eyebrow">WHAT'S INCLUDED · 定制包含</p>
          <h2 class="display">一站全包，<br />省心不止一点</h2>
          <p class="split__text">
            从一张设计图到一套可住的家，我们把散落在装修各环节的琐碎全部收拢，让您只面对一位负责人。
          </p>
          <RouterLink to="/contact" class="more-link">预约免费咨询 →</RouterLink>
        </div>
        <ul class="include-list">
          <li v-for="item in includes" :key="item" class="include-item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <!-- 服务保障 -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">GUARANTEES · 服务保障</p>
          <h2 class="display">四项承诺，写进合同</h2>
        </div>
        <div class="guarantee-grid">
          <article v-for="g in guarantees" :key="g.title" class="guarantee">
            <h3 class="guarantee__title">{{ g.title }}</h3>
            <p class="guarantee__desc">{{ g.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 设计师团队 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">OUR TEAM · 设计师团队</p>
          <h2 class="display">专业的人，做专业的事</h2>
        </div>
        <div class="team-grid">
          <article v-for="d in designers" :key="d.name" class="team-card">
            <h3 class="team-card__name">{{ d.name }}</h3>
            <p class="team-card__title">{{ d.title }}</p>
            <p class="team-card__exp">{{ d.exp }}</p>
            <p class="team-card__style">{{ d.style }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 案例展示 -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">CASES · 定制案例</p>
          <h2 class="display">看得见的交付品质</h2>
        </div>

        <div class="case-grid">
          <article v-for="c in cases" :key="c.name" class="case-card">
            <div class="case-card__media">
              <img :src="c.image" :alt="c.name" loading="lazy" />
            </div>
            <div class="case-card__body">
              <h3 class="case-card__name">{{ c.name }}</h3>
              <p class="case-card__meta">{{ c.size }} · 造价 {{ c.cost }}（示例）</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 费用档位 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">PRICING · 费用档位</p>
          <h2 class="display">三档方案，按需选择</h2>
        </div>

        <div class="tier-grid">
          <article v-for="t in tiers" :key="t.name" class="tier" :class="{ 'is-hot': t.highlight }">
            <h3 class="tier__name">{{ t.name }}</h3>
            <p class="tier__price">{{ t.price }}</p>
            <p class="tier__desc">{{ t.desc }}</p>
            <p class="tier__fit">{{ t.fit }}</p>
            <RouterLink to="/contact" class="btn btn--line tier__btn">预约咨询</RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- 定制 FAQ -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">FAQ · 定制常见问题</p>
          <h2 class="display">关于定制，您可能还想知道</h2>
        </div>
        <ul class="faq-list">
          <li v-for="f in faqs" :key="f.q" class="faq">
            <h3 class="faq__q">{{ f.q }}</h3>
            <p class="faq__a">{{ f.a }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- 预约表单 -->
    <section class="section section--deep">
      <div class="container custom-form-wrap">
        <div class="custom-form-head">
          <p class="eyebrow">START YOUR PROJECT · 开始定制</p>
          <h2 class="display">预约您的专属设计咨询</h2>
          <p class="custom-form-head__sub">提交后，资深设计师将与您联系，首次咨询免费。</p>
        </div>

        <form class="custom-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <label class="field">
              <span class="field__label">您的称呼 *</span>
              <input v-model="form.name" class="field__control" type="text" placeholder="请输入姓名" />
            </label>

            <label class="field">
              <span class="field__label">联系电话 *</span>
              <input v-model="form.phone" class="field__control" type="tel" placeholder="请输入手机号码" />
            </label>
          </div>

          <div class="form-row">
            <label class="field">
              <span class="field__label">意向户型</span>
              <input v-model="form.house" class="field__control" type="text" placeholder="如：110㎡ 三居" />
            </label>

            <label class="field">
              <span class="field__label">偏好风格</span>
              <select v-model="form.preference" class="field__control">
                <option value="">请选择风格偏好</option>
                <option>现代轻奢</option>
                <option>原木侘寂</option>
                <option>意式极简</option>
                <option>新中式</option>
                <option>其他</option>
              </select>
            </label>
          </div>

          <button type="submit" class="btn btn--accent btn--block">提交预约</button>
          <p class="form-note">提交即表示您同意我们为联系您而使用上述信息。</p>
          <p v-if="submitted" class="form-success">预约已提交（示例反馈），专属设计师将尽快与您联系。</p>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 定制理念 */
.custom-lead {
  max-width: 860px;
}

.custom-lead__text {
  margin-top: 24px;
  color: var(--muted);
  max-width: 56ch;
  font-size: 15px;
}

/* 流程 */
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.step {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 30px 28px;
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

/* 定制方向 */
.dir-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.dir-card {
  background: #ffffff;
  padding: 40px 32px;
  transition: background 0.4s var(--ease);
}

.dir-card:hover {
  background: var(--paper-deep);
}

.dir-card__title {
  position: relative;
  padding-top: 18px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.dir-card__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--accent);
}

.dir-card__desc {
  margin-top: 14px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* 包含清单 */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

.split__text {
  margin-top: 22px;
  color: var(--muted);
  max-width: 52ch;
}

.split__intro .more-link {
  margin-top: 30px;
}

.include-list {
  display: grid;
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.include-item {
  position: relative;
  background: #ffffff;
  padding: 20px 24px 20px 52px;
  font-size: 14.5px;
  color: var(--ink-soft);
}

.include-item::before {
  content: "";
  position: absolute;
  left: 24px;
  top: 0.72em;
  width: 10px;
  height: 10px;
  border: 1px solid var(--accent);
}

/* 服务保障 */
.guarantee-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.guarantee {
  background: #ffffff;
  padding: 36px 30px;
  transition: background 0.4s var(--ease);
}

.guarantee:hover {
  background: var(--paper-deep);
}

.guarantee__title {
  position: relative;
  padding-top: 16px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.guarantee__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--accent);
}

.guarantee__desc {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* 设计师 */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.team-card {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 40px 36px;
  box-shadow: var(--shadow-sm);
}

.team-card__name {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--ink);
}

.team-card__title {
  margin-top: 8px;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.team-card__exp {
  margin-top: 22px;
  font-size: 14px;
  color: var(--muted);
}

.team-card__style {
  margin-top: 6px;
  font-size: 14px;
  color: var(--muted);
}

/* 案例 */
.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.case-card {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  box-shadow: var(--shadow-sm);
}

.case-card__media {
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.case-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s var(--ease);
}

.case-card:hover .case-card__media img {
  transform: scale(1.05);
}

.case-card__body {
  padding: 24px 26px 28px;
}

.case-card__name {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.case-card__meta {
  margin-top: 8px;
  font-size: 13px;
  color: var(--muted);
}

/* 费用档位 */
.tier-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: stretch;
}

.tier {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
}

.tier.is-hot {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.tier__name {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--ink);
}

.tier__price {
  margin-top: 18px;
  font-family: var(--font-latin);
  font-size: 30px;
  color: var(--accent);
}

.tier__desc {
  margin-top: 14px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

.tier__fit {
  margin-top: 12px;
  font-size: 13px;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.tier__btn {
  margin-top: 28px;
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

/* 预约表单 */
.custom-form-wrap {
  max-width: 860px;
}

.custom-form-head {
  margin-bottom: 40px;
}

.custom-form-head__sub {
  margin-top: 16px;
  color: var(--muted);
  font-size: 14px;
}

.custom-form {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 44px;
  box-shadow: var(--shadow-sm);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* 响应式 */
@media (max-width: 980px) {
  .split {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .steps,
  .dir-grid,
  .tier-grid {
    grid-template-columns: 1fr 1fr;
  }

  .guarantee-grid {
    grid-template-columns: 1fr 1fr;
  }

  .case-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .faq-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .steps,
  .dir-grid,
  .guarantee-grid,
  .tier-grid,
  .form-row {
    grid-template-columns: 1fr;
  }

  .custom-form {
    padding: 28px 22px;
  }
}
</style>