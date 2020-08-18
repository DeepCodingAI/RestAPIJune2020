$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/GetInValidSingleEmployee.feature");
formatter.feature({
  "name": "Rest API for InValid Single Employee",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Single Employee Info InValid GET Request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseUrl and invalid resourcePath",
  "keyword": "Given "
});
formatter.match({
  "location": "SingleEmployeeInValidCallStepsDefinition.baseurl_and_invalid_resourcePath()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make a invalid GET call",
  "keyword": "When "
});
formatter.match({
  "location": "SingleEmployeeInValidCallStepsDefinition.make_a_invalid_GET_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "SingleEmployeeInValidCallStepsDefinition.i_should_receive_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/GetValidSingleEmployee.feature");
formatter.feature({
  "name": "Rest API for Valid Single Employee",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Single Employee Info Valid GET Request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseUrl and valid resourcePath",
  "keyword": "Given "
});
formatter.match({
  "location": "SingleEmployeeValidCallStepsDefinition.baseurl_and_valid_resourcePath()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make a valid GET call",
  "keyword": "When "
});
formatter.match({
  "location": "SingleEmployeeValidCallStepsDefinition.make_a_valid_GET_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "SingleEmployeeValidCallStepsDefinition.i_should_receive_status_code()"
});
formatter.result({
  "status": "passed"
});
});