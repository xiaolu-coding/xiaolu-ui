import { defineComponent, toRefs } from "vue";
import { buttonProps, ButtonProps } from "./button-types";

export default defineComponent({
  name: 'LButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const  { type, size, disabled } = toRefs(props)
    const defaultSlot = slots.default ? slots.default() : '按钮'

    return () => {
      return <button disabled={disabled.value} class={`s-btn s-btn--${type.value} s-btn--${size.value}`}>{defaultSlot}</button>
    }
  }
})
