<template>
    <div class="pagination-wraper">
        <div @click="onClick(cur-1)">-</div>
        <div class="page" :class="{'active': cur === i}"  v-for="i in amout" :key="i" @click="onClick(i)">
            {{i}}
        </div>
        <div @click="onClick(cur+1)">+</div>

    </div>
</template>

<script>
export default {
    name: "pagination",
    props:{
        length:Number, // длинна массива страниц
        cur: Number // текущая страница

    },
    data(){
        return{

        }
    },
    methods:{
        onClick(p){
            if (p < 1 || p > this.amout){
                return
            }
            console.log(p)
            this.$emit('paginate', p)
        }
    },
    computed:{
         amout(){
             return this.length
         }
    }
}
</script>

<style lang="scss">
    .pagination-wraper{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .active{
        background-color: black;
        color: white;
    }
    .page{
        width: 15px;
        text-align: center;
    }
</style>