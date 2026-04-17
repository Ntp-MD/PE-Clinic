<script setup lang="ts">
const footerLinks = {
  services: [
    { name: "Skin Rejuvenation", href: "#services" },
    { name: "Anti-Aging", href: "#services" },
    { name: "Body Contouring", href: "#services" },
    { name: "Wellness", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "Facebook", icon: "👤", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" },
];
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer-grid">
        <div class="site-footer-brand">
          <a href="#" class="site-footer-logo">
            <span class="site-footer-logo-text">PE-Clinic</span>
          </a>
          <p class="site-footer-tagline">Where medical precision meets spa-like serenity. Your journey to natural beauty begins here.</p>
          <div class="site-footer-social">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" class="site-footer-social-link" :aria-label="social.name">
              {{ social.icon }}
            </a>
          </div>
        </div>

        <div class="site-footer-links">
          <div class="site-footer-column">
            <h4 class="site-footer-column-title">Services</h4>
            <ul class="site-footer-list">
              <li v-for="link in footerLinks.services" :key="link.name">
                <a :href="link.href" class="site-footer-link">{{ link.name }}</a>
              </li>
            </ul>
          </div>

          <div class="site-footer-column">
            <h4 class="site-footer-column-title">Company</h4>
            <ul class="site-footer-list">
              <li v-for="link in footerLinks.company" :key="link.name">
                <a :href="link.href" class="site-footer-link">{{ link.name }}</a>
              </li>
            </ul>
          </div>

          <div class="site-footer-column">
            <h4 class="site-footer-column-title">Support</h4>
            <ul class="site-footer-list">
              <li v-for="link in footerLinks.support" :key="link.name">
                <a :href="link.href" class="site-footer-link">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="site-footer-bottom">
        <p class="site-footer-copyright">© 2024 PE-Clinic. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--bg-elevated);
  padding: var(--gap-xl) 0 var(--gap-lg);
  border-top: 1px solid rgba(184, 134, 11, 0.15);
}

.site-footer-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gap-xl);
  margin-bottom: var(--gap-xl);
}

.site-footer-logo {
  display: block;
  font-size: var(--font-xl);
  font-weight: 300;
  letter-spacing: -1.2px;
  margin-bottom: var(--gap-md);
}

.site-footer-logo-text {
  color: var(--clinic-charcoal);
}

.site-footer-tagline {
  font-size: var(--font-sm);
  color: var(--text-muted);
  max-width: 300px;
  margin-bottom: var(--gap-lg);
  line-height: 1.6;
}

.site-footer-social {
  display: flex;
  gap: var(--gap-sm);
}

.site-footer-social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-surface);
  border-radius: var(--radius-sm);
  font-size: var(--font-md);
  transition: all 0.3s ease;
}

.site-footer-social-link:hover {
  background-color: var(--clinic-charcoal);
  transform: translateY(-2px);
}

.site-footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-lg);
}

.site-footer-column-title {
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-primary);
  margin-bottom: var(--gap-md);
}

.site-footer-list {
  list-style: none;
}

.site-footer-list li {
  margin-bottom: var(--gap-xs);
}

.site-footer-link {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.site-footer-link:hover {
  color: var(--clinic-charcoal);
}

.site-footer-bottom {
  padding-top: var(--gap-lg);
  border-top: 1px solid var(--bg-surface);
  text-align: center;
}

.site-footer-copyright {
  font-size: var(--font-xs);
  color: var(--text-muted);
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .site-footer-grid {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .site-footer-tagline {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
  }

  .site-footer-social {
    justify-content: center;
  }

  .site-footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .site-footer-links {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
