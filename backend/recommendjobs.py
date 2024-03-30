# app.py (Flask Server)
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import certifi
from bson.objectid import ObjectId
import json

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb+srv://rachitgala05:rachitgala05@cluster0.j1uqmok.mongodb.net/test?retryWrites=true&w=majority', tlsCAFile=certifi.where())

# Select the 'test' database
db = client['test']

# Access the 'users' and 'jobs' collections
users_collection = db['users']
jobs_collection = db['jobs']

def convert_objectid_to_string(data):
    for item in data:
        if '_id' in item and isinstance(item['_id'], ObjectId):
            item['_id'] = str(item['_id'])
        if 'recruiter' in item and isinstance(item['recruiter'], ObjectId):
            item['recruiter'] = str(item['recruiter'])
    return data

# Function to get job recommendations for a user
def get_job_recommendations(user_skills, user_job_role_interest):
    # Get all jobs from the database
    jobs = list(jobs_collection.find())
    job_descriptions = [job['jobDescription'] for job in jobs]

    # Combine job descriptions and skills into a single text
    combined_text = [f"{desc} {' '.join(job['skillsReqd'])}" for desc, job in zip(job_descriptions, jobs)]

    # Initialize and fit the vectorizer on the combined text
    vectorizer = CountVectorizer()
    job_vectors = vectorizer.fit_transform(combined_text)

    # Prepare user input for vectorization
    user_input = [f"{' '.join(user_skills)} {' '.join(user_job_role_interest)}"]

    # Transform user input using the fitted vectorizer
    user_vector = vectorizer.transform(user_input)

    # Compute cosine similarity between user vector and job vectors
    cosine_similarities = cosine_similarity(user_vector, job_vectors)

    # Get indices of top 5 most similar jobs
    similar_jobs_indices = cosine_similarities.argsort()[0][::-1]

    # Return top 5 recommended jobs
    recommended_jobs = [jobs[i] for i in similar_jobs_indices]
    return recommended_jobs


@app.route('/recommend', methods=['POST'])
def recommend_jobs():
    user_data = request.json
    user_skills = user_data.get('skills', [])
    user_job_role_interest = user_data.get('jobroleinterest', [])

    recommended_jobs = get_job_recommendations(user_skills, user_job_role_interest)
    converted_data = convert_objectid_to_string(recommended_jobs)
    return converted_data

if __name__ == '__main__':
    app.run(debug=True)
