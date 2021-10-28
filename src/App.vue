<template>
<div class="project content">
 
  <header class="header content">
    <h1 class="header__heading">My personal cost</h1>
  </header>
      <addNewCostBtn/>
      <tableContent :items="paymentsList"/>
      <formNewCost @addNewPayment="addNewPayment"/>
</div>
</template>
 
<script>

import addNewCostBtn from './components/addNewCostBtn.vue'
import tableContent from './components/tableContent.vue'
import formNewCost from './components/formNewCost.vue'
export default {
  components: {
 addNewCostBtn,
 tableContent,
 formNewCost
  },
  data() {
    return {
      paymentsList: [], // массив трат
    }
  },
  methods: {
    fetchData(){
      return [
      {
            paymentDesc:'Sport',
            paymentAmount:3000,
            paymentDate:'23-09-2021',
      },
      {     
            paymentDesc:'Food',
            paymentAmount:1500,
            paymentDate:'25.09.2021',
      },
      {
        paymentDesc:'Transport',
            paymentAmount:1000,
            paymentDate:'25-09-2021',
      },
    ]
    },
    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    },
  },
  // как только шаблон создается на странице, заполняем массив
  created () {
  this.paymentsList = this.fetchData()
},

}

</script>

<style lang="scss">
 .project{
   outline: 1px solid black;
 }

 .content{
   width: 500px;
   margin: 0 auto;
   margin-top: 150px;
 }
  
.addNewCostBtn{
  display: flex;
  width: 100px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: forestgreen;
}
.table{
  display: flex;
  justify-content: space-around;
  text-align: center;
  border: 1px solid black;
  &__number{
    width: 15%;
  }
  &__date{
    width: 30%;
  }
  &__category{
    width: 40%;
  }
  &__value{
    width: 15%;
  }
}
.formAddNewCost{
  position: absolute;
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
  width: 300px;
  top: 10px;
}

 .visible{
   display: none;
 }
</style>