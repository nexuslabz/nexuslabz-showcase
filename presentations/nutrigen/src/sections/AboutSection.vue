<script setup>
import founderImg from '@assets/images/rennan-gimenez-founder.png';

defineProps({ active: Boolean });
</script>

<template>
  <section class="about">
    <div class="about__bg">
      <div class="about__glow about__glow--1" />
      <div class="about__glow about__glow--2" />
      <div class="about__glow about__glow--3" />
    </div>

    <div class="about__content">
      <span class="tag tag--nexus">Nexus Labz</span>

      <h2 class="about__title">
        A empresa por trás do seu
        <span class="about__hl">ecossistema digital.</span>
      </h2>

      <div class="about__row-1">
        <div class="about__founder-col">
          <div class="about__section-label">Fundador e CEO</div>
          <div class="about__founder">
            <div class="about__founder-accent" />
            <div class="about__photo-wrap">
              <div class="about__photo">
                <img :src="founderImg" alt="Rennan Gimenez" />
              </div>
              <span class="about__founder-role">SDET Sênior</span>
            </div>
            <div class="about__founder-info">
              <span class="about__founder-name">Rennan Gimenez</span>
              <ul class="about__bullets">
                <li><strong>7+</strong> anos em qualidade de software e automação</li>
                <li>Bosch · C6 Bank · Accenture · Santander · GFT</li>
                <li>Experiência com clientes <strong>US & Europa</strong></li>
                <li>Especialista em automação de testes com <strong>IA</strong></li>
                <li>Arquitetura que aguenta crescimento e visão de produto</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about__purpose">
          <div class="about__section-label">Propósito</div>
          <div class="about__purpose-cards">
            <div class="about__pcard">
              <div class="about__pcard-accent" />
              <span class="about__pcard-icon">🎯</span>
              <h3>Missão</h3>
              <p>
                Transformar ideias em produtos que crescem com o negócio e mudam o dia a dia de quem
                usa.
              </p>
            </div>
            <div class="about__pcard">
              <div class="about__pcard-accent" />
              <span class="about__pcard-icon">🔭</span>
              <h3>Visão</h3>
              <p>
                Ser a equipe que empresas chamam quando o produto precisa sair do papel com
                qualidade.
              </p>
            </div>
          </div>
        </div>

        <div class="about__squad">
          <div class="about__section-label">Squad do Projeto</div>
          <div class="about__squad-items">
            <div class="about__squad-item"><span class="about__squad-num">3</span> Devs</div>
            <div class="about__squad-item"><span class="about__squad-num">1</span> QA</div>
            <div class="about__squad-item"><span class="about__squad-num">1</span> UX/UI</div>
          </div>
        </div>
      </div>

      <div class="about__row-2">
        <div class="about__block">
          <div class="about__section-label">Pilares de atuação</div>
          <div class="about__pillars">
            <div class="about__pillar">
              <span class="about__pillar-icon">⚙️</span>
              <div>
                <span class="about__pillar-title">Engenharia de Produto</span>
                <span class="about__pillar-sub">Da primeira linha de código ao ar</span>
              </div>
            </div>
            <div class="about__pillar">
              <span class="about__pillar-icon">🔍</span>
              <div>
                <span class="about__pillar-title">Consultoria Tech</span>
                <span class="about__pillar-sub">Talentos alocados</span>
              </div>
            </div>
            <div class="about__pillar">
              <span class="about__pillar-icon">🚀</span>
              <div>
                <span class="about__pillar-title">Aceleração de Talentos</span>
                <span class="about__pillar-sub">Mentoria global</span>
              </div>
            </div>
            <div class="about__pillar">
              <span class="about__pillar-icon">🧩</span>
              <div>
                <span class="about__pillar-title">Squads Dedicados</span>
                <span class="about__pillar-sub">Times sob demanda</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about__block">
          <div class="about__section-label">Valores</div>
          <div class="about__values">
            <div class="about__value">
              <span class="about__value-icon">🤝</span>
              <div>
                <span class="about__value-title">Mentalidade de dono</span>
                <span class="about__value-sub">Parceiros, não fornecedores</span>
              </div>
            </div>
            <div class="about__value">
              <span class="about__value-icon">⚡</span>
              <div>
                <span class="about__value-title">Alta performance</span>
                <span class="about__value-sub">Qualidade e velocidade</span>
              </div>
            </div>
            <div class="about__value">
              <span class="about__value-icon">🔧</span>
              <div>
                <span class="about__value-title">Entrega ponta a ponta</span>
                <span class="about__value-sub">Da conversa inicial ao sistema no ar</span>
              </div>
            </div>
            <div class="about__value">
              <span class="about__value-icon">📈</span>
              <div>
                <span class="about__value-title">Crescimento contínuo</span>
                <span class="about__value-sub">Evolução como cultura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about__insight">
        <span class="about__insight-icon">💡</span>
        <p>
          A Nexus Labz nasceu da vontade de parar de testar o produto dos outros e começar a
          <strong>construir produtos de verdade que entregam valor.</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nexus-grey);
  position: relative;
  padding: 1.75rem 3rem;
  overflow: hidden;
}

.about__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.about__glow--1 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
  top: -120px;
  right: -120px;
}

.about__glow--2 {
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
}

.about__glow--3 {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%);
  top: 40%;
  left: 20%;
}

.about__content {
  position: relative;
  z-index: 1;
  max-width: 1050px;
  width: 100%;
}

.tag--nexus {
  background: var(--neon-gold-08);
  border-color: var(--neon-gold);
  color: var(--neon-gold);
  font-weight: 700;
}

.about__title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  margin: 0.85rem 0 1.25rem;
  letter-spacing: -0.02em;
}

.about__hl {
  background: linear-gradient(90deg, var(--neon-gold), #f0d060);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about__section-label {
  font-size: 0.52rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--white-30);
  margin-bottom: 0.5rem;
}

/* ---- ROW 1 ---- */
.about__row-1 {
  display: grid;
  grid-template-columns: 1.3fr 1.2fr 0.5fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.about__founder-col {
  display: flex;
  flex-direction: column;
}

.about__founder {
  display: flex;
  gap: 0.85rem;
  padding: 1rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  flex: 1;
  position: relative;
  overflow: hidden;
}

.about__founder-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-gold), transparent);
}

.about__photo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  flex-shrink: 0;
}

.about__photo {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--neon-gold);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
}

.about__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__founder-role {
  font-size: 0.45rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--neon-gold);
  background: var(--neon-gold-08);
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
}

.about__founder-info {
  display: flex;
  flex-direction: column;
}

.about__founder-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--pure-white);
  margin-bottom: 0.35rem;
}

.about__bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.about__bullets li {
  font-size: 0.68rem;
  color: var(--white-40);
  padding-left: 0.75rem;
  position: relative;
  line-height: 1.35;
}

.about__bullets li strong {
  color: var(--white-70);
}

.about__bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.38em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--neon-gold);
  opacity: 0.5;
}

/* ---- PURPOSE ---- */
.about__purpose {
  display: flex;
  flex-direction: column;
}

.about__purpose-cards {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex: 1;
}

.about__pcard {
  padding: 0.7rem 0.85rem;
  border-radius: var(--radius-md, 8px);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s;
}

.about__pcard:hover {
  border-color: var(--neon-gold-15);
}

.about__pcard-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--neon-gold), transparent);
}

.about__pcard-icon {
  font-size: 0.8rem;
  display: inline-block;
  margin-right: 0.3rem;
}

.about__pcard h3 {
  display: inline;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--neon-gold);
}

.about__pcard p {
  font-size: 0.68rem;
  color: var(--white-40);
  line-height: 1.45;
  margin-top: 0.2rem;
}

/* ---- SQUAD ---- */
.about__squad {
  display: flex;
  flex-direction: column;
}

.about__squad-items {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
}

.about__squad-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.7rem;
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--white-40);
  flex: 1;
  transition:
    border-color 0.3s,
    background 0.3s;
}

.about__squad-item:hover {
  border-color: rgba(212, 175, 55, 0.3);
  background: rgba(212, 175, 55, 0.06);
}

.about__squad-num {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--neon-gold);
  line-height: 1;
  min-width: 20px;
}

/* ---- ROW 2 ---- */
.about__row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.about__block {
  display: flex;
  flex-direction: column;
}

.about__pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
}

.about__pillar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.about__pillar:hover {
  border-color: var(--neon-gold-15);
}

.about__pillar-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
}

.about__pillar-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--pure-white);
  line-height: 1.2;
}

.about__pillar-sub {
  display: block;
  font-size: 0.52rem;
  color: var(--white-25);
  margin-top: 0.05rem;
}

.about__values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
}

.about__value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s;
}

.about__value:hover {
  border-color: var(--neon-gold-15);
}

.about__value-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
}

.about__value-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--pure-white);
  line-height: 1.2;
}

.about__value-sub {
  display: block;
  font-size: 0.52rem;
  color: var(--white-25);
  margin-top: 0.05rem;
}

/* ---- INSIGHT ---- */
.about__insight {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding: 0.65rem 1.1rem;
  border-radius: var(--radius-md, 8px);
  background: var(--neon-gold-08);
  border: 1px solid var(--neon-gold-15);
}

.about__insight-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.about__insight p {
  font-size: 0.75rem;
  color: var(--white-50);
  line-height: 1.5;
  margin: 0;
}

.about__insight strong {
  color: var(--neon-gold);
}
</style>
