<template>
        <div>
              <a href="#" class="addNewCostBtn" @click="showForm">Add new Cost</a>
        </div>
</template>



<script>
export default {

methods: {
    showForm(){
       let form = document.querySelector('.formAddNewCost');
       form.classList.toggle('visible');
    }
},
}
</script>

