<template>
   <div class="calcapp">
       <!-- привязываем значение с инпута в перенные operand$ -->
       <div class="display">
       <input v-model.number="operand1" type="number" class="firstInput" @focus="checkRadio = 'left'"/> 
       <input v-model.number="operand2" type="number" class="secondInput" @focus="checkRadio = 'right'"/>
       = {{result}}
        <div v-if="error">{{ error }}</div>
        </div>
          <div class="visible-box">
               <label for="showKeyboard">
          <input id = "showKeyboard" type="checkbox"
          v-model="show"
          > Включить клавиатуру
          </label>
          </div>
         
         <div class="keyboard" v-show="show">

             <div class="keyboard-top">
                <button v-for="(operand, index) in operands"  @click="calculate(operand)" v-bind:key="index"   v-bind:title="operand"
                  v-bind:disabled="operand1 === '' || operand2 === ''">
                  {{ operand }}
                 </button>
            </div>
             <div class="keyboard-bottom">
                <button 
                @click="innerText(item)"
                v-for="item in numbers" 
                v-bind:key="item"
                v-bind:title="item"
                >

                {{item}}

                </button>   
             </div>
             <input type="radio" name="checkInput" checked value="left" v-model="checkRadio"> Лево
             <input type="radio" name="checkInput" value="right" v-model="checkRadio"> Право

     </div>

    
   </div>

   
</template>
 
<script>
 export default {
   name: 'Calc',
   data(){
       return {
           operands: ['+', '-', '/', '*','**','int','del'],
           numbers: [1,2,3,4,5,6,7,8,9,0,],
           result: 0,
           operand1: 0,
           operand2: 0,
           error: '',
           checkRadio:"left",
           show: true,

       }
   },
   methods: {
       
       calculate(operation = "+" ){
           this.error = "";
        switch(operation){
            case "+":
                this.plus()
            break;

            case "-":
                this.minus()
            break;

            case "/":
                this.div()
            break;

            case "*":
                this.multi()
            break;

            case "**":
                this.step()
            break;

            case "int":
                this.intNum()
            break;

            case "del":
                this.delText()
            break;
        }    
       },

       minus(){
             this.result = this.operand1 - this.operand2;
       },
       plus(){
             
             this.result = +this.operand1 + +this.operand2;
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
        delText(){
            if (this.checkRadio === "left"){
                this.operand1 = +(String(this.operand1).slice(0,-1));
            }  else{
                this.operand2 = +(String(this.operand2).slice(0,-1));

            }
        },
        innerText(simbol){
           
            switch (this.checkRadio) {
                case 'left':
                    this.operand1 = +(`${this.operand1}` + `${simbol}`);
                    break;
            
                case 'right':
                    this.operand2 = +(`${this.operand2}` + `${simbol}`);
                    break;
                
            }
        }
   },
 }
</script>

<style lang="scss">
    .calcapp{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 250px auto;
        width: 500px;
    }
    
</style>