import Test from './Test'
import { render } from '@testing-library/vue'

test('Test should work', () => {
  // 渲染组件
  const { getByText } = render(Test);
  // 断言输出结果
  getByText('test1')
})
