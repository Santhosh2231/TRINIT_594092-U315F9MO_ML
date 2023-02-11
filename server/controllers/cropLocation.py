
from flask_restful import Resource

class cropLocation(Resource):
    def get(self):
        return {"val":10}