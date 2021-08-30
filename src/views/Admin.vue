<template>
  <div class="flex">
    <aside class="">
      <admin-bar/>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script>
import AdminBar from '@/components/AdminBar'
export default {
  name: 'Admin',
  components: { AdminBar }
}
</script>
