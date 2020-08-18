
Feature: Rest API for Valid Single Employee

  Scenario: Get Single Employee Info Valid GET Request

    Given baseUrl and valid resourcePath
    When Make a valid GET call
    Then I should receive status code 200

