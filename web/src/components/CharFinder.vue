<template>
  <div v-if="data" class="w-50 container card card-padding shadow">
    <div class="mt-3">
      <h1 class="title card-color rounded">{{this.data.exercise_name}}</h1>
    </div>
    <div class="mb-3 mt-3">
      <div class="mb-3">
        <p><b>Tiempo:</b> <b class="title">{{this.data.seconds}}</b> <b>segundos</b></p>
      </div>
      <div class="d-flex justify-content-between text-center">
        <div 
          class="card p-2 card-color mr-1"
          v-for="result in this.data.results" 
          :key="result.char"
          >
          <div>
            <p class="mb-3">
              Cantidad de letras <b>{{result.char.toUpperCase()}}</b> en {{result.resource}}: 
            </p>
          </div>
          <div>
            <p class="custom-badge">
              {{result.count}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CharFinder',
  data () {
    return {
        charCounterData: {},
      }
    },
    props: ['data'],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-padding{
  padding-right: 80px;
  padding-left: 80px;
}
.title{
  color: #6bc4b0;
}
.custom-badge{ 
    color: #fff;
    background-color: #6bc4b0;
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}
.card-color{
  background-color: #efefef;
}
</style>
