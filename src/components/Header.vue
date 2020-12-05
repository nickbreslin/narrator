<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="/docs/4.0/assets/brand/bootstrap-solid.svg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Narrator
    </a>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
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
