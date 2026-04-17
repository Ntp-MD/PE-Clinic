<script setup lang="ts">
import { ref } from "vue";

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

const contactInfo = ref<ContactInfo[]>([
  {
    icon: "📍",
    title: "Visit Us",
    details: ["123 Wellness Avenue", "Suite 500, Beverly Hills", "CA 90210"],
  },
  {
    icon: "📞",
    title: "Call Us",
    details: ["+1 (555) 123-4567", "Mon-Fri: 9AM - 7PM", "Sat: 10AM - 4PM"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    details: ["hello@pe-clinic.com", "bookings@pe-clinic.com", "We reply within 24hrs"],
  },
]);
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-section-grid">
        <div class="contact-section-info">
          <span class="contact-section-eyebrow">Get in Touch</span>
          <h2 class="contact-section-title">Contact Us</h2>
          <p class="contact-section-description">
            Ready to begin your journey? Reach out to us for consultations, questions, or to schedule your visit.
          </p>

          <div class="contact-section-cards">
            <div v-for="info in contactInfo" :key="info.title" class="contact-section-card">
              <span class="contact-section-card-icon">{{ info.icon }}</span>
              <h3 class="contact-section-card-title">{{ info.title }}</h3>
              <p v-for="(detail, index) in info.details" :key="index" class="contact-section-card-detail">
                {{ detail }}
              </p>
            </div>
          </div>
        </div>

        <div class="contact-section-form-wrapper">
          <form class="contact-form">
            <h3 class="contact-form-title">Send a Message</h3>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="contact-name">Name</label>
                <input id="contact-name" type="text" placeholder="Your name" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">Email</label>
                <input id="contact-email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-subject">Subject</label>
              <input id="contact-subject" type="text" placeholder="How can we help?" />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary contact-section-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--bg-primary);
  padding: var(--gap-section) 0;
}

.contact-section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-xl);
  align-items: start;
}

.contact-section-eyebrow {
  display: block;
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--clinic-charcoal);
  margin-bottom: var(--gap-sm);
}

.contact-section-title {
  font-size: var(--font-2xl);
  letter-spacing: -1.1px;
  margin-bottom: var(--gap-md);
  color: var(--text-primary);
}

.contact-section-description {
  font-size: var(--font-md);
  color: var(--text-secondary);
  margin-bottom: var(--gap-xl);
  max-width: 400px;
}

.contact-section-cards {
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
}

.contact-section-card {
  background-color: var(--bg-surface);
  border-radius: var(--radius-md);
  padding: var(--gap-lg);
  border-left: 3px solid var(--clinic-charcoal);
}

.contact-section-card-icon {
  display: block;
  font-size: calc(var(--font-lg) * 1.2);
  margin-bottom: var(--gap-sm);
}

.contact-section-card-title {
  font-size: var(--font-md);
  margin-bottom: var(--gap-sm);
  color: var(--text-primary);
}

.contact-section-card-detail {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  margin-bottom: var(--gap-xs);
}

.contact-section-card-detail:last-child {
  margin-bottom: 0;
}

.contact-form-title {
  font-size: var(--font-lg);
  margin-bottom: var(--gap-lg);
  color: var(--text-primary);
  text-align: center;
}

.contact-section-submit {
  width: 100%;
  margin-top: var(--gap-md);
}

@media (max-width: 992px) {
  .contact-section-grid {
    grid-template-columns: 1fr;
  }

  .contact-section-cards {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contact-section-card {
    flex: 1;
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .contact-section-cards {
    flex-direction: column;
  }

  .contact-section-card {
    min-width: auto;
  }
}
</style>
