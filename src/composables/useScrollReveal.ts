import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollReveal = () => {
  const observer = ref<IntersectionObserver | null>(null)
  
  const observeElements = () => {
    const elements = document.querySelectorAll('.scroll-reveal')
    
    if (!elements.length) return
    
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, options)
    
    elements.forEach(element => {
      observer.value?.observe(element)
    })
  }
  
  const cleanup = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }
  
  onMounted(() => {
    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      observeElements()
    })
  })
  
  onUnmounted(() => {
    cleanup()
  })
  
  return {
    observeElements,
    cleanup
  }
}
