from server import *

#let params = [
#    "client_id": client_id,
#    "redirect_uri": "https://login.live.com/oauth20_desktop.srf",
#    "client_secret" :client_secret,
#    "code": authorization_code!,
#    "grant_type": "authorization_code"    ]

@app.route('/test_point')
def test_point():
    return "Server Running Successfully"
