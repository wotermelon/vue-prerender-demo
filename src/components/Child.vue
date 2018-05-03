<template>
  <div>
    <h1>Child page</h1>
    <h2>{{ $route.params }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Child'
}
</script>
