<template>
    <div>

        <!-- <h1> {{ $store.state.isAuth ? "Пользователь авторизован": "Авторизуйтесь, чтобы использовать сервис" }}</h1>
        <h1>{{ $store.getters.doubleLikes }}</h1>
        <div>
            <my-button @click="$store.commit('incrementLikes')"> Лайк +</my-button>
            <my-button @click="$store.commit('decrementLikes')"> Лайк -</my-button>
        </div> -->

        <h1>Страница с постами</h1>
        <my-input
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск...."
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
                > Создать пост
            </my-button>

            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>


        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        1234
        <post-list      
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="isPostsLoading === false"/>  
        <div v-else> Идёт загрузка...</div> 
        12345
        <div v-intersection="loadMorePosts" class="observer"></div>


        <!-- <div class="page__wrapper">
            <div 
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>    -->
    </div>
</template>



<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
//import axios from "axios"
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    components: {
        PostForm,
        PostList
    }, 
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
            loadMorePosts: 'post/loadMorePosts'
        }),
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),



        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog(){
            this.dialogVisible = true;
        },
 
        //Пагинация
        changePage(pageNumber) {
            this.page = pageNumber
        }

    },
    mounted() {
            console.log("1")
            this.fetchPosts();
            console.log("2")
            
            // console.log(this.$refs.observer)
            // const options = {
            //     rootMargin: '0px',
            //     threshold: 1.0
            // }
            // const callback = (entries, observer) => {

            //     if (entries[0].isIntersecting && this.page < this.totalPages){
                    
            //         console.log(observer)
            //         this.loadMorePosts()
            //     }
            // };
            // const observer = new IntersectionObserver(callback, options);
            // observer.observe(this.$refs.observer)
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,

        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts' ,
        })
    },
    watch: {
        // page(){
        //     this.fetchPosts()
        // }
    }
}

</script>


<style scoped>


.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.page {
    border: 1px solid black;
    padding: 10px
}.current-page {
    border: 2px solid greenyellow;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.observer {
    height: 30px;
    background: green;
}

</style>