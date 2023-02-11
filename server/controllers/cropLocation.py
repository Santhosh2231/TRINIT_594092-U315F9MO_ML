
from flask_restful import Resource
from flask import request,Response
import pandas as pd
import numpy as np;
from pathlib import Path
from math import sqrt;
import json

def euclidean_distance(row1, row2):
    distance = (row1[0]-row2[6])**2
    return sqrt(distance)
 
# Locate the most similar neighbors
def get_neighbors(train, test_row, num_neighbors):
    distances = list()
    for train_row in train:
        #print(train_row)
        dist = euclidean_distance(test_row, train_row)
        distances.append((train_row, dist))
    distances.sort(key=lambda tup: tup[1])
    #print(distances)
    neighbors = list()
    for i in range(num_neighbors):
        neighbors.append(distances[i][0])
    return neighbors

class cropLocation(Resource):
    def post(self):
        body = request.get_json()
        location = body["location"]
        season = body["season"]
        value = 1;
        
        if season=="Jan-Feb":
            value=2
        elif season=="Mar-May":
            value=3
        elif season=="Jun-Sep":
            value=4
        elif season=="Oct-Dec":
            value=3
        elif season=="ANNUAL":
            value=12
        else:
            value=1

        path = Path.cwd()
        path_1 = str(path)+"\\..\\Dataset\\"+"Commodity_prices"
        df_commodity = pd.read_csv(filepath_or_buffer=path_1)
        path_2 = str(path)+"\\..\\Dataset\\"+"Crop_recommendation.csv";
        df_crop = pd.read_csv(path_2)
        path_3 = str(path)+"\\..\\Dataset\\"+"district wise rainfall normal.csv"
        df_rainfall = pd.read_csv(path_3)
        df_crop["label"] = df_crop["label"].replace( ["rice","papaya","watermelon","muskmelon","apple","orange","coconut","jute","grapes","mango","banana","pomegranate","lentil","blackgram","maize","mungbean","mothbeans","coffee","cotton","pigeonpeas","kidneybeans","chickpea"],["Rice","Papaya","Water Melon","Karbuja(Musk Melon)","Apple","Orange","Coconut","Jute","Grapes","Mango","Banana","Pomegranate","Lentil (Masur)(Whole)","Black Gram (Urd Beans)(Whole)","Maize","Green Gram (Moong)(Whole)","Moath Dal","Tomato","Cotton","Pegeon Pea (Arhar Fali)","Niger Seed (Ramtil)","Bengal Gram Dal (Chana Dal)"])
        Crops = df_crop["label"].unique()
        df_commodity = df_commodity[df_commodity["commodity"].isin(Crops)]
        test = df_rainfall[df_rainfall["DISTRICT"]==location][season].to_numpy()
        test = test/value;
        dataset = df_crop.to_numpy()
        neighbors = get_neighbors(dataset, test, 100)
        pred=[]
        print(test)
        for neighbor in neighbors:
            pred.append(neighbor[-1])

        val = np.unique(pred)
        data = df_commodity[df_commodity["commodity"].isin(val)]
        dict = {}
        for i in val:
            max_val = max(data[data["commodity"]==i]["max_price"])
            min_val = max(data[data["commodity"]==i]["min_price"])
            min_modal_price = min(data[data["commodity"]==i]["modal_price"])
            max_modal_price = max(data[data["commodity"]==i]["modal_price"])
            avg_modal_price = data[data["commodity"]==i]["modal_price"].mean()
            avg_modal_price = round(avg_modal_price);
            dict[i] = {"Max_Val":max_val,"Min_Val":min_val,"Min_Modal_Price":min_modal_price,"Max_Modal_Price":max_modal_price,"Avg_Modal_Price":avg_modal_price}

        df = pd.DataFrame.from_dict(dict).transpose() 
        context = df.sort_values("Avg_Modal_Price", ascending=False).transpose()
        context = context.to_json()
        context = json.loads(context)
        
        return {'context':context},200


class CropAnalysis(Resource):
    def get(self):
        path = Path.cwd()
        path_1 = str(path)+"\\..\\Dataset\\"+"Commodity_prices"
        df_commodity = pd.read_csv(filepath_or_buffer=path_1)
        states = df_commodity["state"].unique()
        stateCrops = {}
        for i in states:
            crops = df_commodity[df_commodity["state"]==i]["commodity"].unique()
            stateCrops[i]=crops.tolist()

        #content = json.loads(stateCrops)

        return {"content":stateCrops}

class GetLocations(Resource):
    def get(self):
        path = Path.cwd()
        path_3 = str(path)+"\\..\\Dataset\\"+"district wise rainfall normal.csv"
        df_rainfall = pd.read_csv(path_3)
        k = df_rainfall["STATE_UT_NAME"].unique()
        k.sort()
        state_district = {}
        for i in k:
            district = df_rainfall[df_rainfall["STATE_UT_NAME"]==i]["DISTRICT"].unique()
            district.sort()
            state_district[i] = district.tolist()

        return {"content":state_district}

        
                                




        
        