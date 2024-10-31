import { test, expect, request } from '@playwright/test'

test.describe.parallel('API testing', () => {
    const baseUrl = 'https://reqres.in/api'
    test('Assert Response Status with valid URL', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
    })

    test('Assert Response Status with Invaid Endpoint', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/two`)

        expect(response.status()).toBe(404)
    })
    test('GET Request - Get User Data', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(2)
        expect(responseBody.data.first_name).toBe('Janet')
        expect(responseBody.data.last_name).toBe('Weaver')
        expect(responseBody.data.email).toBeTruthy()
    })

    test('POST Request - Create New User', async ({ request }) => {
        const response = await request.post(`${baseUrl}/users`, {
            data: {
                id: 1000
            }
        })
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(201)
        expect(responseBody.id).toBe(1000)
        expect(responseBody.createdAt).toBeTruthy()
    })

    test('POST Request - Login', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        const responseBody = JSON.parse(await response.text())
        const token = responseBody.token

        expect(response.status()).toBe(200)
        expect(token).toBeTruthy()
    })

    test('POST Request - Login Fail', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                "email": "eve.holt@reqres.in",
            }
        })
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe('Missing password')

    })

    test('PUT request - Update User', async ({ request }) => {
        const response = await request.put(`${baseUrl}/user/2}`, {
            data: {
                name: "Ryan Gosling",
                job: "actor"
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe("Ryan Gosling")
        expect(responseBody.job).toBe("actor")
        expect(responseBody.updatedAt).toBeTruthy()
    })

    test('Delete request - Delete User', async ({ request }) => {
        const response = await request.delete(`${baseUrl}/user/2`)
        expect(response.status()).toBe(204)
    })
})
