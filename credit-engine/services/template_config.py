from jinja2 import Environment, FileSystemLoader, select_autoescape



class EmailTemplateEngine:
    def __init__(self, template_folder = "email_templates"):
        env = Environment(
            loader=FileSystemLoader(template_folder),
            autoescape=select_autoescape(['html', 'xml'])
        )
        self.env = env

    def get_email_template(self,file_path):
        application_template = self.env.get_template(file_path)
        return application_template

class CustomEmailMessage:
    def __init__(self, message_dict):
        self.subject = message_dict["subject"]
        self.content = message_dict["content"]
        self.to = message_dict["to"]
