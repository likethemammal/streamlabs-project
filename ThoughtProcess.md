## Thought process

### 🧠&nbsp;&nbsp;1. Thinking/Research

- Looked up Drag and Drop api
- Thought about how to structure drag and drop events
- Looked up adding images to a Canvas
- Thought about how to align images with mouse position correctly
- Thought about UX features like scaling image slightly on active
- Thought about how to move state around with React and raf.
- Thought I needed raf but I dont, cus I only need to update the canvas on drag.

### 🔧&nbsp;&nbsp;2. Functionality

- Implemented the responsive canvas with aspect ratio
- Got caught up on whether it mattered to scale to small height screens. After fiddling with the css to make it work, I decided it wasnt worth my focus.
- Got main code implemented from Stackoverflow vanilla JS into React
  - [Drag and Drop Multiple Objects in HTML5 Canvas](https://stackoverflow.com/questions/24926028/drag-and-drop-multiple-objects-in-html5-canvas)
    
- Thought about adding dragging logic to react state, but thought it might introduce bugs and performance concerns. Didnt want to overengineer
- Added edge detection
- Added border and scale for active rect
- Added border and scaling to edge detection

### 🧱&nbsp;&nbsp;3. Refactor

- Have to rethink how I was managing the state for the images
- Had to redo event handling to work with hooks
- Reorged hooks out of main element
- Added sorting by current image drag to account for z position of image.

### 🪣&nbsp;&nbsp;4. Porting

- Ported code to Codesandbox
- Ran into bug with dragging in Codesandbox
- After debugging, the state isnt updating when the mouse events trigger. The events themselves are triggering, but the setState calls arent behaving like they were locally.
- After several attempts to work around the issue, ported the code to a clean install of `create-next-app`
- Still running not able to get it working.
- Tried to see if static export would fix the issue.
- Realized theres a bug with resizing + drag that has some overlap with this.
