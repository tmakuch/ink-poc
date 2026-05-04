# My Ink Components

Few small components to use in an Ink app:
- NavBar - horizontal box meant as a header for the app with title, buttons for navigation and close app button
- Button - mouse- and focus- enabled button
- ScrollableBox - wrapper for ink-scroll-view library to work with mouse our of the box
- TextInput - simple mouse- and focus- enabled `<input type="text"/>` component
- enterFullscreen and exitFullscreen - helper functions, names say it all 

## Known Issues

`npm i --force` is required atm as ink-scroll-view and @zenobius/ink-mouse expect older versions for ink, regardless they work perfectly fine on latest 7.0.1 version

## Demo

Run `npm start` to run example demo showcasing the components.