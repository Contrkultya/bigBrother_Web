<template>
    <v-card>
    <v-card-title>Куда уходит время</v-card-title>
       <v-combobox
        v-model="select"
          :items="sas"
          label="Выберите день"
        ></v-combobox>  
        <div class="home">
           <apexcharts width="500" height="320"  type="donut" :options="ass" :series="bass"></apexcharts>
    </div>
  </v-card>
</template>

<script >
import Vue from 'vue'
import store from '../../store';
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);
import { mapGetters } from "vuex";

export default {
  name: 'Round',
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
    return outism;
      },
      ass(){
   let obj = this.$store.getters.logs;
    let cat = [];
    obj.forEach(element => {
        element.forEach(sas =>{
        if(cat.indexOf(sas.date) == -1){
            cat.push(sas.date);}})});
    let time = this.$store.getters.logs;
    var outism = [];
    var labels = [];
            var values =[];
    cat.forEach(date => {
        var values =[];
        time.forEach( record =>{
            record.forEach(dart => {
               if(dart.date == this.select && labels.indexOf(dart.name) == -1 && dart.uid == this.$store.getters.user.data.uid ) {
                labels.push(dart.name);
        }})
        });
    });
    labels.forEach(label =>{
        var map = 0;
        time.forEach( time => {
            time.forEach(lol => {
                if(lol.date == cat[1]&& lol.name == label && lol.uid == this.$store.getters.user.data.uid){
                    map+= Number.parseInt(lol.time);
                }
            })
        })
        values.push(map);
    })

var key = {
    chart: {type : "donut"},
    dataLabels: { 
    enabled: false,
    formatter: function (val) {
      return val + "%"
    },},
  labels: labels,
}
return key
  },
        bass(){
   let obj = this.$store.getters.logs;
    let cat = [];
    obj.forEach(element => {
        element.forEach(sas =>{
        if(cat.indexOf(sas.date) == -1){
            cat.push(sas.date);}})});
    let time = this.$store.getters.logs;
    var outism = [];
    var labels = [];
            var values =[];
    cat.forEach(date => {
        var values =[];
        time.forEach( record =>{
            record.forEach(dart => {
               if(dart.date == this.select && labels.indexOf(dart.name) == -1 && dart.uid == this.$store.getters.user.data.uid) {
                labels.push(dart.name);
        }})
        console.log(labels);
        });
    });
    labels.forEach(label =>{
        var map = 0;
        time.forEach( time => {
            time.forEach(lol => {
                if(lol.date == this.select&& lol.name == label && lol.uid == this.$store.getters.user.data.uid){
                    map+= Number.parseInt(lol.time);
                }
            })
        })
        values.push(map);
    })
return values
  },
}}
//    {{this.$store.getters.logs}}
</script>