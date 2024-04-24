package com.example.handlingformsubmission;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/add")
public class AdditionController {

    @Autowired
    private AdditionService additionService;

    @PostMapping()
    public double add(@RequestBody CalculatorRequest request) {
        return additionService.add(request);
    }
}