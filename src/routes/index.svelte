<script>
    import { goto } from '$app/navigation';


    let email = '';
    let password = '';
    let message = '';

   const login = async () => {

        const response = await fetch('http://localhost:5050/api/v1/auth/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        const data = await response.json();
        console.log(data);
        if(response.ok){
           goto('/dashboard')
        }
   
   }


</script>

<form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button type="submit">Login</button>
    {#if message}
      <p>{message}</p>
    {/if}
</form>
