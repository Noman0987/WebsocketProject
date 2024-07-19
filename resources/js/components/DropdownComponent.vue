<template>
    <div>
        <select v-model="selectedOption" @change="sendOption">
            <option disabled value="">Select an option</option>
            <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            selectedOption: '',
            options: ['Option 1', 'Option 2', 'Option 3']
        };
    },
    methods: {
        sendOption() {
            axios.post('/api/option', { option: this.selectedOption });
        }
    }
};
</script>
