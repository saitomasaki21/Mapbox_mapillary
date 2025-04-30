# AWS-Hosted Mapbox & Mapillary Viewer

## Description
A web application featuring synchronized Mapbox and Mapillary viewers. The app allows users to input Mapillary image IDs and view them at their geolocations with synchronized pan/zoom functionality.

## Features
- Mapbox viewer on the left
- Mapillary viewer on the right
- Input field for loading specific Mapillary images
- Synchronized pan/zoom between maps
- AWS-ready deployment

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- AWS account for hosting
- Mapbox and Mapillary API keys

### Installation
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd web-app
    ```

2. Set API keys in `.env`:
    ```env
    REACT_APP_MAPBOX_API_KEY=your_mapbox_api_key
    REACT_APP_MAPILLARY_API_KEY=your_mapillary_api_key
    ```

3. Install dependencies:
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    ```

4. Start the application:
    ```bash
    # Backend
    cd backend && npm start

    # Frontend
    cd ../frontend && npm start
    ```

### Deployment
- Use AWS Elastic Beanstalk for backend and S3 with CloudFront for frontend.