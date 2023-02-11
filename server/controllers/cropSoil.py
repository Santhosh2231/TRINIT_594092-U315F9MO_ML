from flask_restful import Resource

class soilcrop(Resource):
    def get(self):
        return {"val":10}


class SoilAnalysis(Resource):
    def get(self):
        return {"val":10}
