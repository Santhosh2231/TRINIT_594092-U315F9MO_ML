
from flask_restful import Resource

class crops(Resource):
    def get(self):
        return {"val":10}


class cropprice(Resource):
    def get(self):
        return {"val":10}
