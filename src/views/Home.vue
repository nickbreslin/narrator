<template>
  <div class="home">
    <Header class="mb-3 d-none" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 mt-5">
          <div class="h1 border-bottom mb-5 ">Narrator</div>

          <div class="mb-5">
            <div class="h2 font-weight-bold">
              Script length
            </div>
            <div class="card card-body boxshadow">
              <div
                class="btn-group mb-3"
                role="group"
                aria-label="Basic example"
              >
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
                  class="form-control form-control-lg"
                  type="number"
                  v-model="wordCount"
                />
              </div>

              <!-- Textarea -->
              <div class="copy-script-wrapper" v-if="this.activeCount === 1">
                <textarea class="form-control" rows="5" v-model="fullCopy" />

                <div class="total mt-3 h3 mb-0">
                  Total word count:
                  <span class="badge badge-primary">{{ fullWordCount }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-5">
            <div class="h2 font-weight-bold">
              Speaking rate
            </div>
            <div class="card card-body boxshadow">
              <div
                class="btn-group mb-3"
                role="group"
                aria-label="Basic example"
              >
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
                  <option value="110">110 WPM (Slow)</option>
                  <option value="130">130 WPM (Average)</option>
                  <option value="150">150 WPM (Fast)</option>
                </select>
              </div>

              <!-- Textarea -->
              <div class="copy-script-wrapper" v-if="this.activeWpm === 1">
                <p>
                  Press <b>Start Timer</b> and read the following sentence, then
                  press <b>Stop Timer</b>:
                </p>
                <div class="alert alert-light">
                  <p class="m-0">
                    Modern readability tests are designed to indicate
                    comprehension difficulty when reading a passage of
                    contemporary academic English.
                  </p>
                </div>

                <!-- Start Timer-->
                <button
                  v-bind:class="{
                    'btn-secondary': isTimerRunning,
                    'btn-success': !isTimerRunning
                  }"
                  @click="startTimer()"
                  class="btn mr-3"
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
                  class="btn"
                  :disabled="!isTimerRunning"
                >
                  Stop timer
                </button>
                <div class="total mt-3 h3 pt-3 mb-0 border-top">
                  Duration:
                  <span class="badge badge-primary">{{ getDuration }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-5">
            <div class="h2 font-weight-bold">
              Summary
            </div>
            <div class="card card-body boxshadow">
              <p class="mb-0">
                With a word count of
                <span class="font-weight-bold text-primary border-bottom">{{
                  getWordCount
                }}</span>
                and a speaking rate of
                <span class="font-weight-bold text-primary border-bottom">{{
                  getSpeakingRate
                }}</span>
                words per minute,this script is estimated to take
                <span class="font-weight-bold text-primary border-bottom">{{
                  getSpeakingRate
                }}</span
                >.
              </p>
            </div>
          </div>

          <div class="footer border-top mb-5 pt-3">
            <p class="m-0">
              Narrator made by
              <a href="https://www.nickbreslin.com">Nick Breslin</a>.
            </p>
            <p class="m-0">
              Proudly built with
              <a href="https://https://vuejs.org/">Vue</a> and
              <a href="https://getbootstrap.com/">Bootstrap</a>.
            </p>
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
      wpmType: 130,
      isTimerRunning: false,
      timer: 0,
      tsStart: 0,
      tsEnd: 0,
      duration: 0
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
      this.tsStart = Math.round(new Date().getTime());
    },
    stopTimer() {
      this.isTimerRunning = false;
      this.tsEnd = Math.round(new Date().getTime());
      this.duration = this.tsEnd - this.tsStart;
    }
  },
  computed: {
    fullWordCount() {
      if (this.fullCopy.length === 0) {
        return 0;
      }

      let words = this.fullCopy.split(" ");
      words = words.filter(e => e.trim().length);
      return words.length;
    },
    getDuration() {
      if (!this.duration) {
        return "n/a";
      }

      let newDur = this.duration / 1000;
      newDur = newDur.toFixed(2);

      return `${newDur} seconds`;
    },
    getWordCount() {
      if (!this.activeCount) {
        return this.wordCount;
      }

      return this.fullWordCount;
    },
    getSpeakingRate() {
      if (!this.activeWpm) {
        return this.wmpType;
      }

      return this.duration;
    }
  }
};
</script>
