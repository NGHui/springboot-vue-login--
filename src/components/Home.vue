<template>
  <el-table
    :data="userList"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="password"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                userList: [
                    {
                    id: '',
                    username: '',
                    password: ''
                    },
                ]
            }
        },
        methods: {
            getList() {
                this.$http.get('api/list',{
                    headers:{
                        'lz-shopid':"huihui"
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.userList=res.data.list
                        //将后端传递的token放在session域中,放在客户端,减轻服务端的压力
                        window.sessionStorage.setItem("hui-token",res.data.token)
                        //可以获取到cookies中的信息
                        //console.log(this.$cookies.isKey('hui'))
                        //console.log(sessionStorage.getItem('list'))
                        //console.log(this.userList)
                    })
            },
            test(){
                this.$http.get('api/hui',{
                    /*params: {
                        name: 12345,

                    },*/
                    headers:{
                        'token':"huihui"
                    }
                })
            }

        },
        created() {
            this.getList()
            this.test();
        }
    }
</script>

<style scoped>

</style>
