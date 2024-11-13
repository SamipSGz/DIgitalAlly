
# Digital Ally

**Digital Ally for Women’s Rights** is an AI-powered platform that helps activists and communities track, document, and report women’s rights violations. It monitors news, social media, and official reports in real time, connects users to support networks, and provides tools for automated reporting and legal aid. The platform empowers global advocacy for women’s rights and safety.


## Core Features
- **Real-Time Monitoring**: AI-powered monitoring of news outlets, social media, and government reports to identify women’s rights violations.
- **Automated Reporting**: Upload and document incidents using text, images, videos, and voice recordings. Automatic report generation using computer vision and speech recognition.
- **Geospatial Analytics**: Visualize and analyze hotspots for women’s rights violations using geospatial data.
- **Support Network Integration**: Connect users with local and international NGOs, legal aid, and emotional support resources.
- **Legal Aid and Advocacy**: Automatically generate legal documents and connect users to legal professionals for immediate assistance.
- **Sentiment Analysis for Social Movements**: Track social media movements, such as #MeToo, and provide actionable insights for advocacy.
- **Crisis Alerts**: Real-time alerts for escalating rights violations to prompt immediate action from local activists and legal networks.


## Built with
- React
- Node
- Firebase
- Gemini API


## Installation

### 1. Clone the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/SamipSGz/DIgitalAlly.git
cd DIgitalAlly
```
### 2. Install Dependencies
Install both front-end and back-end dependencies.
```bash
npm install
cd backend 
npm install
```

### 3. Set Up Firebase

Go to your Firebase Console, and create a new project.

Add Firebase configuration to your project. This should include:
-API key
- Auth domain
- Database URL
- Project ID
- Storage bucket
- Messaging sender ID
- App ID

Copy these credentials into your project’s Firebase config file 
(firebaseConfig.js)

### 4. Mail the report and complaint letter
```bash
cd backend
node server.js
node complaint.js
```

### 5. Clone the backend Repository

```bash
https://github.com/rebeccabas/digital-ally-backend.git
cd digital-ally-backend
```
### 6. Install the requirements

```bash
pip install -r requirements.txt
```


### 7. Setup Gemini API
- Sign up for access to the Gemini API and get your API key.
- Add the API key to your back-end .env file or a similar configuration file:

```env
GEMINI_API_KEY=your-gemini-api-key
```
### 8. Run the backend for Chat and complaint generation

```bash
python main.py 
```
### 9. Run the site
```bash
npm run dev
```



## Authors

- [@SamipSGz](https://github.com/SamipSGz)
- [@rebeccabas](https://github.com/rebeccabas)



    
