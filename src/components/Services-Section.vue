<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";

useScrollReveal();

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services = ref<Service[]>([
  {
    id: 1,
    title: "Skin Rejuvenation",
    description: "Advanced laser and light therapies to restore youthful, radiant skin texture and tone.",
    icon: "✨",
  },
  {
    id: 2,
    title: "Anti-Aging Treatments",
    description: "Non-surgical solutions including injectables, fillers, and collagen-boosting therapies.",
    icon: "🌿",
  },
  {
    id: 3,
    title: "Body Contouring",
    description: "Precision sculpting treatments to refine your silhouette with cutting-edge technology.",
    icon: "💎",
  },
  {
    id: 4,
    title: "Wellness Therapy",
    description: "Holistic treatments combining medical expertise with spa relaxation for complete rejuvenation.",
    icon: "🕊️",
  },
]);
</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="services-section-header text-center scroll-reveal">
        <span class="services-section-eyebrow">Our Expertise</span>
        <h2 class="services-section-title">Premium Aesthetic Services</h2>
        <p class="services-section-subtitle">Tailored treatments delivered by certified specialists in our state-of-the-art facility</p>
      </div>

      <div class="services-section-grid">
        <article v-for="service in services" :key="service.id" class="card card-service services-card scroll-reveal">
          <span class="services-card-icon">{{ service.icon }}</span>
          <h3 class="services-card-title">{{ service.title }}</h3>
          <p class="services-card-description">{{ service.description }}</p>
          <a href="#booking" class="services-card-link">Learn More →</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--bg-surface);
  padding: var(--gap-section) 0;
}

.services-section-header {
  margin-bottom: var(--gap-xl);
}

.services-section-eyebrow {
  display: block;
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--clinic-charcoal);
  margin-bottom: var(--gap-sm);
}

.services-section-title {
  font-size: var(--font-2xl);
  letter-spacing: -1.1px;
  margin-bottom: var(--gap-md);
  color: var(--text-primary);
}

.services-section-subtitle {
  font-size: var(--font-md);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.services-section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--gap-lg);
}

.services-card {
  padding: var(--gap-xl);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.services-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(139, 115, 85, 0.15);
}

.services-card-icon {
  display: block;
  font-size: calc(var(--font-xl) * 1.5);
  margin-bottom: var(--gap-md);
}

.services-card-title {
  font-size: var(--font-lg);
  margin-bottom: var(--gap-sm);
  color: var(--text-primary);
}

.services-card-description {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--gap-md);
}

.services-card-link {
  font-size: var(--font-sm);
  color: var(--clinic-charcoal);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.services-card-link:hover {
  color: var(--accent-hover);
}
</style>
