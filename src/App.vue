<template>
  <div>
    <Navbar />
    <div class="container" id="app">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>
