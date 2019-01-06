<template>
  <div class='centered'>
    <h1>Consultas</h1>
    <h3 v-if="message">{{message}}</h3>
    <h4 v-if="isFetching && !error">Cargando datos</h4>
    <div v-else>
      <h3>Tienes {{consultas.length}} consultas</h3>
      <a class='options' href="#/consultas/new">Agregar</a>
      <table class='table'>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Estado</th>
          <th></th>
        </tr>
        <tr v-for="consulta in consultas" :key="consulta.id">
          <td>{{consulta.id}}</td>
          <td>{{consulta.firstName}}</td>
          <td>{{consulta.lastName}}</td>
          <td>{{consulta.description}}</td>
          <td>{{consulta.category.name}}</td>
          <td>{{consulta.state.name}}</td>
          <td>
            <a class='link' :href="`#/consultas/${consulta.id}/edit`">Editar</a>
            <a class='link' @click="deleteQuery(consulta.id)">Eliminar</a>
          </td>
        </tr>
      </table>
      <h2 v-if="error">{{error}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryList',
  data() {
    return {
      message: '',
      error: '',
      isFetching: true,
      consultas: [],
    };
  },
  mounted() {
    fetch('https://virtserver.swaggerhub.com/lucasdc6/Proyecto2018/1.0.0/consultas')
      .then(response => response.json())
      .then((json) => {
        this.consultas = json;
        this.isFetching = false;
      })
      .catch(() => {
        this.error = 'Ocurrió un error cargando los datos. Vuelva a intentarlo más tarde';
      });
  },
  methods: {
    deleteQuery(id) {
      fetch(`https://virtserver.swaggerhub.com/lucasdc6/Proyecto2018/1.0.0/consultas/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          this.message = 'La consulta se eliminó correctamente';
        })
        .catch(() => {
          this.error = 'Ocurrió un error eliminando la consulta. Vuelva a intentarlo más tarde';
        });
    },
  },
};
</script>
