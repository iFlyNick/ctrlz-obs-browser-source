# CtrlZ Incremental Tracking

This project is a local browser source solution to support an interactive image toggle tied to an incrementing counter for a fun way to track the number of times you press ctrl+z. 
A concept built out to add functionality for artists, coders, gamers, or any other parties interested in tracking the number of times key presses happen. 

Image options are any supported image type: .png/.gif/.jpg being probably most common

Art images done by:
- ![SkyyeXVII (rage)](https://x.com/skyyexvii)
- ![Neruchi (hoodie)](https://x.com/nekooneru)


![Example](https://github.com/user-attachments/assets/7c9a6056-c8f8-4e58-a010-69b69c69c7bc)

## Functionality

The solution is written using html/css/js files to auto increment a counter based on the number of times the page is refreshed. In a normal situation this doesn't do much,
but when it's tied to a hotkey in obs studio to refresh the cache of the current page it starts to make more sense. Setting up obs studio in this manner theoretically allows
the user to define what hotkeys they want to qualify for 'tracking'

Under the hood the vanilla js uses session storage and local storage to store the user uploaded images for the toggling feature and session storage to increment the counter. This
leads to the images uploaded persisting across browser tabs, but the counter being reset each time that's done for a fresh tracker. The same functionality is acheived in obs studio
by setting the 'Shutdown source when not visible' to true and toggling the source off and back on. For cross-scene persistence, that setting would need to be off or the counter would
continue to increment until obs itself is restarted.

## Future Enhancements

Future enhancement opportunities include:
  - Simpler management of image uploads
  - Better documentation and handling of non-standard image sizes
  - Customizable counter box to fit into the theme of the uploaded images/art

## Setup

1. Clone the repo to your local pc
```
git clone https://github.com/iFlyNick/ctrlz-obs-browser-source.git
```

2a. Create new browser source in obs studio
  - Set Local File checkbox to true
  - Set the Local File path to the ctrlz.html file from the cloned repo
  - Set the height to 1600 (you'll change this back later)
  - Set 'Shutdown source when not visible' to true
  - Click Ok

  ![image](https://github.com/user-attachments/assets/bf9e4981-63ed-45e5-8049-3cb8a685125f)

2b. Update the images for the toggle
  - Right click the scene again and select 'Interact' 
  - Click on the top 'Choose File' button to upload the main image
  - Click on the bottom 'Choose File' button to upload the swap image
  - Close out of the interactive browser
  - Right click on the source again and select Properties
  - Set the height back to 600
  - Click Ok

  ![image](https://github.com/user-attachments/assets/11854423-26cc-4501-9956-5219d3d3d422)


3. Update the hotkey for the new source in obs settings
  - Go to File -> Settings in obs studio
  - Select 'Hotkeys' from the left side menu
  - Scroll down to the scene you just created
  - Update the 'Refresh Cache of current page' to the key tracking you want to increment
  - Click Apply then Ok
    
  ![image](https://github.com/user-attachments/assets/13903136-a7b6-487a-b25f-61979b7626fa)

  
You're all set! Setup the source to be where you'd like on your scenes and it'll start incrementing!
















