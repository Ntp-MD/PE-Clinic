<script setup lang="ts">
import { useScrollReveal } from "../composables/useScrollReveal";

useScrollReveal();
</script>

<template>
  <section class="hero-section">
    <div class="hero-section-overlay"></div>
    <div class="container">
      <div class="hero-section-content scroll-reveal">
        <span class="hero-section-eyebrow">Premium Aesthetic Clinic</span>
        <h1 class="hero-section-title">
          Rediscover Your<br />
          <span class="hero-section-title-accent">Natural Beauty</span>
        </h1>
        <p class="hero-section-description">
          Experience world-class aesthetic treatments in our serene, luxury environment. Where medical precision meets spa-like tranquility.
        </p>
        <div class="hero-section-actions">
          <a href="#booking" class="btn btn-primary hero-section-btn">Book Consultation</a>
          <a href="#services" class="btn btn-ghost hero-section-btn">Explore Services</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-surface) 50%, var(--bg-elevated) 100%);
  overflow: hidden;
  padding-top: 80px;
}

.hero-section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(139, 115, 85, 0.05) 100%);
  pointer-events: none;
}

.hero-section-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
}

.hero-section-eyebrow {
  display: block;
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--clinic-charcoal);
  margin-bottom: var(--gap-md);
}

.hero-section-title {
  font-size: var(--font-3xl);
  line-height: 1;
  letter-spacing: -1.2px;
  margin-bottom: var(--gap-lg);
  color: var(--text-primary);
}

.hero-section-title-accent {
  color: var(--clinic-rose);
  font-weight: 400;
}

.hero-section-description {
  font-size: var(--font-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto var(--gap-xl);
  line-height: 1.6;
}

.hero-section-actions {
  display: flex;
  gap: var(--gap-md);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-section-btn {
  min-width: 180px;
}

@media (max-width: 768px) {
  .hero-section-title {
    font-size: calc(var(--font-xl) * 1.5);
  }

  .hero-section-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-section-btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
