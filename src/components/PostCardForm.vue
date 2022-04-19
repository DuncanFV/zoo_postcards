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
      </select>

      <label>Or search for an animal: </label>
      <input 
        class = "input animal-search"
        type = "text"
        placeholder = "--Search for an animal--"
        v-model = "searchTerm"
      />
      <ul v-if="searchAnimals.length">
        <li>
          Showing {{ searchAnimals.length }} of {{ backgrounds.length }} results
        </li>
        <li
          v-for="animal in searchAnimals"
          :key="animal.title"
          @click="selectAnimal(animal.title)"
        >
          {{ animal.title }}
        </li>
      </ul>

      <br>
      <button class="button" @click="scrollDown()"> Create Postcard </button>
    </div>
  </div>
</template>

<script>
import {backgrounds} from './backgrounds'
import {ref, computed} from 'vue'

export default {

  setup() {
    let searchTerm = ref('')

    const searchAnimals = computed(() => {
      if (searchTerm.value === '') {
        return []
      }

    let matches = 0

    //Problem is that the tutorial imported a json file to use,
    //that's what "backgrounds" is supposed to be, so find a way to
    //get backgrounds in here

    // Put backgrounds and mounted in separate component/file, then import?
    return backgrounds.value.filter(animal => {
      if (
        animal.title.toLowerCase().includes(searchTerm.value.toLowerCase())
        && matches < 10
      ) {
        matches++
        return animal
      }
    })
    });

    const selectAnimal = (animal) => {
      selectedAnimal.value = animal
      searchTerm.value = ''
    }

    let selectedAnimal = ref('')

    return {
      // backgrounds,
      searchTerm,
      searchAnimals,
      selectAnimal,
      selectedAnimal
    }
  },

  name: 'PostCardForm',
  data() {
    return{
      backgrounds: this.selectedImage,
      selectedImage: "default"
    }
  },
  computed: { //Sort the list alphabetically
    /* sortedArray() { //Doesn't work
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
    } */
  },

  mounted() { //Where we get the data from the json file
    // fetch('https://nationalzoo.si.edu/pyd/animals')
    //   .then(res => res.json())
    //   .then(data => this.backgrounds = data)
    //   .then(this.backgrounds.sort((a, b) => b.title.localeCompare(a.title)))
    //   .catch(err => console.log(err.message))
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
      //if this.Genus and Species? That's what it is in the json file
      return this.selectedImage;
    },
    // increment() { //testing vuex states
    //   this.$store.commit('increment');
    //   console.log(this.$store.state.count);
    // },
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

.animal-search {
  padding-top: 10px;
}

.select-label {
    padding-top: 10px;
    padding-bottom: 10px;
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