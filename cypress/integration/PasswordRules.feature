@passwordRules
Feature: Password Rules

  Scenario Outline: Check Password Strength
    Given I am on the home page
    And I enter my name
    And I enter email "<email>" in the email field
    And I enter password "<password>" in the password field
    Then I see password strength "<passwordStrength>" displayed

    Examples:
      | email             | password    |passwordStrength |
      | agnes@gmail.com   | QX          |Weak             |
      | mary@gmail.com    | Qxtg        |OK               |
      | paul@gmail.com    | weTYUIH     |Good             |
      | janet@gmail.com   | xzTYUIHyu   |Great            |
      | philips@gmail.com | weTYUIHyu99 |Wonderful        |




