<template>
  <div v-if="title" class="h1">{{ title }}</div>
  <div class="card mb-3">
    <div v-if="header" class="card-header">
      {{ header }}
    </div>
    <div class="card-body">
      {{ content }}
      <slot></slot>
    </div>
    <div v-if="footer" class="card-footer"></div>
    {{ footer }}
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    header: String,
    content: String,
    footer: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
