const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const score = ref(0);
    const submitClicked = ref(false);

    function setScore(event) {
      score.value = event.target.getAttribute("data-rating");
    }

    function submitScore() {
      submitClicked.value = true;
    }

    const scoreIsSelected = computed(() => {
      return score.value != 0;
    });

    return {
      score,
      setScore,
      scoreIsSelected,
      submitClicked,
      submitScore,
    };
  },
}).mount("#app");
