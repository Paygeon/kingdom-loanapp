import smtplib
from email.message import EmailMessage

class CustomMailer:
    def __init__(self, email,password,host,port=587):
        print(email,password,host,port)
        self.email = email
        server = smtplib.SMTP(host,port)
        server.starttls()
        server.login(email,password)
        self.server = server

    def sendMail(self,subject,recievers,content):
        message = EmailMessage()
        message["Subject"] = subject
        message["from"] = f"Paygeon <{self.email}>"
        message["to"] = recievers
        message.set_content(content,subtype="html")
        # message.add_attachment(attachment)
        self.server.send_message(message)
        print("mail sent successfully")