from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import fitz  # PyMuPDF

app = Flask(__name__)
CORS(app)  # Cross-Origin Request (CORS)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyse_pdf', methods=['POST'])
def analyse_pdf():
    try:
        uploaded_file = request.files['file']
        if uploaded_file.filename != '':
            # Print data received from front
            content = uploaded_file.read()
            print(content)

            # Modify, Analyze the pdf
            return 'PDF received'

    except Exception as e:
        print('Error during the pdf analyze :', str(e))

    return 'Error during the pdf analyze ', 500

if __name__ == '__main__':
    app.run(debug=True)
