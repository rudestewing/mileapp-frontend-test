<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-5">
                <div class="max-w-md mx-auto">
                    <div class="mb-5">
                        <img src="https://mile.app/69ece7b1819e760b63623e810922b59e.png" alt="">
                    </div>
                    <div class="text-gray-700 font-semibold tracking-wider text-xl">
                        Your one stop platform 
                        <br>
                        to manage all of your field service management
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <div class="card max-w-md mx-auto py-10">
                    <div class="max-w-xs mx-auto">
                        <h2 class="tracking-wider mb-5">
                            Sign In to
                            Recharge Direct
                        </h2>
                        <form @submit="handleSubmit">
                            <div class="form">
                                <label for="" class="form__label"></label>
                                <input type="text" class="form__control" placeholder="Username">
                            </div>
                            <div class="form">
                                <label for="" class="form__label"></label>
                                <input type="password" class="form__control" placeholder="**********">
                            </div>
                            <div class="form flex justify-end">
                                <a href="/login" class="text-gray-600 inline-block">
                                    Forgot password ?
                                </a> 
                            </div>
                            <div class="form">
                                <button class="btn btn-primary w-full">Login</button>
                            </div>

                            <div class="separator">
                                <span class="separator__text">
                                    or continue with
                                </span>
                            </div>

                            <div class="flex">
                                <div class="card">
                                    
                                </div>
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
    methods: {
        handleSubmit() {

        },
    }
}
</script>

<style lang="scss">
    .login {
        
    }
</style>