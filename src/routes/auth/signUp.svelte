<script>
    function handleSumbit(){
        console.log('form submitted')
    }
    function handleLogin(){

    }
</script>

<div class="flex flex-col justify-center items-center h-full test">

    <form class="flex flex-col justify-between space-y-3.5" on:submit={handleSumbit}>
        <div class="form-header pb-6">
            <div class="pb-3 text-2xl text-black">Get Started</div>
            <div class="text-gray-400">Create your account now</div>
        </div>
        <label for="user_name" class="text-sm text-gray-400">Username</label>
        <input type="text" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-80 rounded-md sm:text-sm focus:ring-1" id="user_name" name="user_name"/>
        <label for="email" class="text-sm text-gray-400">Email</label>
        <input type="text" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-80 rounded-md sm:text-sm focus:ring-1" placeholder="placeholder@gmail.com"  id="email" name="email"/>
        <label for="pass" class="text-sm text-gray-400">Password</label>
        <input type="text" class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-80 rounded-md sm:text-sm focus:ring-1" id="pass" name="pass"/>
        <button type="button" class="btn bg-gradient-to-br variant-gradient-secondary-primary"><input type="submit" value="Sign Up"></button>
        <div>
            <div class="text-gray-400">Have an account?</div>
            <a href="/" class="text-blue-400" on:click={handleLogin}>Login</a>
        </div>
   
    </form>

</div>

<style>
    .test {
        
    }
</style>