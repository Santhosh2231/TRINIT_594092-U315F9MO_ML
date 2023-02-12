# TRINIT_594092-U315F9MO_ML - AGROVISION

AgroVision is an innovative project aimed at revolutionizing the way farmers choose crops and make decisions about their farming operations. With the use of cutting-edge technology and machine learning algorithms, AgroVision provides farmers with a comprehensive and accurate picture of their farm's potential. This includes soil analysis, location-based data, and rainfall information, which can be used to determine the most suitable crops for a given area.

## Features of the Project
1. Crop Prediction based on Locality and seasons.
2. Crop Prediction based on the soil fertility
3. Crop Price Prediction.

### Project is live at : https://agrovision-trinit.netlify.app/

## API's of our project.

You can find API's here:

### Base URL: https://santhosh2211.pythonanywhere.com/

## List of API's

1. GET `/api/soilcrop` - Provides optimum soil conditions for each crop.
2. POST `/api/soilcrop` - It takes soil Nutrients as a parameter and predicts suitable and alternative crops.
3. GET `/api/cropanalysis` - Provides top most crops grown in states of India. (Note: Crops array be more than 10 in some cases)
4. POST `/api/croplocation` - Crop prediction based on locality and season.
5. GET `/api/getlocations` - List of state-wise districts that are used in our project.
6. GET `/api/cropprice` - Provides Top5, Bottom5 crops of this month and also Six months forecaster.
7. GET `/api/cropprice/<cropname>` - Analytics of individual crop.

## Interface of the project.

### Crop Prediction based on locality and seasons.
![screencapture-agrovision-trinit-netlify-app-locationcropprediction-2023-02-12-16_40_50](https://user-images.githubusercontent.com/87355988/218314134-6ea4a02b-18bb-4481-a2a9-03e750106491.png)

### Crop prediction based on soil fertility
![screencapture-agrovision-trinit-netlify-app-soilcropprediction-2023-02-12-16_41_36](https://user-images.githubusercontent.com/87355988/218314161-c4107868-6a5e-4b06-8ba6-5531c40c4b31.png)

### Crop Analytics.
![screencapture-agrovision-trinit-netlify-app-priceforecast-2023-02-12-07_47_57](https://user-images.githubusercontent.com/87355988/218289324-d13ae063-719f-46b0-98c5-fc154f025875.png)

### Individual Crop Prediction - Ex: Wheat
![screencapture-agrovision-trinit-netlify-app-priceforecast-wheat-2023-02-12-07_48_15](https://user-images.githubusercontent.com/87355988/218289336-7d36c208-6a46-487d-b8f6-c7c78ac7ede3.png)


