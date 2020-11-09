<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-5">
                <div class="max-w-md mx-auto h-full md:flex md:flex-col justify-center">
                    <div class="mb-5 w-32 md:w-full mx-auto">
                        <img src="https://mile.app/69ece7b1819e760b63623e810922b59e.png" alt="">
                    </div>
                    <div class="text-gray-700 font-semibold tracking-wider text-xl hidden md:block">
                        Your one stop platform 
                        <br>
                        to manage all of your field service management
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <div class="card card-shadow max-w-md mx-auto py-10">
                    <div class="max-w-xs mx-auto">
                        <h2 class="tracking-wider mb-5">
                            Sign In to Lorem Ipsum
                        </h2>
                        <form @submit="handleSubmit">
                            <div class="form">
                                <label for="" class="form__label"></label>
                                <input type="text" v-model="form.username" class="form__control" placeholder="Username" autofocus>
                            </div>
                            <div class="form">
                                <label for="" class="form__label"></label>
                                <input type="password" v-model="form.password" class="form__control" placeholder="**********">
                            </div>
                            <div class="form flex justify-end">
                                <a href="/login" class="text-gray-600 inline-block text-sm">
                                    Forgot password ?
                                </a> 
                            </div>
                            <div class="form">
                                <button class="btn btn-primary w-full">Login</button>
                            </div>
                            <div class="separator mb-5">
                                <span class="separator__text">
                                    or continue with
                                </span>
                            </div>
                            <div class="row mb-5">
                                <div class="col-4">
                                    <a class="card border shadow-sm flex justify-center items-center hover:bg-blue-600 hover:text-gray-100 cursor-pointer">
                                        <i class="fab fa-google text-2xl"></i>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="card border shadow-sm flex justify-center items-center hover:bg-blue-600 hover:text-gray-100 cursor-pointer">
                                        <i class="fab fa-facebook text-2xl"></i>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="card border shadow-sm flex justify-center items-center hover:bg-blue-600 hover:text-gray-100 cursor-pointer">
                                        <i class="fab fa-github text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <span class="text-sm text-gray-700 text-center block">
                                    Not registered yet? <a href="/" class="text-blue-600"> Contact us </a> for more info
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        handleSubmit() {
            
        },
    }
}
</script>