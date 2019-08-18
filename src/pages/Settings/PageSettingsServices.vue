<template>
  <div>
    <div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
        <div class="ProductWrap">
            <!-- TODO убрать [0] -->
            <SettingsServicesCard 
                v-for="product of products"
                :key="product.id"
                :product="product[0]"
            />
        </div>
    </div>
    <div class="MainSection-Row">
        <SettingsServicesAddCard />
    </div>
    
  </div>
</template>

<script>
import { SettingsServicesCard, SettingsServicesAddCard } from '@/components/pages/Settings/SettingsServices';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        SettingsServicesCard,
        SettingsServicesAddCard
    },
    created() {
        Promise.all([this.fetchProducts()])
            .then(() => this.pageLoader_resolveData())
    },
    computed: {
        ...mapState({
            products: state => state.products.items
        })
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
    }
}
</script>

<style scoped>
    
</style>