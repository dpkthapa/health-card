<template>
    <div v-if="errors.length" class="alert alert-danger mt-4">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
</template>

<script>
export default {
 props: ["errors"]
}
</script>

<style scoped>

</style>