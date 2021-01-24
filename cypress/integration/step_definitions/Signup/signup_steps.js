import {signup} from "./signuppage";

Given(/^I am on the home page$/,  () => {
    cy.visit('baseUrl')
    cy.get('#_evidon-accept-button').click()
});

Given(/^I enter email "([^"]*)" in the email field$/, (myemail) => {
    signup.enterMyEmail(myemail)
});

Given(/^I enter password "([^"]*)" in the password field$/, (mypassword) => {
    signup.enterPassword(mypassword)
});

Given(/^I agree to the Terms and Conditions$/,  () => {
    signup.checkTermsConditions()
});

When(/^I click the sign button$/, () => {
    signup.clickSignUp()
});

Then(/^I see "([^"]*)" on the page$/, (expectedName) => {
    signup.verifyMessage(expectedName)

});

Then(/^I see error "([^"]*)" on the page$/, (expectedError) => {
    signup.verifyErrorMessage(expectedError)

});

Then(/^I see password strength "([^"]*)" displayed$/, (passwordStrength) => {
    signup.verifyPasswordStrength(passwordStrength)

});

Given(/^I enter my name$/,  () => {
    signup.enterName()
});

Given(/^I enter my email$/, () => {
    signup.enterEmail()
});

Given(/^I click sign in to wonderbill$/,  () => {
    signup.clickSignIn()
});

Given(/^I enter password "([^"]*)" my password$/, (mypassw) => {
    signup.enterMyPassword(mypassw)
});

Given(/^I click submit button$/,   () => {
    signup.clickSubmitBtn()
});
Then(/^I see message "([^"]*)" displayed$/, (message) => {
    signup.verifyResendConfirmationEmail(message)

});