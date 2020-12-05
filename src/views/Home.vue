<template>
  <div class="home">
    <Header />
    <div class="row">
      <div class="col">1. Words per minute. 2. Length of content. <WPM /></div>
      <div class="col">
        <div class="h1">Results</div>
      </div>
    </div>
    <div class="card">
      <div class="h1">1. Words per minute</div>
    </div>
    <input class="form-control form-control-lg" type="text" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import WPM from "@/components/WPM";

export default {
  name: "Home",
  components: {
    Header,
    WPM
  }
};
</script>
