<template>
  <main>
    <header-vue/>
    <main>
      <div class="contenedor-acerca-de-nosotros">
        <div>
          <img src="../assets/logo.png" alt="img" class="logo">
          <p class="texto-nosotros">Somos una empresa que ofrece servicio de tratamiento térmico utilizando hornos eléctricos porque somos responsables con el medio ambiente. Desarrollando una cultura ecológica de calidad y tecnología que nos permite tener clientes reconocidos en el sector industrial. </p>
          <p class="pregunta">¿Por que elegirnos?</p>
          <div class="contenedor-texto-icono">
            <div class="contenedor-iconos">
              <img src="../assets/tiempo.png" alt="" class="icono-tiempo"> 
              <img src="../assets/ecologico.png" alt="" class="icono-ecologico">
            </div>
            <div>
              <p>Contamos con los mejores tiempos de entrega.</p>
              <p>Ecológico con el medio ambiente.</p>
            </div>
          </div>
        </div>
        <div>
          <img src="../assets/horno.jpeg" alt="img" class="imagen-nosotros">
        </div>
      </div>

      <div>
        <h1 class="titulo-servicios">Servicios</h1>
      </div>
      <div class="contenedor-servicios">
        <div class="contenedor-tarjetas">
          <div class="carta">
            <img src="../assets/temple.png" class="imagen-servicios">
            <p class="nombre-servicio">Temple</p>
          </div>
          <div class="carta">
            <img src="../assets/normalizado.png" class="imagen-servicios">
            <p class="nombre-servicio">Normalizado</p>
          </div>
          <div class="carta">
            <img src="../assets/revenido.png" class="imagen-servicios">
            <p class="nombre-servicio">Revenido</p>
          </div>
          <div class="carta">
            <img src="../assets/templealvacio.png" class="imagen-servicios">
            <p class="nombre-servicio">Temple al vacio</p>
          </div>
          <div class="carta">
            <img src="../assets/revelado.png" class="imagen-servicios-revelado">
            <p class="nombre-servicio">Revelado de esfuerzos</p>
          </div>
          <div class="carta">
            <img src="../assets/recocido.png" class="imagen-servicios">
            <p class="nombre-servicio">Recocido</p>
          </div>
          <div class="carta">
            <img src="../assets/pavonado.png" class="imagen-servicios">
            <p class="nombre-servicio">Pavonado</p>
          </div>
          <div class="carta">
            <img src="../assets/nitrurado.png" class="imagen-servicios">
            <p class="nombre-servicio">Nitrurado y Carbonizado</p>
            <div class="contenedor-proximo">
              <p class="proximo">Proximamente Enero 2024</p>
            </div>
          </div>
        </div>
      </div>

      <h1 class="titulo-contacto">Contáctanos</h1>

      <div class="contacto">
        <div class="formulario">
          <h1 class="subtitulo">Envíanos un mensaje</h1>
          <input-vue
          titulo="Nombre:"
          placeholderInput="Ingresa tu nombre"
          v-model="form.name"
          />
          <input-vue
          titulo="Correo:"
          placeholderInput="Ingresa tu correo electronico"
          v-model="form.email"
          />
          <input-vue
          titulo="Telefono:"
          placeholderInput="Ingresa tu número telefónico"
          v-model="form.phone"
          />
          <div class="textarea">
            <label for="">Mensaje</label>
            <textarea name="" id="" cols="30" rows="10" v-model="form.message" placeholder="Por favor ingresa un mensaje o las preguntas que desees que respondamos"></textarea>
          </div>
          <boton-vue
          @click="sendForm"
          />
        </div>

        <div class="barra-horizontal"></div>

        <div class="llamadas">
          <div>
            <h1>Llámanos</h1>
            <div class="contenedor-icono-texto-contacto">
              <img src="../assets/call.png" alt="img" class="icono-contacto-call">
              <p class="telefono">442-226-9331</p>
            </div>
          </div>
          <div>
            <h1>Envíanos un email</h1>
            <div class="contenedor-icono-texto-contacto">
              <img src="../assets/mail.png" alt="img" class="icono-mail">
              <a href="mailto:info@eqrothermal.com" target="_blank" class="mail">ventas@eqrothermal.com</a>
            </div>
          </div>
          <div>
            <h1>Visítanos</h1>
            <div class="contenedor-icono-texto-contacto">
              <img src="../assets/location.png" alt="img" class="icono-contacto">
              <p>Av. Hércules #36-1 C.P. 76904 
                Parque Industrial Santa Barbara, 
                El Pueblito Querétaro | México</p>
            </div>
              <p class="parrafos-horario"> <b>Lunes a viernes</b> 8:00 a.m. - 8:00 p.m.</p>
              <p class="parrafos-horario"> <b>Sábados</b> 8:00 a.m. - 3:00 p.m.</p>
          </div>
        </div>
      </div>

      <div class="ubicacion">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.425391375595!2d-100.44102362600633!3d20.52976870473247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3458799aa6669%3A0xa4dc7185a72312f8!2sH%C3%A9rcules%2034%2C%20Industrial%20el%20Pueblito%2C%2076904%20El%20Pueblito%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1693514401635!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="footer">
        <footer-vue/>
      </div>
    </main>
  </main>
</template>

<script>
import botonVue from '../components/boton.vue'
import headerVue from '../components/header.vue'
import inputVue from '../components/input.vue'
import footerVue from '../components/footer.vue'
export default {
  components: {
    headerVue,
    botonVue,
    inputVue,
    footerVue,
  },
  data: function () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    }
  },
  methods: {
    sendForm() {
      useFetch('/api/leads', {
        method: 'post',
        body: { 
          name: this.form.name, 
          email: this.form.email, 
          phone: this.form.phone, 
          message: this.form.message 
        }
      });
      useFetch('/api/send-email', {
        method: 'post',
        body: { 
          subject: "Prueba subject",
          to: "tech@eqrothermal.com",
          template: "contact",
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          message: this.form.message
        }
      });
      console.log("mensaje");
      alert ("Recibimos tus datos, en breve nos comunicaremos contigo.");
    }
  }
    
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Roboto:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&family=Roboto:ital,wght@0,400;1,100;1,400&display=swap');

body {
  margin: 0;
  font-family: roboto;
}
.titulo-servicios {
  text-align: center;
  color: #181E52;
}
.texto-nosotros {
  line-height: 28px;
  color: #3E3E3E;
}
.contenedor-tarjetas {
  text-align: center;
  column-count: 2;
}
.pregunta {
  color: #181E52;
  opacity: 1;
  font-weight: bold;
}
.logo {
  width: 150px;
  padding-top: 20px;
}
.icono-tiempo {
  width: 37px;
  height: 28px;
}
.icono-ecologico {
  width: 40px;
  height: 38px;
}
.imagen-nosotros {
  display: none;
}
.contenedor-acerca-de-nosotros {
  padding: 10px;
}
.contenedor-servicios {
  background-color: #CDEDF9;
  padding: 10px;
}
.hornos {
  display: none;
}
.contacto {
  text-align: center;
}
.titulo-contacto {
  color: #181E52;
  font-weight: bold;
  font-family: roboto;
  text-align: center;
}
.subtitulo {
  color:#3E3E3E;
}
.carta {
  border-radius: 5px;
  position: relative;
  height: 192px;
  margin-bottom: 65px;
}
.nombre-servicio {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-family: roboto;
}
.contenedor-iconos {
  display: grid;
  align-items: center;
  margin-right: 10px;
}
.contenedor-texto-icono {
  display: flex;
}
.formulario {
  max-width: 400px;
  text-align: justify;
  margin: auto;
}
.contacto {
  padding: 10px;
}
.ubicacion {
  text-align: center;
}
.barra-horizontal {
  height: 3px;
  background-color: #419A4F;
  margin-top: 40px;
}
.contenedor-icono-texto-contacto {
  display: flex;
  justify-content: center;
}
.icono-mail {
  height: 15px;
  margin-top: 4px;
  margin-right: 6px;
}
.icono-contacto {
  height: 20px;
  margin-top: 23px;
  margin-left: 13px;
}
.mail {
  text-decoration: none;
  color: #005F81;
}
.parrafos-horario {
  display: grid;
  margin-left: 21px;
}
.imagen-servicios {
  width: 170px;
}
.imagen-servicios-revelado {
  height: 231.567px;
  width: 170px;
  border-radius: 5px;
}
.icono-contacto-call {
  height: 20px;
  margin-top: 15px;
}
.telefono {
  margin-left: 10px;
  margin-right: 20px;
}
.contenedor-proximo {
  background-color: green;
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  border-radius: 3px;
}
.proximo {
  color: white;
  margin: 0;
  padding: 5px;
}
.textarea {
  display: grid;
}
textarea {
  outline: none;
}
.contenedor-boton {
  margin-top: 20px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .contenedor-boton {
    text-align: center;
  }
  .contenedor-tarjetas {
    column-count: 4;
  }
  .icono-contacto {
    margin-top: 14px !important;
    margin-right: 5px;
  }

}
@media (min-width: 1024px) {
  .contenedor-tarjetas {
    column-count: 4;
  }
  .barra-horizontal {
    width: 3px;
    height: 380px;
    background-color: #419A4F;
    margin-top: 10px;
    margin-left: 23px;
  }
  .contacto {
    display: flex;
    text-align: inherit;
  }
  .formulario {
    max-width: 660px;
  }
  .titulo-contacto {
    text-align: center;
    font-size: 25px;
  }
  .titulo-servicios {
    font-size: 25px;
  }
  .contenedor-icono-texto-contacto {
      justify-content: start;
  }
  .llamadas {
    max-width: 459px;
    margin: auto;
  }
  .parrafos-horario {
    display: grid;
    margin-left: 21px;
  }
  .icono-contacto {
    margin-right: 5px;
    margin-left: 0px;
  }
  .carta {
    margin-bottom: 158px;
  }
  .imagen-servicios {
    width: 240px;
  }
  .contenedor-servicios {
    padding: 50px;
  }
  .imagen-servicios-revelado {
    height: 326.567px;
    width: 240px;
  }
  .imagen-nosotros {
    display: block;
    height: 400px;
    margin-top: 35px;
  }
  .contenedor-acerca-de-nosotros {
    display: flex;
    width: 85%;
    margin: auto;
    padding-top: 60px;
  }
  .logo {
    width: 295px;
  }
  .icono-tiempo:hover {
    transform: scale(1.4);
  }
  .icono-ecologico:hover {
    transform: scale(1.4);
  }
  .texto-nosotros {
    width: 70%;
  }
  .contenedor-proximo {
    bottom: -92px;
    left: 31px;
    right: 32px;
  }
  .contenedor-boton {
    margin-top: 20px;
  }
  .proximo {
    font-size: 17px;
    padding: 10px;
  }
}
</style>