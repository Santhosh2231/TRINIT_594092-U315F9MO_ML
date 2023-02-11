import sys
 # setting path
sys.path.append('../controllers')
# importing
from controllers.cropLocation import cropLocation,CropAnalysis, GetLocations
from controllers.cropSoil import soilcrop,SoilAnalysis
from controllers.cropPrice import crops,cropprice



def crop_prediction_routes(api):
    api.add_resource(SoilAnalysis, '/api/soilcrop')
    api.add_resource(soilcrop, '/api/soilcrop')
    api.add_resource(GetLocations, '/api/getlocations')
    api.add_resource(CropAnalysis, '/api/cropanalysis')
    api.add_resource(cropLocation, '/api/croplocation')
    api.add_resource(crops,'/api/cropprice')
    api.add_resource(cropprice,'/api/cropprice/<name>')