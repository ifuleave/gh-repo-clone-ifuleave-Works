const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false //component 할때 이름을 Todo -> TodoList 이렇게 파일이름을 지정해야 오류안남. 그거에 상관없게 해주는 코드
})
