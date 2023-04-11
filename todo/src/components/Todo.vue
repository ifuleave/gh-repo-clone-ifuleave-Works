<template>
        <button class="list-group-item text-left"  @click="clickButton"> <!--todolist를 todo로 쓸거라는걸 v-bind:key로 지정-->
            {{ label }}
        </button>
</template>
<script>
    export default{
        props : ['label'],
        methods:{
            clickButton(){ //버튼 클릭시 호출할 메서드
                this.$emit('componentClick')
            }
        }
    };
</script>