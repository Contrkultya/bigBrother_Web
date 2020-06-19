<template>
    <v-card>
    <v-card-title>Баланс работы и жизни</v-card-title>
       <v-combobox
        v-model="select"
          :items="sass"
          label="Выберите день"
        ></v-combobox>  
        <div class="home">
           <apexcharts width="500" height="320" type="donut" :options="ass" :series="sas"></apexcharts>
    </div>
  </v-card>
</template>

<script >
import Vue from 'vue'
import store from '../../store';
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);

export default {
  name: 'WorkLife',
  components: {
      apexcharts: VueApexCharts,
    },
  data: function() {
      return{
          options:{},
          select: "19.06.2020",
          mom: ["18.06.2020", "19.06.2020"],
            series: [{
                    data: []
            }],
      }
  },
  computed:{
            sass(){
    let obj = this.$store.getters.logs;
    let outism = [];
    obj.forEach(element => {
        element.forEach(sas =>{
        if( outism.indexOf(sas.date) == -1 && sas.uid == this.$store.getters.user.data.uid){
            outism.push(sas.date);
        }
        })
    });
    return outism;
      },
      sas(){
   let obj = this.$store.getters.logs;
    let cat = [];
    obj.forEach(element => {
        element.forEach(sas =>{
        if(cat.indexOf(sas.date) == -1){
            cat.push(sas.date);}})});
    let time = this.$store.getters.logs;
    var outism = [];
    cat.forEach(date => {
        var mass =0;
        time.forEach( record =>{
            record.forEach(dart => {
               if(dart.date == this.select && dart.uid == this.$store.getters.user.data.uid){
                mass+= Number.parseInt(dart.time);
        }})
        });
        outism.push(mass);
    });
    var ssss = [1140 - outism[0], outism[0]]
    return  ssss
    },
      ass(){
var key = {
    chart: {
        id: 'simple-donut',
        type : "donut"},
    dataLabels: { 
    enabled: false,
    formatter: function (val) {
      return val + "%"
    },},
  labels: ['Жизнь','Работа'],
}
return key
  },
}}
//    {{this.$store.getters.logs}}
</script>