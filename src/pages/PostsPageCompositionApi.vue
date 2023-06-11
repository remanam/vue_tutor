<template>
    <div >
        <!-- <h1>{{ likes }}</h1>
        <my-button @click="addLike">add like</my-button> -->
        <h1>Страница с постами</h1>
        <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Поиск...."
        />
        <div class="app__btns">


            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>


        <!-- <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog> -->

        <post-list      
            :posts="sortedAndSearchedPosts"
            v-if="isPostsLoading === false"/>  
        <div v-else> Идёт загрузка...</div> 

    </div>
</template>



<script>
//import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

import usePosts from "@/hooks/usePosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useSortedPosts from "@/hooks/useSortedPosts";


export default {
    components: {
        //PostForm,
        PostList
    }, 
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'},
            ]
        }
    },
    setup() {
        const {posts, totalPages, isPostsLoading} = usePosts(10);
        const {sortedPosts, selectedSort} = useSortedPosts(posts);
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
        return {
            posts,
            totalPages,
            isPostsLoading,
            selectedSort,
            sortedPosts,
            searchQuery,
            sortedAndSearchedPosts,
            
        }
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