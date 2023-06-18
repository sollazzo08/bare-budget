<script>
    import { onMount } from 'svelte';

    
        let transactions = []
    
        onMount(async () => {
            const response = await fetch('/transactions');
        
            transactions = await response.json();
        })
            
    
    </script>
    
    <div class="container h-full mx-auto flex justify-center items-center">
        <div class="table-container">
            <!-- Native Table Element -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Account</th>
                        <th>Date</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {#each transactions as row, i}
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.amount}</td>
                            <td>{row.transaction_type[0]['name']}</td>
                            <td>{row.category['name']}</td>
                            <td>{row.account[0]['name']}</td>
                            <td>{row.date}</td>
                            <td>{row.note}</td>
                        </tr>
                    {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3"></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    
    </div>
    
    <style lang="postcss">
    
    </style>
    