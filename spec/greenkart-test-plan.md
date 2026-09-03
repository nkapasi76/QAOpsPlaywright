# GreenKart Selenium Practise Test Plan

## Application Overview

The GreenKart Selenium Practise application is a grocery shopping demo at https://rahulshettyacademy.com/seleniumPractise/#/. Users can search a catalog of vegetables, fruits, and dry goods; adjust item quantities; add and remove items from a cart; apply promo codes; place an order by selecting a country and accepting terms; browse Top Deals with search, sorting, page size, and pagination; and open the Terms & Conditions page. All tests assume a fresh browser context and an empty cart at the start.

## Test Scenarios

### 1. GreenKart Shopping

**Seed:** `tests/example.spec.js`

#### 1.1. Search for an existing product and add it with a custom quantity

**File:** `tests/greenkart-shopping/search-and-add-product.spec.js`

**Steps:**
  1. Open https://rahulshettyacademy.com/seleniumPractise/#/ in a fresh browser context.
    - expect: The GreenKart home page loads with the product catalog, product search box, cart link, and product cards.
  2. Enter `Carrot` in the "Search for Vegetables and Fruits" search box.
    - expect: The catalog is filtered to the Carrot product only.
    - expect: The Carrot card shows its price and quantity controls.
  3. Increase the Carrot quantity from 1 to 2 using the plus control.
    - expect: The Carrot quantity changes to 2.
    - expect: The product card remains visible and its layout does not shift unexpectedly.
  4. Click `ADD TO CART` for Carrot.
    - expect: The cart summary shows 1 item line and a price of 112, matching 2 x 56.
    - expect: The cart can be opened from the header.
  5. Open the cart popover.
    - expect: Carrot - 1 Kg is listed with quantity 2 and total 112.
    - expect: A `PROCEED TO CHECKOUT` control is available.

#### 1.2. Search returns no matching products

**File:** `tests/greenkart-shopping/search-no-results.spec.js`

**Steps:**
  1. Open the GreenKart home page in a fresh browser context.
    - expect: The full product catalog is visible.
  2. Enter a unique nonexistent value such as `not-a-real-vegetable` in the product search box.
    - expect: No product card is displayed.
    - expect: The page does not add an item to the cart or show unrelated products.
  3. Clear the search field.
    - expect: The product catalog is restored.

#### 1.3. Remove an item from the cart

**File:** `tests/greenkart-shopping/remove-cart-item.spec.js`

**Steps:**
  1. Open the home page in a fresh browser context, search for `Carrot`, increase its quantity to 2, and add it to the cart.
    - expect: The cart summary reflects one line item with total 112.
  2. Open the cart popover and click the remove `x` control for Carrot.
    - expect: Carrot is removed from the cart.
    - expect: The cart item count and price summary return to zero or an empty-cart state.
    - expect: The checkout control is no longer available for the removed item.

#### 1.4. Apply valid and invalid promo codes

**File:** `tests/greenkart-shopping/promo-code.spec.js`

**Steps:**
  1. Open the home page in a fresh browser context, add one Carrot to the cart, and open the cart page.
    - expect: The cart table contains Carrot with quantity 1, unit price 56, and total 56.
  2. Enter `INVALID` in `Enter promo code` and click `Apply`.
    - expect: The message `Invalid code ..!` is shown.
    - expect: The discount remains 0% and the total remains 56.
  3. Replace the promo code with `rahulshettyacademy` and click `Apply`.
    - expect: The message `Code applied ..!` is shown.
    - expect: The discount changes to 10%.
    - expect: The total after discount is recalculated to 50.4.

#### 1.5. Validate checkout country and terms requirements

**File:** `tests/greenkart-shopping/checkout-validation.spec.js`

**Steps:**
  1. Open the home page in a fresh browser context, add one Carrot to the cart, open the cart page, and click `Place Order`.
    - expect: The country checkout page opens with a country dropdown, terms checkbox, Terms & Conditions link, and `Proceed` button.
  2. Click `Proceed` without selecting a country or accepting terms.
    - expect: The order is not submitted.
    - expect: The message `Please accept Terms & Conditions - Required` is shown or the terms control is visibly marked invalid.
  3. Select `India` but leave the terms checkbox unchecked, then click `Proceed`.
    - expect: The order is not submitted.
    - expect: The terms validation message remains visible.
  4. Accept the terms checkbox and click `Proceed`.
    - expect: The checkout succeeds and the app returns to the shopping home route.
    - expect: The cart is cleared after successful order placement.

#### 1.6. Complete a successful order

**File:** `tests/greenkart-shopping/complete-order.spec.js`

**Steps:**
  1. Open the home page in a fresh browser context, add one Carrot to the cart, and open the cart page.
    - expect: The cart table shows Carrot with quantity 1, unit price 56, and total 56.
  2. Click `Place Order`, select `India`, accept the Terms & Conditions checkbox, and click `Proceed`.
    - expect: The country and terms form is accepted.
    - expect: The app returns to the home route after order submission.
    - expect: The cart summary is empty, confirming the order was processed.

#### 1.7. Browse and filter Top Deals

**File:** `tests/greenkart-shopping/top-deals.spec.js`

**Steps:**
  1. Open the GreenKart home page in a fresh browser context and click `Top Deals`.
    - expect: The Top Deals page opens.
    - expect: A deals table, page-size control, search box, sortable columns, and pagination controls are visible.
  2. Enter `Tomato` in the Top Deals `Search` field.
    - expect: Only the Tomato row remains visible.
    - expect: The row displays Tomato with price 37 and discount price 26.
  3. Clear the search and click the `Price` column header.
    - expect: The table rows are reordered by price.
    - expect: The table announces or visually reflects the active sort direction.
  4. Change the page size and navigate to page 2, then use `Next` and `Previous`.
    - expect: The number of visible rows follows the selected page size.
    - expect: Pagination moves between available pages and disables Previous on the first page and Next on the last page.

#### 1.8. Open Terms & Conditions from checkout

**File:** `tests/greenkart-shopping/terms-and-conditions.spec.js`

**Steps:**
  1. Open the home page in a fresh browser context, add one Carrot to the cart, open the cart page, and click `Place Order`.
    - expect: The country checkout page is displayed.
  2. Click the `Terms & Conditions` link.
    - expect: The policy page or policy view opens.
    - expect: The terms content is displayed and the user can navigate back to checkout or the shopping flow.
