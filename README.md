# EMERGE BEIRUT 


#### Why
> With the current effort of Lebanese people on the ground in helping with the relief in Beirut, the logistics are quite complex and many players are involved. We're developing a platform that aims at connecting and coordinating the action on the ground to maximize the impact and allow for long term systemic change.

#### What
> The EMERGE BEIRUT platform is a citizen-based initiative that aims at ensuring that all actors of the relief and sustainable development efforts in Lebanon are able to communicate effectively and exchange data seamlessly to avoid redundancy and lead to a long-term system change. The platform gives a space for all the actors of change to share their updates through a personalised user-friendly dashboard that will allow them to monitor the evolution of the actions.

#### How
> EMERGE BEIRUT is designed like a game, to be as user-friendly as possible. It aims at channeling the citizens' hands and minds to collectively iterate and implement positive system change in Lebanon and beyond.

#### Who
> EMERGE BEIRUT is an initiative by the people, for the people. We’re a growing team of passionate citizens working around the clock to finalise the platform and launch it asap.
It is open-source, user-generated, and crowd-mapped.

# Coding Languages
Before the blast, we had been working on a platform that had a long-term aim, that can serve as example of the flow of and functionality of Emerge Beirut. It was coded quite basically using Javascript + HTML + CSS + Firebase (for authentication, storage, hosting, and storage). We are now collectively working on the V2 of the platform, with new wireframes and data structure.

Languages:
  - React, Redux, React Native
  - Javascript
  - HTML
  - CSS
  - Bootstrap 4
 
Mapping:
  - The current map API used in Google Maps. We are aiming at shifting to an open-source one, potentially Open Street Maps soon. We would probably use Leaflet plug-in for that, to ensure nice visuals.
  - The mapping follows a GIS-based structure. We have the possibility to load datasets using GeoJSON files. The queried data from firebase is transformed into a geojson file that is loaded into the data layer of the map using map.data.loadGeoJson

Authentication:
  - Unauthentication users can view the platformm and access all information, however, to be able to edit the info or share info, a user needs to be logged in.
  - We have several types of users and roles. The first basic ones are: basic and admin.
  - Basic admins have a dashboard in which they can see their own pins and shares, and edit them as they go.
  - Admin users are coordinators and are able to track the progress and monitor various pins from other users. They are granted writes to specific users in their lists and will see their progress in their dashboard.
  - Authentication happens through email. And can have a verified user option.
  - Users fill their contact info on their profile and can decide to keep it private or share it with others.
  
Data:
  - We are using a NoSQL database, through firebase (for now). This allows for flexible evolution of the data structure.
  - The filtering of the map is based on true-false booleans of the tags. The tags are organised into a fractal logic, dropping down progressively as the users select them.
  - We aim to evolve the filter flow on the app along with the evolution of the action on the ground. Therefore we'd like to design it to be as dynamic as possible, using a reference dictionary json object.
  - We'll also have an arabic version of the app (could also be done through a dictionary)
  - In order to limit the number of writes and reads, we aggregate the data of the various pins (initially each in a single document) to a compbined document that groups several pins into one through a key-value pair logic (key being the document's ID and value being all the key-value pair dataset)

  Running the project:

 Pre-requisite: NodeJS Installed

 Use command lines in your terminal:

  1. Navigate to "emergent-lebanon" directory
  2. Execute "npm i"
  3. Navigate to "frontend" directory (cd frontend)
  4. Execute "npm i"
  5. Execute "npm run start"

 Your browser should open and display the UI.
 
