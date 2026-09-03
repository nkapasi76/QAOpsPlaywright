Feature: Ecommerce Validation
  @Regression
  Scenario: Placing an order
    Given when a successful login to the Ecommerce application with "nkapasi@test.com" and "!Test1234"
    When  Add "iphone 13 pro" to Cart
    Then verify "iphone 13 pro" is displayed in the cart
    When Enter valid details and place the order
    Then Verify order is present in the order history page