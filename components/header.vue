<template>
    <main>
        <div class="contenedor-header">
            <div class="contenedor-imagen-header">
                <img src="../assets/logost.png" alt="imagen" class="logo-header">
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style>
.contenedor-header {
    box-shadow: 0px 3px 6px #00000029;
    text-align: center;
    padding: 10px;
}
.logo-header {
    width: 160px;
}
.contenedor-imagen-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}
@media (max-width: 776px) {

}
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-header {
        display: flex;
        justify-content: space-around;
    }
    

}
@media (min-width: 1024px) {
    .contenedor-header {
        box-shadow: #EAEAEA;
        height: 50px;
    }
    
    
}
h1 {
    font-size: 20px;
}
</style>