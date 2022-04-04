<template>
  <h1>Make Your Own Postcard!</h1>
  <PostCardForm
    @input-recipient="UpdateRecipient"
    @input-msg="UpdateMsg"
    @input-sender="UpdateSender"
    @background-animal="UpdateBackground"
  />
  <PostCard
    :outputRecipient="outputRecipient"
    :outputMsg="outputMsg"
    :outputSender="outputSender"
    :background="background"
  />
  <PostCardPDF 
    :ref="Vue3SimpleHtml2pdf"
    :options="pdfOptions"
    :filename="exportFilename" />
</template>

<script>
import PostCard from './components/PostCard.vue'
import PostCardForm from './components/PostCardForm.vue'
import PostCardPDF from './components/PostCardPDF.vue'

export default {
  name: 'App',
    created(){  //Page title
    document.title = 'Postcard Creator'
  },
  
  components: {
    PostCardForm,
    PostCard,
    PostCardPDF
  },
  data: function() {
    return {
      pdfContent: "PostCard",
      outputRecipient: "",
      outputMsg: "",
      outputSender: "",
      background: "",
      exportFilename: "download.pdf",
      // PDF Options
      pdfOptions: {
      margin: 15,
      image: {
        type: "pdf",
        quality: 1,
      },
      html2canvas: { scale: 3 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "p",
      },
    },
    };
  },
  methods: {
    // UpdatePostCard(formInputs) {
    //   this.outputRecipient = formInputs.recipient;
    //   this.outputMsg = formInputs.msg;
    //   this.outputSender = formInputs.sender;
    // },
    // generatePDF(){
    //   this.$refs.Vue3SimpleHtml2pdf.download();
    // },
    UpdateRecipient(outputRecipient) {
      this.outputRecipient = outputRecipient;
    },
    UpdateMsg(outputMsg) {
      this.outputMsg = outputMsg;
    },
    UpdateSender(outputSender) {
      this.outputSender = outputSender;
    },
    UpdateBackground(background) {
      this.background = background;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  display: flex;
  font-size: 36px;
}
</style>

<!--
To Do:
-fancy up the title (h1 above)
-->
