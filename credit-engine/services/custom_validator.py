from validator_collection import validators,checkers,errors

class CustomValidator:
    def __init__(self, body)->None:
        self.body = body

    def validate_application(self):
        return self
