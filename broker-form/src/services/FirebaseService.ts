/* eslint-disable @typescript-eslint/no-explicit-any */
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebaseConfig";
import { FirebaseError } from "firebase/app";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface Data{
    [key:string]:any;
}
interface CustomResponse{
    status: "pending"|"failed"|"success",
    docId: null | string,
    error: null|FirebaseError| unknown | any,
    data?:Data | string | null,
    errror_message: string,
}

class FirebaseService {
    async updateData(){

    }
    async uploadFile(file:File,fileName:string){
        const response:CustomResponse = {
            status:"pending",
            docId:null,
            error:null,
            data:null,
            errror_message: "this process is still pending"
        }
        try{
            const storageRef = ref(storage,fileName)
            const upload = await uploadBytes(storageRef,file)
            const fileURL = await getDownloadURL(upload.ref)
            response.data = fileURL
            response.status = "success"
        }catch(error){
            response.status = "failed";
			response.error = error;
			response.errror_message = "could not upload file please try again later"
			if(error instanceof FirebaseError){
                response.errror_message = error.message;
            }
        }
        return response
    }
    async create(data:Data){
        const response:CustomResponse = {
			status: "pending",
			docId: null,
			error: null,
			errror_message: "this process is still pending",
		};
        const colRef = collection(db,"loan_applications")
        try {
            const docRef = await addDoc(colRef,data)
            response.status = "success";
			response.docId = docRef.id;

        } catch (error) {
            response.status = "failed";
			response.error = error;
			response.errror_message = "could not add data please try again later"
			if(error instanceof FirebaseError){
                response.errror_message = error.message;
            }
		}
		return response;
    }
    async getData(id:string){
        const response:CustomResponse = {
			status: "pending",
			docId: null,
			error: null,
			errror_message: "this process is still pending",
		};
        const colRef = collection(db,"loan_applications")
        try {
            const docRef = await getDoc(doc(colRef,id))
            if(!docRef.exists()){
                throw new Error("application does not exist")
            }
            response.status = "success";
			response.docId = docRef.id;
            response.data = docRef.data();

        } catch (error) {
            response.status = "failed";
			response.error = error;
			response.errror_message = "could not add data please try again later"
			if(error instanceof FirebaseError){
                response.errror_message = error.message;
            }
		}
		return response;
    }
    async createUser(email:string,password:string){
        const response:CustomResponse = {
			status: "pending",
			docId: null,
			error: null,
			errror_message: "this process is still pending",
		};
        
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            response.status = "success";
			response.docId = email;
            response.data = email

        } catch (error) {
            response.status = "failed";
			response.error = error;
			response.errror_message = "could not add data please try again later"
			if(error instanceof FirebaseError){
                response.errror_message = error.message;
            }
		}
		return response;
    }
}

export default new FirebaseService() as FirebaseService; 