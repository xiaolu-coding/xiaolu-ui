import { defineComponent } from "vue";

// export default () => <div>test</div>;

// 控制力最强的vue3 tsx写法
// 摒弃了this
export default defineComponent({
  setup(props, ctx) {
    return () => {
      return <div>test1</div>
    }
  }
})
