<script setup lang="ts">
import { ref } from "vue";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const formData = ref<FormData>({
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
});

const services = ["Skin Rejuvenation", "Anti-Aging Treatments", "Body Contouring", "Wellness Therapy", "Consultation"];

const handleSubmit = () => {
  console.log("Booking submitted:", formData.value);
  alert("Thank you for your booking request! We will contact you shortly.");
};
</script>

<template>
  <section id="booking" class="booking-section">
    <div class="container">
      <div class="booking-section-header text-center">
        <span class="booking-section-eyebrow">Book Now</span>
        <h2 class="booking-section-title">Begin Your Transformation</h2>
        <p class="booking-section-subtitle">Schedule your consultation or treatment with our expert team</p>
      </div>

      <form class="booking-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="name">Full Name</label>
            <input id="name" v-model="formData.name" type="text" placeholder="Your full name" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email Address</label>
            <input id="email" v-model="formData.email" type="email" placeholder="your@email.com" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number</label>
            <input id="phone" v-model="formData.phone" type="tel" placeholder="+1 (555) 000-0000" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="service">Select Service</label>
            <select id="service" v-model="formData.service" required>
              <option value="" disabled>Choose a service</option>
              <option v-for="service in services" :key="service" :value="service">
                {{ service }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-row form-row-single">
          <div class="form-group">
            <label class="form-label" for="date">Preferred Date</label>
            <input id="date" v-model="formData.date" type="date" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="message">Special Requests (Optional)</label>
          <textarea id="message" v-model="formData.message" placeholder="Tell us about any specific concerns or preferences..."></textarea>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary booking-section-submit">Request Appointment</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.booking-section {
  background-color: var(--bg-surface);
  padding: var(--gap-section) 0;
}

.booking-section-header {
  margin-bottom: var(--gap-xl);
}

.booking-section-eyebrow {
  display: block;
  font-size: var(--font-sm);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--clinic-charcoal);
  margin-bottom: var(--gap-sm);
}

.booking-section-title {
  font-size: var(--font-2xl);
  letter-spacing: -1.1px;
  margin-bottom: var(--gap-md);
  color: var(--text-primary);
}

.booking-section-subtitle {
  font-size: var(--font-md);
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
}

.booking-form {
  background-color: var(--bg-elevated);
  border-radius: var(--radius-lg);
  padding: var(--gap-xl);
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid rgba(184, 134, 11, 0.15);
}

.booking-section-submit {
  min-width: 200px;
  margin-top: var(--gap-md);
}

@media (max-width: 768px) {
  .booking-form {
    padding: var(--gap-lg);
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
