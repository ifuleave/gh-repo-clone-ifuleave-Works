<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3">
      <h1 class="text-center mb-4">Todo 어플리케이션</h1>
      <input type="text" class="form-control mb-4" v-model="userInput" @keyup.enter="addNewTodo"><!--인풋값이 엔터라면 addNewTodo()실행-->

      <div class="list-group mb-4">
        <template v-for="todo in activeTodoList" v-bind:key="todo"><!--state 값이 active인 항목만 넘겨줌-->
          <todo
            :label="todo.label"
            @componentClick="toggleTodoState(todo)" 
          /><!--컴포넌트 분리하는 방법-->
      </template>
      </div>
        <div class="text-right">
          <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">할 일</button> <!--각버튼의 이벤트 추가-->
          <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">전체</button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
  import Todo from './components/Todo.vue';

export default {
  name: 'App',
  data(){
    return{
      userInput:'', //사용자 입력
      todoList: [], // 사용자가 입력한 input 값을  List 배열 저장
      currentState: 'active'
    };
  },
  computed :{ //컴퓨티드는 클래스의 getter 함수처럼 동작함. activeTodoList 메소드를 html 코드에서 내부 변수처럼 사용가능
    activeTodoList(){
      return this.todoList.filter(todo=>this.currentState === 'all' || todo.state === this.currentState); //currentstate값이 all이면 모든 항목을 가져오고 아닐경우 currentstate값과 동일한 항목을 가져오기
    }
  },
  methods:{
    changeCurrentState(state){
      this.currentState = state;
    },
    addNewTodo(){
      this.todoList.push({
        label : this.userInput,
        state:'active' //state가 active면 완료하지 않음, 클릭시 state를 done으로 변경해 완료로 
      }); //사용자입력값을 todolist에 추가
      this.userInput= ''; //userinput갑 초기화
    },
    toggleTodoState(todo){ //todo파라미터는 클릭할 항목을 받을 파라미터
      todo.state = todo.state=='active'? 'done' : 'active';
    }
  },
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
