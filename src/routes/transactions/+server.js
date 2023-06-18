import { json } from '@sveltejs/kit';

let transactions = [];

export async function GET() {
    
    const response = await fetch('http://localhost:5050/api/v1/transactions', {
        method: 'GET',
        headers: {
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2MTA2MDk3LCJleHAiOjE2ODYxOTI0OTd9.LBE0_U2nrjGbJEjc5uBg5LxbjdLhEzrw4qOwDNdD9MQ',
            'Content-Type': 'application/json'
        }
    })

    transactions = await response.json();

	return json(transactions);
}
