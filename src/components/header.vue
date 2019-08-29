<template>
    <div class="header">
        <div class="top">
            <div class="left">
<!--                logo-->
                <div class="logo"></div>
            </div>
            <div class="block"></div>
            <div class="middle">
                <el-row>
                    <el-col :span="6" v-for="(item,index) in list" :class="item">
                        <i :class="item.icon"></i>
                        <div
                            :key="index"
                            >{{ item.title }}
                        </div>
                    </el-col>

                </el-row>

            </div>
            <div class="right">
<!--                登录或搜索 暂未定-->
                <i class="el-icon-search"></i>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                // currentPath:'/',
                list:[
                    {
                        // 主页
                        title:'Home',
                        icon:'el-icon-s-home',
                    },
                    {
                        // 个人博客
                        title:'Blog',
                        icon:'el-icon-user-solid',
                    },
                    {
                        // 档案
                        title:'Archive',
                        icon:'el-icon-s-cooperation',
                    },
                    {
                        // 个人
                        title:'CV',
                        icon:'el-icon-s-management',
                    },

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    position:fixed;
    display: flex;
    height: 4.5rem;
    left:0;
    top:0;
    align-items: center;
    font: 0.8rem 'Ubuntu', sans-serif;
    background-color: floralwhite;
    .top{
        width: 100%;
        height:100%;
        display:flex;
        .left{
            display: flex;
            width:20%;
            align-items: center;
            .logo{
                width:11rem;
                height:2.6rem;
                margin-left:1.5rem;
                background: url('../assets/images/logo2.0.png') no-repeat center top;
                background-size:cover ;
            }

        }
        .block{
            width:25%;
        }
        .middle{
            width:45%;
            align-items: center;

            .el-row {
                top:1.2rem;

                /*margin-bottom: .5rem;*/
                &:last-child {
                    /*margin-bottom: 0;*/
                }
            }
            .el-col {
                border-radius: 4px;
            }
            .bg-purple-dark {
                background: #99a9bf;
            }
            .bg-purple {
                background: #d3dce6;
            }
            .bg-purple-light {
                background: #e5e9f2;
            }
            .grid-content {
                border-radius: 4px;
                min-height: 36px;
            }
            .row-bg {
                padding: 10px 0;
                background-color: #f9fafc;
            }
        }

        .right{
            display: flex;
            width:10%;
        }
    }
}
</style>