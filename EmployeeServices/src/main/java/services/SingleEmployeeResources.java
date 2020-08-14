package services;

import io.restassured.response.Response;
import org.testng.Assert;

import static io.restassured.RestAssured.given;

public class SingleEmployeeResources {

    String baseUrl = "http://info.venturepulse.org:8080/service-webapp";
    String validResourcePath = "/api/SingleEmployeeResources/";
    String inValidResourcePath = "/api/SingleEmployeeResourcesByPass/";
    String objectId = "5f18fdf92fc21306c59854ce";

    public void callSingleEmployeeResourcesSuccessStatus(){
        Response response = given().when().get(baseUrl + validResourcePath + objectId).then().statusCode(200).extract().response();
        String statusLine = response.statusLine();
        int statusCode = response.getStatusCode();
        System.out.println(statusLine);
        Assert.assertEquals(statusLine,"HTTP/1.1 200 OK");
        response.getBody().prettyPrint();
        Assert.assertEquals(statusCode, 200);
    }

    public void callSingleEmployeeResourcesFailStatus(){
        Response response = given().when().get(baseUrl + inValidResourcePath + objectId).then().statusCode(404).extract().response();
        String statusLine = response.statusLine();
        int statusCode = response.getStatusCode();
        System.out.println(statusLine);
        Assert.assertEquals(statusLine,"HTTP/1.1 404 Not Found");
        response.getBody().prettyPrint();
        Assert.assertEquals(statusCode, 404);
    }
}
