<template>
<v-row>
    <v-col cols="12"
            md="12">
        <v-row 
            align="center"
            justify="space-around">
            <Simple/>
        </v-row>
    </v-col>
        <v-col cols="12"
            md="6">
        <v-row 
            align="center"
            justify="space-around">
    <Round/>            
        </v-row>
    </v-col>
            <v-col cols="12"
            md="6">
        <v-row 
            align="center"
            justify="space-around">
            <WorkLife/>
        </v-row>
    </v-col>
</v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import Simple from './graphs/simple.vue'
import Round from './graphs/round.vue';
import WorkLife from './graphs/worklife.vue';
import store from '../store';
store.dispatch('bindTodosRef');
export default Vue.extend({
    
    components:{
        Simple,
        Round,
        WorkLife
    }
})
</script>