<script setup>
// 社区页展示数据（示例内容）
const facilities = [
  { title: '共享书吧', desc: '藏书 3000+ 册，安静阅读与轻办公两相宜' },
  { title: '健身空间', desc: '专业器械与私教课程，随时开练' },
  { title: '瑜伽冥想室', desc: '每周课程预约，身心放松的专属角落' },
  { title: '家庭影音室', desc: '百寸幕布与环绕音响，周末影院常在' },
  { title: '儿童天地', desc: '安全软装与益智玩具，陪伴孩子成长' },
  { title: '屋顶花园', desc: '咖啡、绿植与城市天际线，社交会客厅' },
]

const benefits = [
  { no: '01', title: '专属管家', desc: '每位业主配有一名专属管家，7×24 小时响应各类生活需求' },
  { no: '02', title: '智能通行', desc: '人脸识别门禁、访客授权与快递代收，出入从容有序' },
  { no: '03', title: '共享空间', desc: '书吧、健身、影音与儿童天地，按需预约，错峰使用' },
  { no: '04', title: '社区活动', desc: '读书会、市集、运动与亲子活动，四季常新，邻里相知' },
  { no: '05', title: '健康关怀', desc: '定期健康义诊、心理咨询与适老服务，关怀每一位家人' },
  { no: '06', title: '积分权益', desc: '参与活动与日常互动累计积分，兑换保洁、养护等增值服务' },
]

const events = [
  { date: '05月', title: '云端读书会', desc: '每月一期的共读活动，在共享书吧与同好相遇', status: '已结束' },
  { date: '06月', title: '邻里生活市集', desc: '手作、轻食与旧物交换，让邻里在烟火气中熟识', status: '已结束' },
  { date: '07月', title: '亲子运动会', desc: '社区草坪上的趣味运动日，陪伴孩子一起成长', status: '报名中' },
  { date: '09月', title: '业主答谢晚宴', desc: '一年一度的社区盛典，感谢每一位家人的信任', status: '敬请期待' },
]

const pledges = [
  { title: '安全第一', desc: '门禁布控、安保巡更、消防演练常态化，守护每位家人' },
  { title: '响应及时', desc: '报修 30 分钟上门，投诉 24 小时内闭环处理' },
  { title: '信息公开', desc: '公共收益透明公示，服务标准公开可查' },
  { title: '邻里友善', desc: '倡导文明公约，共建安静、整洁、友善的居住环境' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80', label: '社区公共客厅' },
  { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80', label: '样板生活空间' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80', label: '精致一居' },
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80', label: '家庭聚会时光' },
  { src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80', label: '社区建筑外观' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', label: '黄昏下的社区' },
]

const joinSteps = [
  { no: '01', title: '预约到访', desc: '实地感受社区氛围与空间品质' },
  { no: '02', title: '签约入住', desc: '透明条款，一站式办理入住' },
  { no: '03', title: '加入社群', desc: '入群认识邻里，解锁全部会员权益' },
]

const voices = [
  { quote: '搬进智慧云居两年，最打动我的是物业服务。家里任何问题，管家都能在第一时间响应。', name: '林女士', role: '云栖公馆业主' },
  { quote: '人脸识别、全屋智能，住在这里科技感很强，但生活却非常从容，一切都恰到好处。', name: '陈先生', role: '澜庭雅苑业主' },
  { quote: '社区活动很丰富，孩子在这里交到了朋友，我们也认识了很多好邻居。', name: '周女士', role: '华庭壹号业主' },
]
</script>

<template>
  <div class="community">
    <PageHero
      eyebrow="COMMUNITY · 用户社区"
      title="用户社区"
      subtitle="以居住为纽带，构建有温度、有连接的现代邻里共同体。"
      image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
    />

    <!-- 社区理念 -->
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
          <p class="eyebrow">OUR BELIEF · 社区理念</p>
          <h2 class="display">居住在一起，<br />也生活在一起</h2>
          <p class="split__text">
            智慧云居相信，理想的社区应当既尊重个体的安静，也创造相遇的可能。我们以共享空间与社区运营为土壤，让陌生人成为邻居，让邻居成为朋友。
          </p>
          <p class="split__text">
            从入住那一刻起，您拥有的不止是一套公寓，更是一整套关于生活的服务体系与一群值得信赖的邻里。
          </p>
        </div>
      </div>
    </section>

    <!-- 社区配套设施 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">FACILITIES · 社区配套</p>
          <h2 class="display">六大全龄段共享空间</h2>
        </div>
        <div class="facility-grid">
          <article v-for="f in facilities" :key="f.title" class="facility">
            <h3 class="facility__title">{{ f.title }}</h3>
            <p class="facility__desc">{{ f.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 会员权益 -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">MEMBERSHIP · 会员权益</p>
          <h2 class="display">六重权益，关照生活的每个瞬间</h2>
        </div>

        <div class="benefit-grid">
          <article v-for="b in benefits" :key="b.no" class="benefit">
            <span class="benefit__no">{{ b.no }}</span>
            <h3 class="benefit__title">{{ b.title }}</h3>
            <p class="benefit__desc">{{ b.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 社区活动 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">EVENTS · 社区活动</p>
          <h2 class="display">一年四季，活动常新</h2>
        </div>

        <ul class="event-list">
          <li v-for="e in events" :key="e.title" class="event">
            <span class="event__date">{{ e.date }}</span>
            <div class="event__body">
              <h3 class="event__title">{{ e.title }}</h3>
              <p class="event__desc">{{ e.desc }}</p>
            </div>
            <span class="event__status" :class="{ 'is-live': e.status === '报名中', 'is-upcoming': e.status === '敬请期待' }">{{ e.status }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- 社区公约 -->
    <section class="section">
      <div class="container split split--reverse">
        <div class="split__media">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="智慧云居社区公约"
            loading="lazy"
          />
        </div>
        <div class="split__intro">
          <p class="eyebrow">OUR PROMISE · 社区承诺</p>
          <h2 class="display">我们承诺，<br />并始终践行</h2>
          <ul class="pledge-list">
            <li v-for="p in pledges" :key="p.title" class="pledge">
              <h3 class="pledge__title">{{ p.title }}</h3>
              <p class="pledge__desc">{{ p.desc }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 社区相册 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">GALLERY · 社区相册</p>
          <h2 class="display">在这里，生活真实可见</h2>
        </div>
        <div class="gallery-grid">
          <figure v-for="g in gallery" :key="g.label" class="gallery-item">
            <img :src="g.src" :alt="g.label" loading="lazy" />
            <figcaption>{{ g.label }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- 加入社区 -->
    <section class="section">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">JOIN US · 加入社区</p>
          <h2 class="display">三步，成为智慧云居家人</h2>
        </div>
        <ol class="join-steps">
          <li v-for="s in joinSteps" :key="s.no" class="join-step">
            <span class="join-step__no">{{ s.no }}</span>
            <h3 class="join-step__title">{{ s.title }}</h3>
            <p class="join-step__desc">{{ s.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- 业主之声 -->
    <section class="section section--deep">
      <div class="container">
        <div class="section-head section-head--center">
          <p class="eyebrow">RESIDENT VOICES · 业主之声</p>
          <h2 class="display">听听家人的真实感受</h2>
        </div>

        <div class="voice-grid">
          <blockquote v-for="v in voices" :key="v.name" class="voice">
            <p class="voice__quote">「{{ v.quote }}」</p>
            <footer class="voice__by">
              <strong>{{ v.name }}</strong>
              <span>{{ v.role }}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2 class="cta-band__title">成为社区的一员</h2>
          <p class="cta-band__desc">预约看房即可了解社区详情，入住后更可享受全套会员权益。</p>
        </div>
        <RouterLink to="/contact" class="btn btn--accent">预约看房</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.split--reverse .split__media {
  order: 2;
}

.split__media img {
  width: 100%;
  height: 100%;
  min-height: 380px;
  object-fit: cover;
}

.split__text {
  margin-top: 20px;
  color: var(--muted);
  max-width: 52ch;
}

/* 配套设施 */
.facility-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.facility {
  background: #ffffff;
  padding: 38px 34px;
  transition: background 0.4s var(--ease);
}

.facility:hover {
  background: var(--paper-deep);
}

.facility__title {
  position: relative;
  padding-top: 18px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.facility__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 26px;
  height: 2px;
  background: var(--accent);
}

.facility__desc {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* 权益 */
.benefit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line-soft);
  border: 1px solid var(--line-soft);
}

.benefit {
  background: #ffffff;
  padding: 40px 36px;
  transition: background 0.4s var(--ease);
}

.benefit:hover {
  background: var(--paper-deep);
}

.benefit__no {
  font-family: var(--font-latin);
  font-size: 18px;
  color: var(--accent);
}

.benefit__title {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.benefit__desc {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
}

/* 活动时间线 */
.event-list {
  border-top: 1px solid var(--line);
}

.event {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 28px;
  align-items: baseline;
  padding: 34px 0;
  border-bottom: 1px solid var(--line);
}

.event__date {
  font-family: var(--font-latin);
  font-size: 20px;
  color: var(--accent);
}

.event__title {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.event__desc {
  margin-top: 8px;
  font-size: 14px;
  color: var(--muted);
}

.event__status {
  font-size: 12px;
  letter-spacing: 0.14em;
  padding: 6px 14px;
  border: 1px solid var(--line);
  color: var(--muted);
  white-space: nowrap;
}

.event__status.is-live,
.event__status.is-upcoming {
  border-color: var(--accent);
  color: var(--accent);
}

/* 社区承诺 */
.pledge-list {
  margin-top: 30px;
  border-top: 1px solid var(--line);
}

.pledge {
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
}

.pledge__title {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.pledge__title::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 1px solid var(--accent);
  margin-right: 10px;
  vertical-align: 1px;
}

.pledge__desc {
  margin-top: 8px;
  font-size: 14px;
  color: var(--muted);
  max-width: 52ch;
}

/* 相册 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s var(--ease);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 34px 22px 16px;
  background: linear-gradient(180deg, transparent, rgba(28, 27, 24, 0.72));
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.14em;
}

/* 加入社区 */
.join-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.join-step {
  background: #ffffff;
  border: 1px solid var(--line-soft);
  padding: 36px 34px;
}

.join-step__no {
  font-family: var(--font-latin);
  font-size: 20px;
  color: var(--accent);
}

.join-step__title {
  margin-top: 14px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
}

.join-step__desc {
  margin-top: 10px;
  font-size: 14px;
  color: var(--muted);
}

/* 业主之声 */
.voice-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.voice {
  background: #ffffff;
  padding: 40px 36px;
  border: 1px solid var(--line-soft);
  box-shadow: var(--shadow-sm);
}

.voice__quote {
  font-size: 15px;
  line-height: 2;
  color: var(--ink-soft);
}

.voice__by {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.voice__by strong {
  font-size: 15px;
  color: var(--ink);
  letter-spacing: 0.1em;
}

.voice__by span {
  font-size: 13px;
  color: var(--muted);
}

/* 响应式 */
@media (max-width: 980px) {
  .split {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .split--reverse .split__media {
    order: 0;
  }

  .facility-grid,
  .benefit-grid,
  .voice-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }

  .join-steps {
    grid-template-columns: 1fr;
  }

  .event {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media (max-width: 560px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>