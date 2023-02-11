import sys
# setting path
sys.path.append('../models')
from flask import request,Response
from flask_restful import Resource
# from models import soil_crop
import joblib
from pathlib import Path
import pandas as pd
import numpy as np
import json
from math import sqrt


def euclidean_distance(row1, row2):
        distance = 0.0
        for i in range(len(row1)-1):
            distance += (row1[i] - row2[i])**2
        return sqrt(distance)
 
    # Locate the most similar neighbors
def get_neighbors(train, test_row, num_neighbors):
    distances = list()
    for train_row in train:
        dist = euclidean_distance(test_row, train_row)
        distances.append((train_row, dist))
    distances.sort(key=lambda tup: tup[1])
    neighbors = list()
    for i in range(num_neighbors):
        neighbors.append(distances[i][0])
        # print(neighbors[-1])

    return neighbors

class soilcrop(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        N = float(body["N"])
        P = float(body["P"])
        K = float(body["K"])
        temp = float(body["temperature"])
        humidity = float(body["humidity"])
        ph = float(body["ph"])
        rainfall = float(body["rainfall"])
        test_data = np.array([[N,P,K,temp,humidity,ph,rainfall]])
        data = pd.DataFrame(test_data)

        path = Path.cwd()
        path_2 = str(path)+"\\controllers\\soil_crop.pkl"
        print(path_2)
        SVC_from_joblib = joblib.load(path_2)
        y_pred = SVC_from_joblib.predict(data)
        print(y_pred)
        path_2 = str(path)+"\\..\\Dataset\\"+"Crop_recommendation.csv"
        dataset=pd.read_csv(path_2).to_numpy()
        print(test_data[0])
        neighbors = get_neighbors(dataset, test_data[0], 120)
        pred=[]
        for neighbor in neighbors:
            pred.append(neighbor[-1])
        # print(pred)
        list1 = np.unique(pred).tolist();
        # print(y_pred)
        # print(list1)
        if y_pred in list1:
            list1.remove(y_pred)
        res = {
            "main":[y_pred[0]],
            "alternative":list1
        }
        res=json.dumps(res)
        res=json.loads(res)
        
        return {'context':res}, 200
    


class SoilAnalysis(Resource):
    def get(self):
        path_2 = Path.cwd()
        path_2 = str(path_2)+"\\..\\Dataset\\"+"Crop_recommendation.csv"
        df=pd.read_csv(path_2)
        context = pd.merge(df.groupby(['label'])['temperature', 'humidity', 'ph', 'rainfall'].min().round(0),df.groupby(['label'])['temperature', 'humidity', 'ph', 'rainfall'].max().round(0),on="label").transpose().to_json()
        context = json.loads(context)
        
        return {'context':context},200