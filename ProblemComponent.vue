<template>
  <div>
      <span v-html="boldNumbers(ageText)"></span>
      
      <p v-html="boldNumbers(ageText)"></p>
      <span>
        <span>this one will be selected but not the other one</span>
      </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
		ageText: '12 years old'
	}
  },
  methods: {
    boldNumbers(str) {
      return str.replace(/\d+/, (s) => ` <span class="font-semibold">${s}</span>`);
    }
  }
}
</script>
