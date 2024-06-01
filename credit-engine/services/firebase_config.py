import firebase_admin
import os
from firebase_admin import credentials,firestore

cred = credentials.Certificate(f"{os.getcwd()}/paygeonv-service-key.json")

def getDB():
    try:
        firebase_admin.initialize_app(cred)
        return firestore.client()
    except:
        return firestore.client()


database = getDB();


