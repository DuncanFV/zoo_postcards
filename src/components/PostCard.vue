<template>
  <div class="postcard row">
    <div v-if="background !='default'" class="postcard--background column-left">
      <img :src="background" />
    </div>
    <div class="postcard-form-render column-right">
      <p class="recipient-name">Sent to: {{ outputRecipient }}</p>
      <p class="message-output">Your message is: {{ outputMsg }}</p>
      <p class="sender-name">Sent by: {{ outputSender }}</p>
    </div>
  </div>
</template>

<!--Ideas for another day
-add a blank "choose animal" default image
-filter search for animal backgrounds
-make states persist (doesn't reset when you refresh page)
-add email functionality
-save (download) your postcard
-option to change fonts
-upload your own image for background
-add stickers or something to overlay on the postcard (emojis?)
-Place and move text over the image
  -resize, recolor text?
-->

<script>
export default {
  name: 'PostCard',
  props: {
    outputRecipient: {type: String},
    outputMsg: {type: String},
    outputSender: {type: String},
    background: {type: String}
  },
  data() {
    return{
      isDefault: {type: Boolean}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard {
  display: grid;
  border: 2px;
  border-style: solid;
  border-color: black;
  margin-top: 35px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.postcard--background img {
  width: auto;
  height: 100%;
}
.column {
  float: left;
}
.column-left {
  width: 35%;
}
.column-right {
  width: 65%;
}
</style>

<!--
To Do:
-Make it look pretty
-->
