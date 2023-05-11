<template>
    <select v-model="localModelValue" @change="changeOptions">
        <option disabled value="">Выберите из списка</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value">
            {{  option.name }} 
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    date() {
        return {
            localModelValue: {
                type: String,
                default: this.modelValue,
            }
        }
    },
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
    computed: {
    localModelValue: {
        get() {
            return this.modelValue
        },
        set(newValue) {
            this.$emit('update:modelValue', newValue)
        },
    },
},
}
</script>

<style lang="scss" scoped></style>