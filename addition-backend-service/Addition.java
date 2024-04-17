import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NumberController {

    private int number1;
    private int number2;

    @PostMapping("/submit")
    public String submitNumbers(@RequestBody NumberRequest request) {
        number1 = request.getNumber1();
        number2 = request.getNumber2();
        return "You've inputted two numbers " + number1 + " and " + number2;
    }
}

class NumberRequest {
    private int number1;
    private int number2;

    // Getters and setters
}