import abstra.hooks as ah
import abstra.workflows as aw
import os
from services.mailer import CustomMailer
from utils.firestore_service import FirebaseService
from services.template_config import EmailTemplateEngine,CustomEmailMessage

# Use Abstra Hooks to create Python endpoints
body, query, headers = ah.get_request()

# email details
EMAIL = os.environ.get("EMAIL", "")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD", "")
SMTP_SERVER = os.environ.get("SMTP_SERVER", "")
mail = CustomMailer(email=EMAIL, password=EMAIL_PASSWORD, host=SMTP_SERVER)
rejection_template = EmailTemplateEngine().get_email_template("rejected.html")


# print("⚙️ Hook is running... received body:", body)

# You can store data in the current thread,
# so it will be available in the next stages

#database setup
firebase_instance = FirebaseService("rejected_loans")

# email template setup


# function for processing data from hook
aw.set_data("hook_data", body)
def process_data():
    business_name = body["businessName"]
    borrower = body["borrower"]
    reasons = body["reasons"]
    response = {
        "status": "pending",
        "data":None,
        "error_message": "This process is still pending please try again later"
    }
    try:
        firebase_instance.add_data(body)
        business_message = CustomEmailMessage({
            "subject": "Loan Application Rejected",
            "to":[borrower],
            "content": rejection_template.render(name=business_name,reasons=reasons),
        })
        mail.sendMail(business_message.subject, business_message.to, business_message.content)

        response["status"] = "success"
        response["data"] = body
        response["error_message"] = None

    except Exception as error:
        print("error => ",error)
        response["status"] = "failed"
        response["data"] = None
        response["error_message"] = "Sorry could not reject application at the moment please try again later"

    return response




response = process_data()
# You can send a response back to the client after doing some processing
ah.send_json(response)
