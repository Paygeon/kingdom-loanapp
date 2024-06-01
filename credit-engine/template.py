import abstra.hooks as ah
import abstra.workflows as aw
from utils.template_config import application_template

# Use Abstra Hooks to create Python endpoints
body, query, headers = ah.get_request()

print("⚙️ Hook is running... received body:", body)

# You can store data in the current thread,
# so it will be available in the next stages
aw.set_data("hook_data", body)

# You can send a response back to the client after doing some processing
# ah.send_json({"message": "A message from the hook!"})
data = {
    "name":"value",
    "age":10
}

for key in data:
    print(f"{key}:{data[key]}")

# ah.send_response(body=application_template.render(name="Edih Goodluck"))
ah.send_json(data)
