import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../../pages/Login.vue'

describe('LoginForm', () => {
  it('renders properly', () => {
    const wrapper = mount(Login, {
      props: {
        modelValue: { username: '', password: '' }
      }
    })
    
    expect(wrapper.text()).toContain('Login')
  })
})