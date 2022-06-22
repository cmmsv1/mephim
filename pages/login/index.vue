<template>
    <div class="login">
        <form ref="formLogin" @submit.prevent="submit">
            <h3>Login</h3>
            <div class="form-group">
                <label for="">Email</label>
                <input name="email" type="text" />
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input name="password" type="password" />
            </div>
            <div class="button">
                <button
                    type="submit"
                    :disabled="loading"
                    :class="{ disabled: loading }"
                >
                    <loading v-if="loading" :load="load" /><span>Login</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
// import axios from 'axios'
// import Cookies from 'js-cookie'
// import { mapState } from 'vuex'
import Loading from '~/components/Loading.vue'

export default {
    components: { Loading },
    layout: 'blog',
    auth: false,
    middleware: 'redirect',
    data() {
        return {
            loading: false,
            userAuth: {
                email: '',
                password: '',
            },
            load: {
                width: 20,
                height: 20,
                color: '#fff',
                auth: true,
            },
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie')
        // if (this.$auth.loggedIn) {
        //     this.$router.push('/dashboard')
        // }
    },
    methods: {
        async submit() {
            try {
                this.loading = true
                const formData = new FormData(this.$refs.formLogin)
                await this.$auth.loginWith('laravelSanctum', {
                    data: formData,
                })
                this.loading = false
                this.$router.push('/dashboard')
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: rgb(34, 193, 195);
    background: linear-gradient(
        0deg,
        rgba(34, 193, 195, 1) 0%,
        rgba(176, 227, 165, 1) 51%,
        rgba(253, 187, 45, 1) 100%
    );
    form {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px 20px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        h3 {
            text-align: center;
            font-size: 25px;
            margin-bottom: 20px;
        }
        .form-group {
            min-width: 400px;
            margin-bottom: 15px;
            label {
                display: block;
                margin-bottom: 7px;
            }
            input {
                display: block;
                width: 100%;
                height: calc(2.1rem + 2px);
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                &:focus {
                    color: #495057;
                    background-color: #fff;
                    border-color: #80bdff;
                    outline: 0;
                    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
                }
            }
        }
        button.disabled {
            background: #495057 !important;
        }
        button {
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            background: rgb(63, 94, 251);
            background: radial-gradient(
                circle,
                rgba(63, 94, 251, 1) 0%,
                rgba(252, 70, 107, 1) 100%
            );
            width: 100%;
            color: #fff;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            cursor: pointer;
            &:hover {
                border-color: #80bdff;
            }

            .loading {
                line-height: 1.5;
                margin-right: 5px;
            }
        }
    }
}
</style>
