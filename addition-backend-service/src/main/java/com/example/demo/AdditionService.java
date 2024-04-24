package com.example.handlingformsubmission;

import org.springframework.stereotype.Service;

@Service
public class AdditionService {

    public double add(CalculatorRequest request) {
        return request.getNumber1() + request.getNumber2();
    }
}