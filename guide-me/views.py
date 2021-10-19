from flask import *
views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/eqamat")
def eqamaat():
    return render_template("eqamat.html")

@views.route("/eqamat/content")
def content():
    return render_template("page1.html")
@views.route("/new-visitors")
def page():
    return render_template("new-visitors.html")