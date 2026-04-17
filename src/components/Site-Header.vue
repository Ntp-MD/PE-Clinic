<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";

const isMenuOpen = ref(false);
useScrollReveal();

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Book Now", href: "#booking" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <header class="site-header">
    <div class="container">
      <nav class="site-header-nav">
        <a href="#" class="site-header-logo">
          <span class="site-header-logo-text">PE-Clinic</span>
        </a>

        <ul class="site-header-menu scroll-reveal" :class="{ 'is-open': isMenuOpen }">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" class="site-header-link">{{ link.name }}</a>
          </li>
        </ul>

        <button class="site-header-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu">
          <span class="site-header-toggle-bar"></span>
          <span class="site-header-toggle-bar"></span>
          <span class="site-header-toggle-bar"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(250, 248, 243, 0.95);
  backdrop-filter: blur(10px);
  padding: var(--gap-sm) 0;
  border-bottom: 1px solid rgba(139, 115, 85, 0.1);
}

.site-header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header-logo {
  font-size: var(--font-xl);
  font-weight: 300;
  letter-spacing: -1.2px;
  color: var(--text-primary);
}

.site-header-logo-text {
  color: var(--clinic-charcoal);
}

.site-header-menu {
  display: flex;
  gap: var(--gap-lg);
  list-style: none;
}

.site-header-link {
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.site-header-link:hover {
  color: var(--accent-hover);
}

.site-header-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--gap-xs);
}

.site-header-toggle-bar {
  width: 25px;
  height: 2px;
  background-color: var(--text-primary);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .site-header-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: var(--bg-surface);
    flex-direction: column;
    padding: var(--gap-lg);
    gap: var(--gap-md);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .site-header-menu.is-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .site-header-toggle {
    display: flex;
  }
}
</style>
