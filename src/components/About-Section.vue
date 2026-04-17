<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";

useScrollReveal();

const stats = ref([
  { number: "15+", label: "Years Experience" },
  { number: "10K+", label: "Happy Clients" },
  { number: "50+", label: "Expert Specialists" },
  { number: "98%", label: "Satisfaction Rate" },
]);
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-section-grid">
        <div class="about-section-content scroll-reveal">
          <span class="about-section-eyebrow">About Us</span>
          <h2 class="about-section-title">Where Beauty Meets Science</h2>
          <p class="about-section-text">
            At PE-Clinic, we believe that true beauty emanates from within. Our team of board-certified physicians and aesthetic specialists combine
            medical expertise with an artistic eye to deliver natural, harmonious results.
          </p>
          <p class="about-section-text">
            Our sanctuary-like facility offers the perfect environment for your transformation journey. Every treatment is personalized, every detail
            considered, ensuring you receive the premium care you deserve.
          </p>
          <div class="about-section-actions">
            <a href="#booking" class="btn btn-outline about-section-btn">Schedule Visit</a>
          </div>
        </div>

        <div class="about-section-visual scroll-reveal">
          <div class="about-section-image-wrapper">
            <div class="about-section-image-placeholder">
              <span class="about-section-image-icon">🌸</span>
              <p class="about-section-image-text">Serene Treatment Space</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section-stats">
        <div v-for="stat in stats" :key="stat.label" class="about-section-stat scroll-reveal">
          <span class="about-section-stat-number">{{ stat.number }}</span>
          <span class="about-section-stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--bg-primary);
  padding: var(--gap-section) 0;
}

.about-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-xl);
  align-items: center;
  margin-bottom: var(--gap-xl);
}

.about-section-eyebrow {
  display: block;
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--clinic-charcoal);
  margin-bottom: var(--gap-sm);
}

.about-section-title {
  font-size: var(--font-2xl);
  letter-spacing: -1.1px;
  margin-bottom: var(--gap-lg);
  color: var(--text-primary);
}

.about-section-text {
  font-size: var(--font-md);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--gap-md);
}

.about-section-actions {
  margin-top: var(--gap-lg);
}

.about-section-btn {
  min-width: 160px;
}

.about-section-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-section-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4/5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-elevated), var(--bg-surface));
}

.about-section-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-md);
}

.about-section-image-icon {
  font-size: calc(var(--font-xl) * 2);
}

.about-section-image-text {
  font-size: var(--font-md);
  color: var(--text-muted);
  text-align: center;
}

.about-section-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-lg);
  padding-top: var(--gap-xl);
  border-top: 1px solid var(--bg-elevated);
}

.about-section-stat {
  text-align: center;
  padding: var(--gap-md);
}

.about-section-stat-number {
  display: block;
  font-size: var(--font-2xl);
  font-weight: 300;
  color: var(--clinic-charcoal);
  letter-spacing: -1px;
  margin-bottom: var(--gap-xs);
}

.about-section-stat-label {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 992px) {
  .about-section-grid {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .about-section-actions {
    display: flex;
    justify-content: center;
  }

  .about-section-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .about-section-stats {
    display: flex;
    flex-direction: column;
  }
}
</style>
