<template>
  <div class="m-4 p-2 hello">
    <h1 :style="{ color: mainTextColor }" class="text-4xl">Pixel Art Generator</h1>
    <div class="sm:grid sm:grid-cols-10">
    <img :alt="prompt" @load="grabColors" class="text-center items-center p-2 col-span-4" v-if="imageData" v-bind:src="imageData" />
    <div class="col-span-6 p-2">
      <span :style="{color: mainTextColor}">Prompt: </span>
    <input class="w-full py-2 px-1 border-2" type="text" v-model="prompt" placeholder="Enter a prompt">
    <br>
    <span :style="{color: mainTextColor}">HuggingFace API Key: </span>
    <input class="w-full py-2 px-1 border-2" :type="showAPIKey ? 'text' : 'password'" v-model="hfAPIKey" placeholder="Enter a Valid HuggingFace API Key">
    <button :style="buttonStyle" class="py-2 px-1 rounded transition-all" @click="toggleAPIKeyVisibility">
      {{ showAPIKey ? 'Hide Key' : 'Show Key' }}
    </button>
    <br>
    <button @click="fetchImage" :style="buttonStyle" class="py-2 px-1 rounded transition-all">Image Gen</button>
    <button @click="downloadImage" :style="buttonStyle" class="py-2 px-1 rounded transition-all">Image Download</button>
    <button @click="generateRandomPrompt" :style="buttonStyle" class="py-2 px-1 rounded transition-all">Random Prompt</button>
    <br>
    <div v-if="isLoading" class="loading-container" :style="loadingStyle">
      <p :style="{ backgroundColor: mainBackgrundColor, color: mainTextColor }">Loading...</p>
    </div>
    <hr class="p-2">
    <div>
      <div v-if="mainColor" class="">
        <p class="p-4 rounded-md mb-4" :style="{ backgroundColor: mainBackgrundColor, color: mainTextColor }">Main Color: {{ mainColor }}</p>
      </div>
    </div>
    <hr class="p-2">
<p class="bg-gray-200 p-4 rounded-md mb-4 text-gray-700" :style="{ backgroundColor: mainBackgrundColor, color: mainTextColor }">
    Goto <a href="https://huggingface.co" class="text-blue-500 hover:underline transition-all">https://huggingface.co</a> and Generate your own API Key.
</p>
    <hr class="p-2">
<p class="bg-gray-200 p-4 rounded-md mb-4 text-gray-700" :style="{ backgroundColor: mainBackgrundColor, color: mainTextColor }">
    The image generation model utilized in this application is StableDiffusion, available through the HuggingFace repository. You can explore this powerful model by visiting the HuggingFace repository at <a href="https://huggingface.co/nerijs/pixel-art-xl" class="text-blue-500 hover:underline transition-all">https://huggingface.co/nerijs/pixel-art-xl</a> or simply by searching for 'nerijs/pixel-art-xl.' Be sure to check out these resources to discover more about the model and its capabilities.
</p>
<hr>
<div :style="{ backgroundColor: mainBackgrundColor, color: mainTextColor }" class="p-4 rounded-md mb-4">
      <p class="text-lg font-semibold">Author:</p>
      <p><a class="hover:underline hover:text-blue-500 transition-all" href="https://github.com/NotoriousArnav" target="_blank">github.com/NotoriousArnav</a></p>
      <p class="text-lg font-semibold mt-4">Project:</p>
      <p><a class="hover:underline hover:text-blue-500 transition" href="https://github.com/NotoriousArnav/PixelArtGenerator">https://github.com/NotoriousArnav/PixelArtGenerator</a></p>
      <p>Made with <span class="text-red-500">❤</span> using Vue.js and HuggingFace</p>
    </div>
    </div>
    </div>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  data () {
    return {
      prompt: 'Colorful sunset over the mountains',
      hfAPIKey: "",
      showAPIKey: false,
      imageData: 'https://drive.google.com/uc?id=1QtX64mXD0AvzGOmjOXDcHQxpa5ro0f6E',
      isLoading: false,
      mainColor: null,
      mainTextColor: 'black',
      palette: null,
      buttonStyle: {
        backgroundColor: 'buttonface',
        color: 'buttontext',
      },
      loadingStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
    }
  },
  methods: {
    toggleAPIKeyVisibility() {
      this.showAPIKey = !this.showAPIKey;
    },
    grabColors() {
      const colorThief = new ColorThief();
      const img = document.querySelector('img');

      if (img) {
        const color = colorThief.getColor(img);
        const palette = colorThief.getPalette(img, 8);

        this.mainColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        this.mainBackgrundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;
        this.palette = palette.map(c => `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
                // Update button and loading styles
        this.buttonStyle.backgroundColor = this.mainColor;
        this.buttonStyle.color = this.getContrastColor(this.mainColor);
        this.mainTextColor = this.getContrastColor(this.mainColor);
        this.loadingStyle.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;

      }
    },
    getContrastColor(color) {
      // Function to determine text color for better visibility based on background color
      const r = parseInt(color.slice(4, 7), 10);
      const g = parseInt(color.slice(9, 12), 10);
      const b = parseInt(color.slice(14, 17), 10);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? 'black' : 'white';
    },
    generateRandomPrompt() {
      const randomPrompts = [
      'Astronaut riding a horse',
      'Colorful sunset over the mountains',
      'Underwater cityscape',
      'Mystical forest with fireflies',
      'Galaxy far, far away',
      "Enchanted forest at twilight",
      "City skyline with neon lights",
      "Majestic dragon in a hidden cave",
      "Underwater coral reef paradise",
      "Steampunk airship above the clouds",
      "Vibrant festival in a magical realm",
      "Haunted castle on a moonlit hill",
      "Ancient ruins in a dense jungle",
      "Epic space battle among the stars",
      "Time-traveling adventurer's journey",
    ];


      const randomIndex = Math.floor(Math.random() * randomPrompts.length);
      this.prompt = randomPrompts[randomIndex];
    },
    async fetchImage() {
      this.isLoading = true
      const data = {
        inputs: this.prompt,
      };

      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/nerijs/pixel-art-xl',
          data,
          {
            headers: {
              Authorization: `Bearer ${this.hfAPIKey}`,
              'Content-Type': 'application/json',
            },
            responseType: 'blob', // This tells Axios to treat the response as a blob
          }
        );

        const result = response.data; // The response is already a blob
        const blob = new Blob([result], { type: response.headers['content-type'] });
        this.imageData = URL.createObjectURL(blob);
        document.body.style.backgroundImage = `url(${this.imageData})`;
        document.body.style.backdropFilter = 'blur(10px)'; // Add backdrop filter

        // You can use 'result' as an image
        console.log(result);
        this.isLoading = false

        // If you want to display the image in your Vue component, you can set it as a data property
        // this.imageData = result;
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    },
    downloadImage() {
      const link = document.createElement('a');
      link.href = this.imageData;
      link.download = 'generated-image.png';
      link.click();
    },
  },
}
</script>

<style>

body {
  background: url('../assets/bck.png');
}

</style>
