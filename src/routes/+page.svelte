<script>
import { onMount } from 'svelte';
const bearer = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NDQwNzA5LCJleHAiOjE3MDk1MjcxMDl9.rCWPGfqEKBIxOx00EQfpZo0RKLQpO7mDCIB8foOAxyU';

	let accountTypes = []

	onMount(async () => {
		const response = await fetch('http://localhost:5050/api/v1/account_types', {
			method: 'GET',
			headers: {
				'Authorization': bearer,
				'Content-Type': 'application/json'
			}
		})
	
		accountTypes = await response.json();
	})
		

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="table-container">
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>id</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{#each accountTypes as row, i}
					<tr>
						<td>{row.id}</td>
						<td>{row.name}</td>
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
