# app.py
from flask import Flask, render_template, request, redirect, url_for
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)

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
            return redirect(url_for('result_save', name=name, email=email, advice=advice))

        else:
            advice = "Consider saving for future financial goals."
            return render_template('result_save.html', name=name, email=email, advice=advice)

    return render_template('index.html')

@app.route('/result_save')
def result_save():
    name = request.args.get('name')
    email = request.args.get('email')
    advice = request.args.get('advice')
    return render_template('result_save.html', name=name, email=email, advice=advice)

if __name__ == '__main__':
    csrf.init_app(app)
    app.run(debug=True)
