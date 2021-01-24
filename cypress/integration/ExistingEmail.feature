@existingEmail
Feature: Existing Email up

  Scenario Outline: Check error for existing email
    Given I am on the home page
    And I enter my name
    And I enter email "<email>" in the email field
    And I enter password "<password>" in the password field
    And I agree to the Terms and Conditions
    When I click the sign button
    Then I see error "<errormessage>" on the page
#
    Examples:
      | email            | password  |errormessage                 |
      | laura@gmail.com  | Today001  |Email has already been taken |