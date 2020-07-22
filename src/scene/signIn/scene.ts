import Vue from 'vue'
import eLogo from '@/components/logo/index.vue'

export default Vue.extend({
  components: {
    eLogo
  },
  data () {
    return {
      loading: false,
      form: {
        userkey: '',
        password: ''
      }
    }
  },
  mounted () {
    this.initScene()
  },
  methods: {
    initScene () {
      console.log('hello')
    },
    handleSubmit () {
      console.log('登录')
    },
    handleResetPassword () {
      console.log('忘记密码')
    }
  }
})
