<template>
    <div>
        <h1>Selected Option: {{ option }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            option: ''
        };
    },
    mounted() {
        Echo.channel('options')
            .listen('OptionSelected', (event) => {
                this.option = event.option;
            });
    }
}
</script>
