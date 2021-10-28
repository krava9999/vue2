<template>
        <div class="formAddNewCost visible">
          <input type="text" placeholder="Название" v-model="paymentDesc">
          <input type="text" placeholder="Количество" v-model="paymentAmount">
          <input type="date" v-model="paymentDate">
           <input id="date" type="button" value="Добавить" @click="onSaveClick">
        </div>
</template>


<script>
export default {
    data() {
        return {
            paymentDesc:'',
            paymentAmount:'',
            paymentDate:'',
        }
    },
    
methods: {
    onSaveClick () {
       
      const data = {
        paymentAmount: +this.paymentAmount,
        paymentDesc: this.paymentDesc,
        paymentDate: this.paymentDate || this.getCurrentDate,
      }
      this.$emit('addNewPayment', data)
    }
},
 computed: {
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },

}
</script>
