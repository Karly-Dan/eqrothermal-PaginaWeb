<template>
  <div class="contenedor-input">
    <label for="">{{ titulo }}</label>
    <input type="text" class="input" :placeholder="placeholderInput" @input="(event) => $emit('update:modelValue', event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    placeholderInput: {
      type: String,
      default: '',
    },
    titulo: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  emits: ['update:modelValue'],
  
} 
</script>

<style>
.contenedor-input {
  display: grid;
  margin-bottom: 10px;
  cursor: pointer;
}
.input {
  border: 1px solid #707070;
  border-radius: 3px;
  height: 30px;
  outline: none;
}
label {
  margin-bottom: 4px;
}
@media (min-width: 1024px) {
  .input {
    width: 432px;
  }
}
</style>