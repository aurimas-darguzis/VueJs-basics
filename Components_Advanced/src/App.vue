<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote></app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        component: {
            appQuote: Quote
        }
        
    }
</script>

<style>
</style>
