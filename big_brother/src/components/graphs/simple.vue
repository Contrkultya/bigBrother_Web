<template>
    <v-card>
    <v-card-title>За последнюю неделю</v-card-title>
  <div class="home">
           <apexcharts width="1080" height="320" type="bar" :options="sas" :series="ass"></apexcharts>
  </div>
  </v-card>
</template>

<script >
import Vue from 'vue'
import store from '../../store';
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);

export default {
  name: 'Simple',
  components: {
      apexcharts: VueApexCharts,
    },
  data: function() {
      return{
          chartOptions:{
              chart:{
                  id: 'simple-graph',
              },
              xaxis:{
                  categories: []
              },},
                series: [{
                    name: 'series-1',
                    data: []
            }],
      }
  },
  computed:{
      sas(){
              let obj = this.$store.getters.logs;
    let outism = [];
    obj.forEach(element => {
        element.forEach(sas =>{
        if( outism.indexOf(sas.date) == -1 && sas.uid == this.$store.getters.user.data.uid){
            outism.push(sas.date);
        }
        })
    });
    var arm = {chart: {id: 'simple-graph'}, xaxis: {categories: outism}}
    return arm;
      },
      ass(){
   let obj = this.$store.getters.logs;
    let cat = [];
    obj.forEach(element => {
        element.forEach(sas =>{
        if(cat.indexOf(sas.date) == -1 && sas.uid == this.$store.getters.user.data.uid){
            cat.push(sas.date);}})});
    let time = this.$store.getters.logs;
    var outism = [];
    cat.forEach(date => {
        var mass =0;
        time.forEach( record =>{
            record.forEach(dart => {
               if(dart.date == date && dart.uid == this.$store.getters.user.data.uid){
                mass+= Number.parseInt(dart.time);
        }})
        });
        outism.push(mass);
    });
    var ark = [{name: 'Время онлайн', data: outism}]
return ark}
  },
}
//    {{this.$store.getters.logs}}
</script>
