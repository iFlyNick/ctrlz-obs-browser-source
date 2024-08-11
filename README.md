# CtrlZ Incremental Tracking

This project is a local browser source solution to support an interactive image toggle tied to an incrementing counter for a fun way to track the number of times you press ctrl+z. 
A concept built out to add functionality for artists, coders, gamers, or any other parties interested in tracking the number of times key presses happen. 

Image options are any supported image type: .png/.gif/.jpg being probably most common

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
