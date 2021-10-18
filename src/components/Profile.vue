<template>
  <div class="container">
    <img
      class="image"
      v-for="(image, imageIndex) in content.images"
      :src="image"
      @click="index = imageIndex"
      v-bind:key="imageIndex"
    />
  </div>
</template>

<script>
import ProfileService from "../services/profile.service";

export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      content: {
        images: [],
      },
    };
  },
  mounted() {
    ProfileService.getImages(localStorage.getItem("accessToken")).then(
      (response) => {
        for (const raw of response.data.data) {
          this.content.images.push(raw.url)
        }
      },
      (error) => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );

    if (!this.currentUser) {
      this.$router.push("/login")
    }
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}

.image {
  width: 200px;
  height: 200px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
</style>
