<template>
  <div class="postcard-form-input">
    <div class="form-input">
      <label>Sender:  </label>
      <br><br>
      <input
        class="input"
        v-model="sender"
        @change="submitSender"
      />
    </div>
    <div class="form-input">
      <label>Recipient: </label>
      <br><br>
      <input 
        class="input"
        v-model="recipient"
        @change="submitRecipient"
      />
    </div>
    <div class="form-input">
      <label>Enter message: </label>
      <br><br>
      <input
        class="input msg-input-box"
        v-model="msg"
        @change="submitMsg"
      />
    </div>
    <div class="dropdown">
      <label class="select-label">Select Background: </label>
      <select 
        class="background-dropdown"
        v-model="selectedImage"
        @change="updateImage($event)" 
        >
        <option value="default" selected>--Select a background--</option>
        <option
          v-for="(image, index) in backgrounds" 
          :key="index"
          :description="image.title"
          :value="image.image_large"
          > {{image.title}} </option>
          <!-- Do we need to sort by {{image.title}}? Or just image.title? -->
      </select>
      <br>
      <button class="button" @click="scrollDown()"> Create Postcard </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCardForm',
  data() {
    return{
      backgrounds: [],
      selectedImage: "default",
    }
  },
  computed: { //Sort the list alphabetically
    sortedArray() { //Doesn't work
      let sortedNames = this.backgrounds;
      // sortedNames.sort(); //Of course this doesn't work, that's too easy
      
      sortedNames = sortedNames.sort((a,b) => {
        let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
      return sortedNames;
    }
  },
  mounted() { //Where we get the data from the json file
    fetch('https://nationalzoo.si.edu/pyd/animals')
      .then(res => res.json())
      .then(data => this.backgrounds = data)
      .then(this.backgrounds.sort((a, b) => b.title.localeCompare(a.title)))
      .catch(err => console.log(err.message))
  },
  methods: {
    //form-inputs is what it is being emitted as (how PostCard will receive it), formInputs is the actual data being passed

    submitRecipient: function() {
      this.$emit("input-recipient", this.recipient);
    },
    submitMsg: function() {
      this.$emit("input-msg", this.msg);
    },
    submitSender: function() {
      this.$emit("input-sender", this.sender);
    },
    updateImage: function(event) {  //tells app to change the image
      this.selectedImage = event.target.value;
      this.$emit("background-animal", this.selectedImage);
      //console.log(event.target.value);
      return this.selectedImage;
    },
    // changeBackground: function() {  //tells app what the new image will be
    //   this.$emit("background-animal", this.selectedImage);
    //   return;
    // },
    increment() { //testing vuex states
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
    scrollDown(){
      window.scrollTo(0, 670);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard-form-input {
  padding: 20px;
  background-color: lightblue;
}

.input {
  height: 25px;
  width: 100%;
  max-width: 500px;
  outline: none;
}

.form-input {
  margin-bottom: 25px;
}

.form-input label {
  position: relative;
  top: 10px;
}

.msg-input-box {
  height: 100px;
}

.background-dropdown {
  padding: 10px;
  position: relative;
  top: 10px;
}

.select-label {
    padding: 10px;
    position: relative;
    top: 10px;
}

.button {
  margin-top: 50px;
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

</style>