import { ExtractPropTypes, PropType } from "vue";

export type IButtonType = 'primary' | 'secondary' | 'text'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>, // 进一步约束类型
    default: 'secondary'
  }
} as const

// 提取buttonProps对象的类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
