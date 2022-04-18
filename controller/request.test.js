const request = require('supertest')
const app = require('../server')


const validUsername = 'soostone'
const validRepo = 'katip'
const validParams = `/${validUsername}/${validRepo}`
const validRequest = request(app).get(validParams)

const invalidUsername = 'feifjeio'
const invalidRepo = 'fowkxw'
const invalidParams = `/${invalidUsername}/${invalidRepo}`
const invalidRequest = request(app).get(invalidParams)


describe('Tests GET /:username/:repo', () => {
    // Test will fail if API Rate limit was exceeded
    test('It should respond with a 200 success', async () => {
        const response = await validRequest.expect(200)
    })

    test('It should respond with a 500 error with exact error message', async () => {
        // Fake repo to generate expected response
        const response = await invalidRequest.expect(500)

        expect(response.body).toStrictEqual({
            error: `This repository (${invalidRepo}) by ${invalidUsername} either has no open pull requests, is private or doesn't exist.`
        })
    })

})

describe('Tests response.body Schema', () => {
    test('It should respond with truthy number: commit_count', async () => {
        const response = await validRequest
        
        expect(response.body[0].commit_count).toBeTruthy()
    })

    test('It should match object', async () => {
        const response = await validRequest

        expect(response.body[0]).toHaveProperty('id','number','title','author','commit_count')
    })

})