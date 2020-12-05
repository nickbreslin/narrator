<template>
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
          <input class="form-control form-control-lg" v-model="wordCount" />
          <button class="btn btn-primary">{{ wordCount }}</button>
        </div>
        <div class="card card-body boxshadow">
          <textarea class="form-control" v-model="fullCopy" />
          <button class="btn btn-primary">{{ fullWordCount }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
//import WPM from "@/components/WPM";
//import Textarea from "@/components/Textarea";

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      wordCount: "rere",
      fullCopy: ""
    };
  },
  computed: {
    fullWordCount() {
      if (this.fullCopy.length === 0) {
        return 0;
      }

      /*
       * ! TODO hi.
       */
      let words = this.fullCopy.split(" ");
      words = words.filter(e => e.trim().length);
      return words.length;
    }
  }
};
</script>
