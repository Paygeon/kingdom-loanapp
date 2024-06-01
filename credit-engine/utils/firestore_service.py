from .firebase_config import database
from firebase_admin import auth


class FirebaseService:
    def __init__(self,collection="loan_applications"):
        self.collection = collection
    def add_data(self,data):
        update_time, docRef =  database.collection(self.collection).add(data)
        return docRef
    def create_user(self,email,password,display_name=None):
        try:
            existing_user = auth.get_user(email)
            if(existing_user):
                return existing_user
            user= auth.create_user(uid=email,email=email,password=password,display_name=display_name)
            return user
        except:
            user= auth.create_user(uid=email,email=email,password=password,display_name=display_name)
            return user