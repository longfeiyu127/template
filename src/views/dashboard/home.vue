<template >
  <div>
    home
    <Tabs></Tabs>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import Tabs from '@/components/Tabs.vue'
export default {
  name: 'home',
  components: {
    Tabs
  },
  computed: {
    // ...mapGetters(['userinfoGetter'])
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
