// import { post } from '../../utilitys/ipAxios'
export default {
  components: {
  },
  data () {
    return {
      filterShow: false,
      loading: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created () {
    this.handleSearchSubmit()
  },
  methods: {
    handleCreateStudent () {
      this.$router.push({
        path: '/dashboard/bCreateStudent'
      })
    },
    handleClearFilter () {
      this.search = {
        name: null,
        status: null,
        pageNum: 1
      }
      this.handleSearchSubmit()
      this.filterShow = false
    },
    async handleSearchSubmit (filter) {
      if (filter && filter === 'filter') {
        this.filterShow = true
      } else {
        this.filterShow = false
      }
      this.loading = true
      // 发送请求
    },
    handleChangePage (pageIndex) {
      this.search.pageNum = pageIndex
      this.pageData.page.currentPageNum = pageIndex
      this.handleSearchSubmit()
    },
    setTypeStr (typeId) {
      // return typeId
      for (const item of this.pageData.status) {
        if (item.value === typeId * 1) {
          return item.label
        }
      }
    }
  }
}
