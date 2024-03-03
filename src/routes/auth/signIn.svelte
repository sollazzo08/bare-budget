<script>
    import {navigate} from "svelte-routing";

    let email = '';
    let username = '';
    let message = '';

   const login = async () => {

        const response = await fetch('', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
   }

   const data = await response.JSON();

   

</script>

<form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={} placeholder="Password">
    <button type="submit">Login</button>
    {#if message}
      <p>{message}</p>
    {/if}
</form>
