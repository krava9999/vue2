<template>
   <div class="calcapp">
       <!-- привязываем значение с инпута в перенные operand$ -->
       <input v-model.number="operand1" type="number" class="firstInput"/> 
       <input v-model.number="operand2" type="number" class="secondInput"/>
       = {{result}}
        <div v-if="error">{{ error }}</div>

         <div class="keyboard">

             <div class="keyboard-top">
                  <button   @click="plus">
                   +
                 </button>
                    <button   @click="minus">
                   -
                 </button>
                    <button   @click="div">
                   /
                 </button>
                <button   @click="multi">
                   *
                 </button>
                 <button   @click="step">
                   **
                 </button>
                 <button   @click="intNum">
                   int
                 </button>
            </div>
           
     </div>

    
   </div>

   
</template>
 
<script>
 export default {
   name: 'Calc',
   data(){
       return {
         
           result: 0,
           operand1: '',
           operand2: '',
           error: '',
       }
   },
   methods: {
       
       

       minus(){
             this.result = this.operand1 - this.operand2;
       },
       plus(){
             this.result = this.operand1 + this.operand2;
       },
       div(){
           if (this.operand2 === 0 ) {
               this.error = "здесь деление на 0 запрещено, калькулятор вырубай"
           } else{
               this.result = this.operand1 / this.operand2;
           }
       },
        multi(){
             this.result = this.operand1 * this.operand2;

        },
       step(){
             this.result = this.operand1 ** this.operand2;
       },
        intNum(){
             this.result = ~~(this.operand1 / this.operand2);

        },
      
   },
 }
</script>

<style lang="scss">
    .calcapp{
        margin: 250px auto;
        width: 500px;
    }
    .keyboard{
       &-top{
           display: flex;
           align-items: center;
       }

       &-bottom{
           display: flex;
           align-items: center;
       }
    }
</style>