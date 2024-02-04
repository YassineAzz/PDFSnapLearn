import nltk
nltk.download('punkt')
import nltk
nltk.download('stopwords')
import nltk
nltk.download('averaged_perceptron_tagger')

from nltk import pos_tag
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk import FreqDist

def analyse_texte(texte):
    # Tokenisation du texte en mots
    mots = word_tokenize(texte)
    # Élimination des mots vides (stopwords)
    mots = [mot.lower() for mot in mots if mot.isalnum() and mot.lower() not in stopwords.words('english')]
    # Analyse lexicale pour obtenir les parties du discours
    pos_tags = pos_tag(mots)
    # Filtre des mots-clés en fonction des parties du discours (ici, on considère les noms et les adjectifs comme mots-clés)
    mots_cles = [mot[0] for mot in pos_tags if mot[1] in ('NN', 'NNS', 'JJ')]
    # print("Analyse du texte :", mots_cles)
    return mots_cles
