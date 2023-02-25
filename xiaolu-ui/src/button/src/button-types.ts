import { ExtractPropTypes, PropType } from "vue";

export type IButtonType = 'primary' | 'secondary' | 'text'
export type IButtonSize = "large" | "medium" | "small";

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>, // 进一步约束类型
    default: "secondary",
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'small',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  }
} as const;

// 提取buttonProps对象的类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
