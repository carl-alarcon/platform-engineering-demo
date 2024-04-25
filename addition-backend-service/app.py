from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/add', methods=['POST'])
def add():
    number1 = float(request.form['number1'])
    number2 = float(request.form['number2'])
    result = number1 + number2

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
