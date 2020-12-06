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
          <span class="badge badge-pill badge-primary">1</span> Word count
        </div>
        <div class="card card-body boxshadow">
          <div class="btn-group mb-3" role="group" aria-label="Basic example">
            <button
              type="button"
              v-bind:class="{ active: this.activeCount === 0 }"
              @click="setActiveCount(0)"
              class="btn btn-secondary"
            >
              Word Count
            </button>
            <button
              type="button"
              v-bind:class="{ active: this.activeCount === 1 }"
              @click="setActiveCount(1)"
              class="btn btn-secondary"
            >
              Script
            </button>
          </div>

          <!-- Word Count -->
          <div class="copy-script-wrapper" v-if="this.activeCount === 0">
            <input
              class="form-control form-control-lg mb-3"
              type="number"
              v-model="wordCount"
            />
          </div>

          <!-- Textarea -->
          <div class="copy-script-wrapper" v-if="this.activeCount === 1">
            <textarea class="form-control" rows="5" v-model="fullCopy" />

            <div class="total mt-3 h3">
              Total word count:
              <span class="badge badge-primary">{{ fullWordCount }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <div class="h1">
          <span class="badge badge-pill badge-primary">2</span> Words per minute
        </div>
        <div class="card card-body boxshadow">
          <div class="btn-group mb-3" role="group" aria-label="Basic example">
            <button
              type="button"
              v-bind:class="{ active: this.activeWpm === 0 }"
              @click="setActiveWpm(0)"
              class="btn btn-secondary"
            >
              Standard
            </button>
            <button
              type="button"
              v-bind:class="{ active: this.activeWpm === 1 }"
              @click="setActiveWpm(1)"
              class="btn btn-secondary"
            >
              Personalized
            </button>
          </div>

          <!-- Word Count -->
          <div class="copy-script-wrapper" v-if="this.activeWpm === 0">
            <select class="form-control" v-model="wpmType">
              <option value="0">110 WPM (Slow)</option>
              <option value="1">130 WPM (Average)</option>
              <option value="2">150 WPM (Fast)</option>
            </select>
          </div>

          <!-- Textarea -->
          <div class="copy-script-wrapper" v-if="this.activeWpm === 1">
            <div class="alert alert-light">
              Read the following:
            </div>

            <!-- Start Timer-->
            <button
              v-bind:class="{
                'btn-secondary': isTimerRunning,
                'btn-success': !isTimerRunning
              }"
              @click="startTimer()"
              class="btn"
              :disabled="isTimerRunning"
            >
              Start timer
            </button>

            <!-- Stop Timer -->
            <button
              v-bind:class="{
                'btn-secondary': !isTimerRunning,
                'btn-danger': isTimerRunning
              }"
              @click="stopTimer()"
              class="btn ml-3"
              :disabled="!isTimerRunning"
            >
              Stop timer
            </button>
            <div class="total mt-3 h3">
              Total word count:
              <span class="badge badge-primary">{{ fullWordCount }}</span>
            </div>
          </div>
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
      wordCount: 0,
      fullCopy: "",
      activeCount: 0,
      activeWpm: 1,
      wpmType: 1,
      isTimerRunning: false,
      timer: 0
    };
  },
  methods: {
    setActiveCount(id) {
      this.activeCount = id;
    },
    setActiveWpm(id) {
      this.activeWpm = id;
    },
    startTimer() {
      this.isTimerRunning = true;
      this.timer = 0;
    },
    stopTimer() {
      this.isTimerRunning = false;
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
