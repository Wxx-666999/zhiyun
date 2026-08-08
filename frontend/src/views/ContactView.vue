<script setup>
import { ref } from 'vue'

const form = ref({
  contact: '',
  phoneCompany: '',
  projectType: '',
  budget: '',
  requirement: '',
})

const submitted = ref(false)

function handleSubmit() {
  // 纯前端示例：不发送真实数据，仅展示提交反馈
  if (!form.value.contact || !form.value.phoneCompany) return
  submitted.value = true
}

const projectTypes = ['长租公寓', '企业定制', '智慧化改造', '物业托管', '商务合作', '其他']
const budgets = ['10 万以下', '10-30 万', '30-50 万', '50 万以上', '待定']

const channels = [
  { label: '客服热线', value: '400-888-6688', note: '每日 9:00 - 21:00，人工在线' },
  { label: '商务合作', value: '188-8888-6666', note: '项目对接人：王经理' },
  { label: '咨询邮箱', value: 'hello@zhuyun.life', note: '24 小时内回复' },
  { label: '体验中心', value: '滨江区云栖大道 88 号', note: '智慧云居 · 品牌体验馆' },
]

const promises = [
  { title: '30 分钟响应', desc: '工作日咨询，顾问 30 分钟内回电' },
  { title: '1 对 1 专属服务', desc: '全程由同一顾问跟进，需求不断档' },
  { title: '方案免费定制', desc: '首次咨询与初步方案不收取任何费用' },
]

const centers = [
  { city: '杭州 · 滨江', name: '滨江品牌体验馆', addr: '滨江区云栖大道 88 号', phone: '400-888-6688' },
  { city: '杭州 · 高新', name: '高新区服务中心', addr: '高新区科技大道 288 号', phone: '0571-8888-8899' },
  { city: '上海 · 静安', name: '上海客户中心', addr: '静安区南京西路 1266 号', phone: '021-6666-8899' },
]

const faqs = [
  { q: '如何预约实地看房？', a: '您可拨打 400-888-6688，或填写右侧表单，专属顾问将在 30 分钟内与您联系并安排看房时间。' },
  { q: '房源租金包含哪些费用？', a: '租金包含基础物业费与公共区域能耗，水电燃气按表计量，具体以合同条款为准。' },
  { q: '是否支持短租或企业定制？', a: '支持。我们为长租、短租与企业人才公寓提供灵活的定制方案，可联系顾问详询。' },
  { q: '智能设备如何维护？', a: '社区配备 7×24 小时智慧运维团队，设备故障可在线报修，管家将全程跟进处理。' },
  { q: '企业批量合作如何联系？', a: '请通过商务合作专线或表单选择「企业定制 / 商务合作」，项目经理将对接沟通。' },
  { q: '定制服务如何收费？', a: '设计咨询免费，方案报价透明分项呈现，签约前不产生任何隐藏费用。' },
]
</script>

<template>
  <div class="contact">
    <PageHero
      eyebrow="CONTACT · 联系"
      title="联系"
      subtitle="无论是看房预约、项目合作还是意见反馈，我们都期待与您沟通。"
      image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- 联系信息 + 表单 -->
    <section class="section">
      <div class="container contact-grid">
        <div class="contact-info">
          <p class="eyebrow">GET IN TOUCH · 联系方式</p>
          <h2 class="display">期待与您相遇</h2>

          <ul class="channel-list">
            <li v-for="c in channels" :key="c.label" class="channel">
              <span class="channel__label">{{ c.label }}</span>
              <div>
                <strong class="channel__value">{{ c.value }}</strong>
                <span class="channel__note">{{ c.note }}</span>
              </div>
            </li>
          </ul>

          <div class="wechat">
            <div class="wechat__qr"><span>QR</span></div>
            <div>
              <strong>微信公众号</strong>
              <p>扫码关注「智慧云居」，获取最新房源与社区动态。</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h3 class="contact-form__title">在线留言</h3>
          <p class="contact-form__sub">请留下您的需求，专属顾问将尽快与您取得联系。</p>

          <form @submit.prevent="handleSubmit">
            <label class="field">
              <span class="field__label">联系人 *</span>
              <input v-model="form.contact" class="field__control" type="text" placeholder="请输入您的称呼" />
            </label>

            <label class="field">
              <span class="field__label">联系电话 / 公司 *</span>
              <input v-model="form.phoneCompany" class="field__control" type="text" placeholder="请输入联系电话或公司名称" />
            </label>

            <label class="field">
              <span class="field__label">项目类型</span>
              <select v-model="form.projectType" class="field__control">
                <option value="">请选择项目类型</option>
                <option v-for="t in projectTypes" :key="t" :value="t">{{ t }}</option>
              </select>
            </label>

            <label class="field">
              <span class="field__label">预算区间</span>
              <select v-model="form.budget" class="field__control">
                <option value="">请选择预算区间</option>
                <option v-for="b in budgets" :key="b" :value="b">{{ b }}</option>
              </select>
            </label>

            <label class="field">
              <span class="field__label">需求说明</span>
              <textarea v-model="form.requirement" class="field__control" placeholder="请描述您的需求，例如意向区域、户型、用途、期望时间等"></textarea>
            </label>

            <button type="submit" class="btn btn--accent btn--block">提交留言</button>
            <p class="form-note">提交即表示您同意我们为联系您而使用上述信息。</p>
            <p v-if="submitted" class="form-success">已收到您的留言（示例反馈），专属顾问将尽快与您联系。</p>
          </form>
        </div>
      </div>
    </section>

    <!-- 响应承诺 -->
    <section class="section section--tight">
      <div class="container promise-grid">
        <article v-for="p in promises" :key="p.title" class="promise">
          <h3 class="promise__title">{{ p.title }}</h3>
          <p class="promise__desc">{{ p.desc }}</p>
        </article>
      </div>
    </section>

    <!-- 服务网点 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">SERVICE CENTERS · 服务网点</p>
          <h2 class="display">三处中心，就近服务</h2>
        </div>

        <div class="center-grid">
          <article v-for="c in centers" :key="c.name" class="center-card">
            <h3 class="center-card__city">{{ c.city }}</h3>
            <h4 class="center-card__name">{{ c.name }}</h4>
            <p class="center-card__addr">{{ c.addr }}</p>
            <p class="center-card__phone">{{ c.phone }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 地图占位 -->
    <section class="section section--tight">
      <div class="container">
        <div class="map-placeholder">
          <div class="map-placeholder__inner">
            <p class="eyebrow">LOCATION · 位置示意</p>
            <h3>滨江区云栖大道 88 号</h3>
            <p>地铁 2 号线「云栖站」2 号出口步行 5 分钟即达，体验中心配有地下停车场。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">FAQ · 常见问题</p>
          <h2 class="display">您可能还想了解</h2>
        </div>

        <ul class="faq-list">
          <li v-for="f in faqs" :key="f.q" class="faq">
            <h3 class="faq__q">{{ f.q }}</h3>
            <p class="faq__a">{{ f.a }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

.channel-list {
  margin-top: 40px;
  border-top: 1px solid var(--line);
}

.channel {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid var(--line);
}

.channel__label {
  font-size: 13px;
  letter-spacing: 0.14em;
  color: var(--muted);
}

.channel__value {
  display: block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.channel__note {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  color: var(--muted);
}

.wechat {
  margin-top: 32px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.wechat__qr {
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  border: 1px solid var(--line);
  background: #ffffff;
  color: var(--muted);
  font-family: var(--font-latin);
  font-size: 20px;
  letter-spacing: 0.2em;
}

.wechat strong {
  font-size: 15px;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.wechat p {
  margin-top: 6px;
  font-size: 13px;
  color: var(--muted);
  max-width: 30ch;
}

/* 表单 */
.contact-form {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 44px 44px 40px;
  box-shadow: var(--shadow-sm);
}

.contact-form__title {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.contact-form__sub {
  margin: 10px 0 28px;
  font-size: 14px;
  color: var(--muted);
}

/* 响应承诺 */
.promise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.promise {
  background: #ffffff;
  padding: 34px 32px;
}

.promise__title {
  position: relative;
  padding-top: 16px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.promise__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--accent);
}

.promise__desc {
  margin-top: 10px;
  font-size: 14px;
  color: var(--muted);
}

/* 服务网点 */
.center-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.center-card {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 36px 34px;
  box-shadow: var(--shadow-sm);
}

.center-card__city {
  font-family: var(--font-latin);
  font-size: 13px;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
}

.center-card__name {
  margin-top: 12px;
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.center-card__addr {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
}

.center-card__phone {
  margin-top: 6px;
  font-family: var(--font-latin);
  font-size: 16px;
  color: var(--ink);
}

/* 地图占位 */
.map-placeholder {
  position: relative;
  min-height: 320px;
  background:
    linear-gradient(rgba(28, 27, 24, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(28, 27, 24, 0.06) 1px, transparent 1px),
    var(--paper-deep);
  background-size: 40px 40px;
}

.map-placeholder__inner {
  position: absolute;
  left: 32px;
  bottom: 32px;
  max-width: 360px;
  background: #ffffff;
  padding: 26px 30px;
  box-shadow: var(--shadow-md);
}

.map-placeholder__inner h3 {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.map-placeholder__inner p {
  margin-top: 8px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.9;
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
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .promise-grid,
  .center-grid {
    grid-template-columns: 1fr;
  }

  .faq-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .contact-form {
    padding: 32px 24px;
  }
}
</style>