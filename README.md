# Instant Connect far end camera control
Simple solution where a provider can select one device from the org, start meeting and control camera

 <!--- Insert a screenshot, gif or image below that shows a little about your Demo/PoC -->
 [![Watch on Vidcast](https://cdn-3-d.app.vidcast.io/ee/b7/cd/eeb7cd3a-9afe-4503-b5ea-162f33fea6c3/thumbnail_screen_1749183540785.jpeg?Expires=1749701961&Signature=EmojWxqyuJzvanX3TC3t-MRriknrJsr0tNWDj2xeJhnon-M6iySxEbblgsBT~ec0LKirla0iSY21yYSZMfbftWONh0A2tPLbc92kQVuZBkXcnfy0OcGR3tdpP8jKVSpdeQ2qpdV9zhdYWJvDD6AA-eZIcM-73dqrDON40BMpyzYnJAJZ37H-dmx6aNTUJCoiw7YOguBIyGpmhdUVZF4DrNKX5PIBmk-niN8SggA6z5gsTt1WgXOuRtNuNgiOR2EfxL9ZceOnkT2tI9YyHP58uYAg1oPsPDrVIwbkCeoqFRucVlV9eClIbYADYr0N1aqjteI5Cn7ZLNvcK60JYGFmbg__&Key-Pair-Id=K7MMR7AZ73QPM)](https://app.vidcast.io/share/afcd618d-d8bb-41d5-8f43-7ccf9e107a23?playerMode=vidcast)

## Setup

### Prerequisites & Dependencies: 

- Make you have a Webex registered device. [Here](https://help.webex.com/en-us/article/nuwutmx/Control-remote-cameras-with-Instant-Connect#reference-template_d274750c-1e09-421d-8816-0128f931c643) is the document with the list of supported devices. 
- Node. js installed
- Ensure network access to:
  - https://webexapis.com/
  - https://mtg-broker-a.wbx2.com/


<!-- GETTING STARTED -->

### Installation Steps:
1.  Clone this repository
    ```
    git clone https://github.com/wxsd-sales/ic-far-end-camera-control.git
    ```
2.  Move to this folder
    ```
    cd ic-far-end-camera-control
    ```
3.  ```
    npm install
    ```
3.  Create an integration [here](https://developer.webex.com/my-apps/new/integration). Add Integration name, Icon, App Hub Description
    Redirect URI(s) : http://localhost:3000/callback
    Scopes : spark:all
4.  Once the integration is created save Client Id, Client Secret safely.
5.  Create a bot [here](https://developer.webex.com/my-apps/new/bot). Add Bot name, Bot username, Icon, App Hub Description.
6.  Once the bot is created, save the bot access token safely.
7.  Create a new file .env in the main project directory and copy contents from .env.example
    ```
    CLIENT_ID=your_webex_client_id
    CLIENT_SECRET=your_webex_client_secret
    REDIRECT_URI=http://localhost:3000/callback
    BOT_TOKEN=Bearer your_bot_access_token
    ```
8.  As an admin, login to https://admin.webex.com. Navigate to the desired workspaces. Click Edit API Access. Search for the name of the bot you just created and give it Full Admin capabilities.
9.  Also search for "Cisco Meeting Broker Call Enabler Bot" and select Full Access in the Access level dropdown.
10. Also for the devices make sure Far End Control Mode is set to On (On is the default).

## License
<!-- MAKE SURE an MIT license is included in your Repository. If another license is needed, verify with management. This is for legal reasons.--> 

<!-- Keep the following statement -->
All contents are licensed under the MIT license. Please see [license](LICENSE) for details.


## Disclaimer
<!-- Keep the following here -->  
 Everything included is for demo and Proof of Concept purposes only. Use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex usecases, but are not Official Cisco Webex Branded demos.


## Questions
Please contact the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=RepoName) for questions. Or, if you're a Cisco internal employee, reach out to us on the Webex App via our bot (globalexpert@webex.bot). In the "Engagement Type" field, choose the "API/SDK Proof of Concept Integration Development" option to make sure you reach our team. 
