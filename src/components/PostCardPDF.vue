<template>
<vue3-simple-html2pdf
    ref="Vue3SimpleHtml2pdf"
    :options="pdfOptions"
    :filename="exportFilename"
  >
  <slot/>
</vue3-simple-html2pdf>
  <!-- <button @click="generatePdf()">make me a pdf</button> -->
</template>

<script>
//This is where it was failing, ended up using the fill path found in Node Modules and it worked /shrug...
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf/src/vue3-simple-html2pdf.vue";

export default {
    components: {
        Vue3SimpleHtml2pdf,
        // PostCard
    },
  name: "PostCardPDF",
  //We can make the pdfOptions props that we then pass to data found in App.vue
  props: {
      pdfOptions: {type: Object},
      filename: {type: String},
  },
  // Method to print PDF
  methods:{
   generatePdf(){
      this.$refs.Vue3SimpleHtml2pdf.download();
    }
  }
};
</script>
