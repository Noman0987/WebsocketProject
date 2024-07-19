// Import necessary modules
import { createApp } from 'vue';
import DropdownComponent from './components/DropdownComponent.vue';
import OptionDisplayComponent from './components/OptionDisplayComponent.vue';

// Create the Vue app
const app = createApp({
    components: {
        DropdownComponent,
        OptionDisplayComponent
    }
});

// Mount the app to the DOM
app.mount('#app');
