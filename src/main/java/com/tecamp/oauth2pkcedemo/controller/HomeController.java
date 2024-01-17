package com.tecamp.oauth2pkcedemo.controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
@CrossOrigin(origins = "*")
public class HomeController {


  @RequestMapping(value = "")
  @ResponseStatus(HttpStatus.OK)
  public String getHome() {
    return " this is home page to test oauth2";
  }
}
