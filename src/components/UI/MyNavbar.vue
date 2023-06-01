<template>
    <div class="navbar">
        <div @click="$router.push('/')"> VUE 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')" >Посты</my-button>
            <my-button @click="$router.push('/posts_store')" >Посты с VUEX!</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px;" >О сайте</my-button>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightblue;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    padding: 0 15px;
    align-items: center;

}

.navbar__btns {
    margin-left: auto;
}
</style>