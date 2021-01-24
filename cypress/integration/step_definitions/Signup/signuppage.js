
var faker = require('faker');
export class Signup_Page{

    enterName(){
        cy.get('[data-test=userNameField]').type(faker.name.firstName())
    }

    enterMyEmail(myemail){
        cy.get('[data-test=emailField]').type(myemail)
    }

    enterEmail(){
        cy.get('[data-test=emailField]').type(faker.internet.email())
    }

    enterPassword(mypassword){
        cy.get('._2I47M > ._2Y58Y > ._3lFKz').type(mypassword)
    }

    enterMyPassword(mypassw){
        cy.get('._2I47M > ._2Y58Y > ._1y6F3').type(mypassw)
    }

    checkTermsConditions(){
        cy.get(':nth-child(6) > ._2y_Jn').click()
    }

    clickSignUp(){
        cy.get('.Bb9vo').click()
    }

    verifyMessage(expectedName){
        cy.get('._24KAb').should('have.text', expectedName )
    }

    verifyPasswordStrength(passwordStrength){
        cy.get('.U-cmt').should('have.text', passwordStrength )
    }

    verifyErrorMessage(expectedError){
        cy.get('[data-test=errorMessage]').should('have.text', expectedError )
    }

    clickSignIn(){
        cy.get('.KJ7_b').click()
    }

    clickSubmitBtn(){
        cy.get('.CKk-I').click()
    }

    verifyResendConfirmationEmail(message){
        cy.get('.LWtzI').should('have.text', message )
    }



}

export const signup = new Signup_Page();
