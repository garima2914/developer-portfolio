export const projectsData = [
    {
        id: 1,
        name: 'Retail Sales Forecasting',
        description: "I built a retail sales forecasting system using the M5 dataset. The pipeline includes data loading in chunks, melting, merging, feature engineering, XGBoost modeling, evaluation (RMSE & R²), and ensembling. I developed a FastAPI-based dynamic API that predicts the next 7 days of sales for the top 10 products by revenue. Integrated Swagger docs for endpoints and connected the API with Power BI for visualization.",
        tools: ['Python', 'Pandas', 'XGBoost', 'FastAPI', 'Swagger', 'Power BI'],
        role: 'Data Analyst & ML Programmer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Nepika AI',
        description: "I worked on Nepika AI as an ML backend developer, building models for skin condition detection, skin issue localization, and product recommendations for skincare. I trained YOLO-based models for detecting acne, wrinkles, dark spots, and oily zones, and also used MobileNet CNN for classification of skin conditions. Additionally, I developed recommendation models to map detected issues to suitable ingredients and products. These models were integrated into the backend services to power Nepika’s AI-driven skincare assistant.",
        tools: ['Python', 'YOLOv8', 'PyTorch', 'MobileNet CNN', 'Scikit-learn', 'FastAPI', 'OpenCV'],
        role: 'ML Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Customer Churn Prediction',
        description: "I developed a churn prediction model to identify customers at risk of leaving. The project involved preprocessing customer data, feature engineering, and training ML models such as Logistic Regression, Random Forest, and XGBoost. Evaluated the models using metrics like accuracy, precision, recall, F1-score, and ROC-AUC. The final model helps businesses take proactive retention measures.",
        tools: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
        role: 'Data Analyst & ML Programmer',
        code: '',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },