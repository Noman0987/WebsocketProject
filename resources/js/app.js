require('./bootstrap');
import Vue from 'vue';
import DropdownComponent from './components/DropdownComponent.vue';
import OptionDisplayComponent from './components/OptionDisplayComponent.vue';
console.log('Vue version:', Vue.version);
new Vue({
    el: '#app',
    components: {
        DropdownComponent,
        OptionDisplayComponent
    }
});
