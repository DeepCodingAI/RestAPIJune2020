
Feature: Rest API for InValid Single Employee

  Scenario: Get Single Employee Info InValid GET Request

    Given baseUrl and invalid resourcePath
    When Make a invalid GET call
    Then I should receive status code 404

