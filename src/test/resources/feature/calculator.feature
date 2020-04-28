Feature: Test Calculator

  Scenario Outline: Test Plus Operator on Calculator
    Given I am on the calculator app
    When I click <number1>
    And I click plus
    And I click <number2>
    And I click equals
    Then the result should be <result>

    Examples:
      | number1 | number2 | result |
      |    1 |   2 |    3 |
      |    1 |   1 |   2 |
