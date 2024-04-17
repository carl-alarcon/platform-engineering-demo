import org.springframework.web.bind.annotation.PostMapping;
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