/// <reference types="cypress" />

describe ('Create new user', () => {
    it('Update exist user', () => {
        var user = {
            "name":"Put",
            "job":"update"
        }
        cy.request('PUT', 'https://reqres.in/api/users/407', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
            expect(response.body.job).to.eq(user.job)
        })
    });
}) 