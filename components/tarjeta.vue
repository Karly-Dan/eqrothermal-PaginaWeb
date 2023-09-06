<template>
<div class="carta">
  <img src="../assets/revenido.png" class="imagen-servicios">
  <p class="nombre-servicio">{{ nombre }}</p>
</div>
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
      default: '',
      }
  }
    
}
</script>

<style>
.carta {
  border-radius: 5px;
  position: relative;
  height: 192px;
  margin-bottom: 40px;
}
.nombre-servicio {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
}
.imagen-servicios {
  max-width: 160px;
}
@media (min-width: 1024px) {
  
  .carta {
    margin-bottom: 170px !important;
  }
  .nombre-servicio {
    top: 77% !important;
  }
}

</style>