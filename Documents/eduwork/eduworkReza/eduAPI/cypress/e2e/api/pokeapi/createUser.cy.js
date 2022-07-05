/// <reference types="cypress" />

describe ('Create new user', () => {
    it('Add new user', () => {
        var user = {
            "name":"reza",
            "job":"leader"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'reza')
            expect(response.body).to.have.property('job', 'leader')
        })
    });
}) 

// describe ('Create New User', () =>{
//     it('Successfully create new user', () => {
//         var user = {
//             "name": "Eduwork",
//             "job": "Education"
//         }
        
//         cy.request('POST', 'https://reqres.in/api/users',user).then((response)=>{
//             expect(response.status).equal(201)
//             expect(response.body).to.have.property('name', 'Eduwork')
//             expect(response.body).to.have.property('job', 'Education')
//         })
//     });
    
// })