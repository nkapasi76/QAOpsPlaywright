Feature: Error2 Validation
    @Smoke
  Scenario Outline: Placing an order
    Given login to the Ecommerce2 application with "<username>" and "<password>"
    Then verify the error message "Invalid username or password" is displayed
    Examples:
      | username | password |
      | nish     | test     |
      | john     | test1    |   
      | nkapasi@gmail.com| !Test1234    |   
