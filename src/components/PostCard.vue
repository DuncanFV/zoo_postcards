<template>
  <div class="postcard row">
    <div v-if="background !='default'" class="postcard--background column column-right">
      <img :src="background" />
    </div>
    <div class="postcard-form-render column column-left">
      <p class="recipient-name"><strong>Sent to: </strong>{{ outputRecipient }}</p>
      <p class="message-output"><strong>Your message is: </strong>{{ outputMsg }}</p>
      <p class="sender-name"><strong>Sent by: </strong>{{ outputSender }}</p>
    </div>
  </div>
  <button class="button send-postcard">Send Postcard</button>
  <button class="button reset-postcard" @click="resetPostcard()">Reset Postcard</button>
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
  methods: {
    resetPostcard: function() {   //Resets Postcard
      return
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard {
  display: flex;
  border: 2px solid black;
  margin-top: 35px;
  height: 400px;
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
  height: 75%;
}
.row {
  display: flex;
  padding: 25px;
}
.column {
  flex: 50%;
}
.column-left{
  padding-left: 25px;
  flex: 50%;
}
.column-right {
  flex: 50%;
  padding-right: 25px;
  border-right: 1px solid black;

}
.button {
  margin-top: 10px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 14px;
  width: 160px;
  height: 40px;
  color: white;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.reset-postcard {
  margin-left: 2.5%;
  background-color: lightcoral;
  color: black;
}
</style>

<!--
To Do:
-Make it look pretty
-->
