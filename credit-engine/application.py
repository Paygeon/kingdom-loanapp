import abstra.hooks as ah
import traceback
import os
import abstra.workflows as aw
from utils.mailer import CustomMailer
from utils.firestore_service import FirebaseService
from utils.template_config import EmailTemplateEngine


# SMTP and email configuration
EMAIL = os.environ.get("EMAIL", "")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD", "")
SMTP_SERVER = os.environ.get("SMTP_SERVER", "")
mail = CustomMailer(email=EMAIL, password=EMAIL_PASSWORD, host=SMTP_SERVER)
application_template = EmailTemplateEngine().get_email_template("application.html")
broker_template = EmailTemplateEngine().get_email_template("broker.html")

# DB setup
firebase_service_instance = FirebaseService()

# Use Abstra Hooks to create Python endpoints
body, query, headers = ah.get_request()

# print("⚙️ Hook is running... received body:", body)


# You can store data in the current thread,
# so it will be available in the next stages
aw.set_data("hook_data", body)
def process_data():
    response = {
        "status": "pending",
        "data":None,
        "error_message": "This process is still pending please try again later"
    }
    try:
        email = body["email"]
        password = body.pop("password",None)
        business_name = body["businessName"]

        data = firebase_service_instance.add_data(body)
        print(data)
        firebase_service_instance.create_user(email,password,business_name)

        subject = "Application Confirmed"
        receivers = body["email"]
        content = application_template.render(name=business_name)
        mail.sendMail(subject, receivers, content)

        subject2 = "Application Submitted"
        brokers = ["codablackthecreator@gmail.com","ckelleher@rok.biz","TStines@rok.biz","jcantatore@rok,biz"]
        broker_content = broker_template.render(application=body,id=data.id)
        mail.sendMail(subject2, brokers, broker_content)

        response["status"] = "success"
        response["data"] = body
        response["error_message"] = None

    except Exception as error:
        print(error)
        response["status"] = "failed"
        response["data"] = None
        response["error_message"] = "Sorry could not send application at the moment please try again later"

    return response

    # You can send a response back to the client after doing some processing
response = process_data()
ah.send_json(response)

