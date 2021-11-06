<template>
 <div>
   <select  @change="onChange($event)">
     <option v-for="(option,id) in setCategoryList" :value="option" :key="id" >
       {{ option }}
     </option>
   </select>
 </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'selectCategory',
    data(){
        return{
            selected: '',
        }
    },
    methods:{
        onChange(event){
            this.$emit('input', event.target.value)
        }
    },
    computed: {
        ...mapGetters([
             'setCategoryList'
        ])
    },
    actions: {
   ...mapActions([
     'loadCategories'
   ])
     },
      mounted () {
 
 }


}
</script>