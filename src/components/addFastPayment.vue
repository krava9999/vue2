<template>  
        <div class="router-nav">
        <!-- 
                    Будем делать программный переход
            <router-link to="/add/payment/Food?value=200">add Food</router-link> /
         <router-link to="/add/payment/Transport?value=50">add Transport</router-link> / 
        <router-link to="/add/payment/Entertainment?value=2000">add Entertainment</router-link> / -->
        <button @click="fastAddFood(path = '/add/payment/Food?value=200')">Food</button>
        <button @click="fastAddFood(path = '/add/payment/Transport?value=200')">Transport</button>
        <button @click="fastAddFood(path = '/add/payment/Entertainment?value=200')">Entertainment</button>


        </div>
</template>

<script>

export default {
    name: 'addFastPayment',
    data(){
        return{

        }
    },
    methods:{
        fastAddFood(url){
            this.$router.replace({path: url})
            const routeCategory = this.$route.params.page; // получаем страницу
            const routeValue = this.$route.query.value  // получаем значение
              const data = {
        paymentAmount: +routeValue ,
        paymentDesc: routeCategory,
        paymentDate: this.getCurrentDate,
      }
      this.$emit('addNewPayment', data);
      
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