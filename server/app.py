from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import fitz  # PyMuPDF

from PDF_analyzer import analyse_texte 

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
            # Open the PDF file
            pdf_document = fitz.open(stream=uploaded_file.read(), filetype="pdf")
            # Iterate through all pages and extract text
            for page_num in range(pdf_document.page_count):
                page = pdf_document[page_num]
                text = page.get_text()
                result_PDF = analyse_texte(text)
            print(result_PDF)
                # print(text)
            return 'PDF received'

    except Exception as e:
        print('Error during the pdf analyze :', str(e))

    return 'Error during the pdf analyze ', 500

if __name__ == '__main__':
    app.run(debug=True)
