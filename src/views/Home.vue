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
          <div class="btn-group mb-3" role="group" aria-label="Basic example">
            <button
              type="button"
              v-bind:class="{ active: this.activeCopy === 0 }"
              @click="setActiveCopy(0)"
              class="btn btn-secondary"
            >
              Word Count
            </button>
            <button
              type="button"
              v-bind:class="{ active: this.activeCopy === 1 }"
              @click="setActiveCopy(1)"
              class="btn btn-secondary"
            >
              Script
            </button>
          </div>

          <!-- Word Count -->
          <div class="copy-script-wrapper" v-if="this.activeCopy === 0">
            <input
              class="form-control form-control-lg mb-3"
              type="number"
              v-model="wordCount"
            />
          </div>

          <!-- Textarea -->
          <div class="copy-script-wrapper" v-if="this.activeCopy === 1">
            <textarea class="form-control" rows="5" v-model="fullCopy" />

            <div class="total mt-3 h3">
              Total Word Count:
              <span class="badge badge-primary">{{ fullWordCount }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <div class="h1">
          <span class="badge badge-pill badge-primary">1</span> Words per minute
        </div>
        <div class="card card-body boxshadow">
          <input
            class="form-control form-control-lg"
            type="number"
            v-model="wordCount"
          />
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
      fullCopy: "",
      activeCopy: 1
    };
  },
  methods: {
    setActiveCopy(id) {
      this.activeCopy = id;
    }
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
