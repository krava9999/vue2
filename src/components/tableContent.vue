<template>
    <div class="table-row">
        <div class="table">
           <div class="table__number">#</div>
           <div class="table__date"> date </div>
           <div class="table__category"> category </div>
           <div class="table__value"> value </div>
        </div>

        <div class="table" v-for="(item,index) in items" :key="index">
          <div class="table__number">{{index}}</div>
           <div class="table__date"> {{item.paymentDate}} </div>
           <div class="table__category">{{item.paymentDesc}} </div>
           <div class="table__value"> {{item.paymentAmount}}</div>
        </div>
        </div>
</template>

<script>
export default {
props:{
    items:{
        type: Array,
       default: ()=> [],

    }
}
}
</script>

<style>

</style>