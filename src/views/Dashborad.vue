<template>
      <div>
    <nav class="content">
      <a href="#dashboard">Deshboard </a> /
      <a href="#about">About</a> /
      <a href="#notfound">404</a> /
    </nav>

    <main class="content app-border">
          <h1 >My personal cost</h1>

      <addNewCostBtn/>
      <tableContent :items="paymentsList"/>
      <formNewCost @addNewPayment="addNewPayment"/>
      <pagination @paginate="changePage" :length="5" :cur="page" />
        <p>Total price: {{getFPV}} </p>   
    </main>
</div>
</template>

<script>
import addNewCostBtn from '../components/addNewCostBtn.vue'
import tableContent from '../components/tableContent.vue'
import formNewCost from '../components/formNewCost.vue'
import pagination from '../components/paginationNumber.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "Dashboard",
    components: {
 addNewCostBtn,
 tableContent,
 formNewCost,
 pagination,
    
  },
  data() {
      return {
     page:1,
     
      }
  },
   methods: {
    ...mapMutations({
      addData: 'addPaymentListData'
    }),
    
    addNewPayment (data) {
      this.addData(data)
    },
    changePage(p){
      this.page = p;
      this.$store.dispatch('fetchData', this.page)

    }
  },
    computed: {
     ...mapGetters({
     paymentsList: 'getPaymentsList'
    }),
    getFPV () {
      return this.$store.getters.getFullPaymentValue
    },
   
  },

}
</script>

<style lang="scss" module>
 .app-border{
   border: 1px solid black;
 }

 .content{
   width: 500px;
   margin: 0 auto;
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