import { json } from '@sveltejs/kit';

let transactions = [];

export async function GET() {
    
    const response = await fetch('http://localhost:5050/api/v1/transactions', {
        method: 'GET',
        headers: {
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NDQwNzA5LCJleHAiOjE3MDk1MjcxMDl9.rCWPGfqEKBIxOx00EQfpZo0RKLQpO7mDCIB8foOAxyU',
            'Content-Type': 'application/json'
        }
    })

    transactions = await response.json();

	return json(transactions);
}
