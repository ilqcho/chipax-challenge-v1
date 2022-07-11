<template>
    <div v-if="data" class="container card card-padding mt-3 shadow">
        <div class="mt-3">
            <h1 class="title card-color rounded">{{this.data.exercise_name}}</h1>
        </div>
        <div class="">
            <div class="mb-3 mt-3">
                <b>Tiempo: <b class="title">{{this.data.seconds}}</b> segundos</b>
            </div>
            <table class="table align-middle table-striped text-center">
                <thead class="thead-dark">
                    <th class="tr-w">Episode</th>
                    <th>locations</th>
                    <th>name</th>
                </thead>
                <tbody>
                    <tr 
                        v-for="result in this.data.results" 
                        :key="result.char"
                        >
                        <td>
                            <b>{{result.episode}} </b>
                        </td>
                        <span v-for="locations in result.locations" :key="locations">
                            <td>
                                <div class="custom-badge">
                                    {{locations}}
                                </div>
                            </td>
                        </span>
                        <td>
                            {{result.name}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'EpisodeLocations',
  data () {
    return {
      }
    },
    props: ['data'],
  }
</script>
<style scoped>
.card-padding{
  padding-right: 80px;
  padding-left: 80px;
}
.tr-w{
    width: 170px;
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