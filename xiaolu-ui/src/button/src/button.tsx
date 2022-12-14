import { defineComponent, toRefs } from "vue";
import { buttonProps, ButtonProps } from "./button-types";

export default defineComponent({
  name: 'LButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const  { type } = toRefs(props)

    return () => {
      return <button class={`s-btn s-btn--${type.value}`}>{slots.default ? slots.default() : '按钮'}</button>
    }
  }
})
