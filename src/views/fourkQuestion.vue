<template>
  <component :is="`fourtyk-q${questionId}`"></component>
</template>

<script>
import FourtykQ1 from "../components/fourtykq/FourtykQ1";
import FourtykQ2 from "../components/fourtykq/FourtykQ2";
import FourtykQ3 from "../components/fourtykq/FourtykQ3";
import FourtykQ4 from "../components/fourtykq/FourtykQ4";
import FourtykQ5 from "../components/fourtykq/FourtykQ5";
import FourtykQ6 from "../components/fourtykq/FourtykQ6";
import FourtykQ7 from "../components/fourtykq/FourtykQ7";

export default {
  name: "40k-question",
  components: {
    FourtykQ1,
    FourtykQ2,
    FourtykQ3,
    FourtykQ4,
    FourtykQ5,
    FourtykQ6,
    FourtykQ7,
  },
  data() {
    return {
      questionId: this.$route.params.id,
    };
  },
  // computed: {
  //   questionComp() {
  //     const app = this.questionName;
  //     return {
  //       app: () =>
  //         require(`../components/40kQ/FourtykQ${this.$route.params.id}.vue`)
  //           .default,
  //     };
  //   },
  // },
  // created() {
  //   this.loadComp();
  //   console.log(this.questionComp.app);
  // },
  // methods: {
  //   loadComp() {
  //     this.questionComp = {
  //       app: () =>
  //         import(`../components/fourtykq/FourtykQ${this.$route.params.id}`),
  //     };
  //   },
  // },
};
</script>
