# app.py (Flask Server)
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import certifi
from bson.objectid import ObjectId
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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

# Function to get user recommendations for a job
# def get_user_recommendations(job_id):

#     # Get job details
#     job = jobs_collection.find_one({'_id': ObjectId(job_id)})
#     print(job)
#     job_description = job['jobDescription']
#     job_skills = job['skillsReqd']

#     # Get all users from the database
#     users = list(users_collection.find())

#     # Combine user interests and skills into a single text
#     combined_text = [f"{user['jobroleinterest']} {' '.join(user['skills'])}" for user in users]

#     # Initialize and fit the vectorizer on the combined text
#     vectorizer = CountVectorizer()
#     user_vectors = vectorizer.fit_transform(combined_text)

#     # Prepare job input for vectorization
#     job_input = [f"{job_description} {' '.join(job_skills)}"]

#     # Transform job input using the fitted vectorizer
#     job_vector = vectorizer.transform(job_input)

#     # Compute cosine similarity between job vector and user vectors
#     cosine_similarities = cosine_similarity(job_vector, user_vectors)

#     # Get indices of users sorted by most suitable
#     sorted_users_indices = cosine_similarities.argsort()[0][::-1]

#     # Return sorted list of recommended users
#     recommended_users = [users[i] for i in sorted_users_indices]
#     return recommended_users

def get_user_recommendations(job):
    # Assuming job is a dictionary with keys 'jobDescription' and 'skillsReqd'
    job_description = job['jobDescription']
    job_skills = job['skillsReqd']

    # Get all users from the database
    users = list(users_collection.find())

    # Combine user interests and skills into a single text
    combined_text = [f"{' '.join(user.get('jobroleinterest', []))} {' '.join(user['skills'])}" for user in users]

    # Initialize and fit the vectorizer on the combined text
    vectorizer = CountVectorizer()
    user_vectors = vectorizer.fit_transform(combined_text)

    # Prepare job input for vectorization
    job_input = [f"{job_description} {' '.join(job_skills)}"]

    # Transform job input using the fitted vectorizer
    job_vector = vectorizer.transform(job_input)

    # Compute cosine similarity between job vector and user vectors
    cosine_similarities = cosine_similarity(job_vector, user_vectors)

    # Get indices of users sorted by most suitable
    sorted_users_indices = cosine_similarities.argsort()[0][::-1]

    # Return sorted list of recommended users
    recommended_users = [users[i] for i in sorted_users_indices]
    return recommended_users

@app.route('/recommend', methods=['POST'])
@cross_origin()
def recommend_jobs():
    user_data = request.json
    user_skills = user_data.get('skills', [])
    user_job_role_interest = user_data.get('jobroleinterest', [])

    recommended_jobs = get_job_recommendations(user_skills, user_job_role_interest)
    converted_data = convert_objectid_to_string(recommended_jobs)
    return jsonify(converted_data)

# @app.route('/recommend/users/<job_id>', methods=['GET'])
# def recommend_users(job_id):
#     print(job_id)
#     recommended_users = get_user_recommendations(job_id)
#     converted_data = convert_objectid_to_string(recommended_users)
#     return jsonify(converted_data)

@app.route('/recommend/users', methods=['POST'])
def recommend_users():
    # Get the job object from the request body
    job = request.get_json()
    print(job)
    recommended_users = get_user_recommendations(job)
    converted_data = convert_objectid_to_string(recommended_users)
    return jsonify(converted_data)

# @cross_origin(origin='*',headers=['Content-Type','Authorization'])
if __name__ == '__main__':
    app.run(debug=True)
