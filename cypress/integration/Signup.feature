@signup
Feature: Sign up

  Scenario Outline: As a new user I want to signup successfully
    Given I am on the home page
    And I enter my name
    And I enter my email
    And I enter password "<password>" in the password field
    And I agree to the Terms and Conditions
    When I click the sign button
    Then I see "<message>" on the page
#
    Examples:
      | password  |message                          |
      | Today001  |Nearly there...check your email. |

  Scenario: Check user is signup successfully
    Given I am on the home page
    And I click sign in to wonderbill
    And I enter email "laura@gmail.com" in the email field
    And I enter password "Today001" my password
    When I click submit button
    Then I see message "Resend confirmation email" displayed