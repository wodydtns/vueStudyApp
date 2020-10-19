import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

//작성 시 사용자 관점에서 검증
describe('LoginForm.vue', () => {
  test('ID는 email 형식이 아니면 경고 메시지 출력', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@abc.com',
        };
      },
    });
    // // html 요소 가져오기 - find
    // const idInput = wrapper.find('#username');
    // // html element의 value값
    // console.log('input box value = ', idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
    // html 요소 가져오기 - find('css 선택자')
    const warningText = wrapper.find('.warning');
    console.log(warningText);
    expect(warningText.exists()).toBeTruthy();
  });
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'b@b.com',
          password: '1234',
        };
      },
    });
    const button = wrapper.find('.btn');
    expect(button.element.disabled).toBeTruthy();
  });
});
