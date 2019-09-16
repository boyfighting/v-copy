<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a-input v-model="copyText"></a-input>
    <a-button class="copyBtn" type="primary" v-copy="copyText">copy</a-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      copyText: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.hello {
  padding: 20px;
  width: 50%;
  margin: 0 auto;
}
.copyBtn {
  margin-top: 20px;
}
</style>
