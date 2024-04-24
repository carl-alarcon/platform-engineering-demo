package com.example.handlingformsubmission;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdditionController {

    @PostMapping("/add")
    public double add(@RequestBody CalculatorRequest request) {
        return request.getNumber1() + request.getNumber2();
    }
}

class CalculatorRequest {
    private double number1;
    private double number2;

    public double getNumber1() {
        return number1;
    }

    public double getNumber2() {
        return number2;
    }

    public void setNumber1(double number1) {
        this.number1 = number1;
    }

    public void setNumber2(double number2) {
        this.number2 = number2;
    }
}