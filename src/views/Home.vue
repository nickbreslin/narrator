"<template>
  <div class="home">
    <Header class="mb-3" />
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-3">Hello, Narrator.</h1>
        <p class="lead">
          This is a calculator to assist with lecture duration.
        </p>
      </div>

      <div class="mb-5">
        <div class="h1">
          <span class="badge badge-pill badge-primary">1</span> Length of copy
        </div>
        <div class="card card-body boxshadow">
          Lorum ipsum.
          <input class="form-control form-control-lg" v-model="wordCount" />
          <button class="btn btn-primary">{{ wordCount }}</button>
        </div>
      </div>

      <div class="h1">
        <span class="badge badge-pill badge-primary">2</span> Length of copy
      </div>
      <div class="card card-body boxshadow">
        <WPM />
      </div>
    </div>
    <Textarea />
    <!--
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
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import WPM from "@/components/WPM";
import Textarea from "@/components/Textarea";

export default {
  name: "Home",
  components: {
    Header,
    WPM,
    Textarea
  },
  data() {
    return {
      wordCount: "rere"
    };
  }
};
</script>
"
