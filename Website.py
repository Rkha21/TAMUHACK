from flask import Flask, render_template, request

app = Flask(__name__)

def calculate_responsibility(salary, save_amount, purchase_amount):
    remaining_income = salary - save_amount - purchase_amount
    if remaining_income >= 0:
        return "It is responsible to make the purchase."
    else:
        return "It may not be responsible to make the purchase. Consider saving more or reducing the purchase amount."

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        salary = float(request.form['salary'])
        wants_to_save = request.form.get('wants_to_save', False)
        save_amount = float(request.form.get('save_amount', 0))
        purchase_amount = float(request.form.get('purchase_amount', 0))

        if wants_to_save:
            advice = calculate_responsibility(salary, save_amount, purchase_amount)
        else:
            advice = "Consider saving for future financial goals."

        return render_template('result.html', name=name, email=email, advice=advice)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
