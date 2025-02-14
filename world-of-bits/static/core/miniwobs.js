/*
  ENV tag definitions:
    - 'click': the env requires ONLY clicks
    - 'drag': the env requires ONLY clicks and dragging (i.e. left mouse button)
    - 'mouse': the env requires ONLY mouse (i.e. any mouse button, including scrolling)
    - if it needs keyboard, don't tag with anything (i.e. default is that it need both mouse and keyboard)
*/

// Things to keep in mind:
//   - tags should always be one of TAGS.
//   - please keep in alphabetical order based on ID name!
//   - gym-scoreboard relies on this file being a valid json.
//          - don't meddle with the BEGIN/END DEF statements immediately around the miniwobs defs
//          - please don't put comments inside the definition
//          - no trailing comma
//          - please suggest a better way to do this :(
miniwobs =
// BEGIN_DEF
{
  "version": "0.1",
  "TAGS": ["click", "drag", "mouse"],
  "envs": [
    {
      "id": "wob.mini.AnExperiment-v0",
      "filename": "an-experiment",
      "tags": ["click"],
      "description": "Click the correct character (Oneshot recognition)."
    },
    {
      "id": "wob.mini.AnEasyExperiment-v0",
      "filename": "an-experiment-easy",
      "tags": ["click"],
      "description": "Click the correct character (Oneshot recognition)."
    },
    {
      "id": "wob.mini.CharacterExp-v0",
      "filename": "a-character",
      "tags": ["click"],
      "description": "Click the correct character (Oneshot recognition)."
    },
    {
      "id": "wob.mini.BisectAngle-v0",
      "filename": "bisect-angle",
      "tags": ["click"],
      "description": "Find the line that bisects an angle evenly in two."
    },
    {
      "id": "wob.mini.BookFlight-v0",
      "filename": "book-flight",
      "tags": [],
      "description": "Search for flight results."
    },
    {
      "id": "wob.mini.ChaseCircle-v0",
      "filename": "chase-circle",
      "tags": ["click"],
      "description": "Keep your mouse inside a moving circle."
    },
    {
      "id": "wob.mini.ChooseDate-v0",
      "filename": "choose-date",
      "tags": ["click"],
      "description": "Learn to operate a date picker tool."
    },
    {
      "id": "wob.mini.ChooseList-v0",
      "filename": "choose-list",
      "tags": ["click"],
      "description": "Choose an item from a drop down list."
    },
    {
      "id": "wob.mini.CircleCenter-v0",
      "filename": "circle-center",
      "tags": ["click"],
      "description": "Find the center of a circle."
    },
    {
      "id": "wob.mini.ClickButton-v0",
      "filename": "click-button",
      "tags": ["click"],
      "description": "Click on a specific button in a generated form."
    },
    {
      "id": "wob.mini.ClickButtonSequence-v0",
      "filename": "click-button-sequence",
      "tags": ["click"],
      "description": "Click on buttons in a certain order."
    },
    {
      "id": "wob.mini.ClickCheckboxes-v0",
      "filename": "click-checkboxes",
      "tags": ["click"],
      "description": "Click desired checkboxes."
    },
    {
      "id": "wob.mini.ClickCollapsible-v0",
      "filename": "click-collapsible",
      "tags": ["click"],
      "description": "Click a collapsible element to expand it."
    },
    {
      "id": "wob.mini.ClickCollapsible2-v0",
      "filename": "click-collapsible-2",
      "tags": ["click"],
      "description": "Find and click on a specified link, from collapsible elements."
    },
    {
      "id": "wob.mini.ClickColor-v0",
      "filename": "click-color",
      "tags": ["click"],
      "description": "Click the specified color."
    },
    {
      "id": "wob.mini.ClickDialog-v0",
      "filename": "click-dialog",
      "tags": ["click"],
      "description": "Click the button to close the dialog box."
    },
    {
      "id": "wob.mini.ClickDialog2-v0",
      "filename": "click-dialog-2",
      "tags": ["click"],
      "description": "Click a specific button in a dialog box."
    },
    {
      "id": "wob.mini.ClickLink-v0",
      "filename": "click-link",
      "tags": ["click"],
      "description": "Click on a specified link in text."
    },
    {
      "id": "wob.mini.ClickMenu-v0",
      "filename": "click-menu",
      "tags": ["drag"],
      "description": "Click menu items."
    },
    {
      "id": "wob.mini.ClickMenu2-v0",
      "filename": "click-menu-2",
      "tags": ["click"],
      "description": "Find a specific item from a menu."
    },
    {
      "id": "wob.mini.ClickOption-v0",
      "filename": "click-option",
      "tags": ["click"],
      "description": "Click option boxes."
    },
    {
      "id": "wob.mini.ClickPie-v0",
      "filename": "click-pie",
      "tags": ["click"],
      "description": "Click items on a pie menu."
    },
    {
      "id": "wob.mini.ClickScrollList-v0",
      "filename": "click-scroll-list",
      "tags": [],
      "description": "Click multiple items from a scroll list."
    },
    {
      "id": "wob.mini.ClickShades-v0",
      "filename": "click-shades",
      "tags": ["click"],
      "description": "Click the shades that match a specified color."
    },
    {
      "id": "wob.mini.ClickShape-v0",
      "filename": "click-shape",
      "tags": ["click"],
      "description": "Click on a specific shape."
    },
    {
      "id": "wob.mini.ClickTab-v0",
      "filename": "click-tab",
      "tags": ["click"],
      "description": "Click on a tab element."
    },
    {
      "id": "wob.mini.ClickTab2-v0",
      "filename": "click-tab-2",
      "tags": ["click"],
      "description": "Click a link inside a specific tab element."
    },
    {
      "id": "wob.mini.ClickTest-v0",
      "filename": "click-test",
      "tags": ["click"],
      "description": "Click on a single button."
    },
    {
      "id": "wob.mini.ClickTest2-v0",
      "filename": "click-test-2",
      "tags": ["click"],
      "description": "Click on one of two buttons."
    },
    {
      "id": "wob.mini.ClickWidget-v0",
      "filename": "click-widget",
      "tags": ["click"],
      "description": "Click on a specific widget in a generated form."
    },
    {
      "id": "wob.mini.CopyPaste-v0",
      "filename": "copy-paste",
      "tags": ["mouse"],
      "description": "Copy text and paste it into an input."
    },
    {
      "id": "wob.mini.CopyPaste2-v0",
      "filename": "copy-paste-2",
      "tags": ["mouse"],
      "description": "Copy text from a specific textarea and paste it into an input."
    },
    {
      "id": "wob.mini.CountShape-v0",
      "filename": "count-shape",
      "tags": ["click"],
      "description": "Count number of shapes."
    },
    {
      "id": "wob.mini.CountSides-v0",
      "filename": "count-sides",
      "tags": ["click"],
      "description": "Count the number of sides on a shape."
    },
    {
      "id": "wob.mini.DragBox-v0",
      "filename": "drag-box",
      "tags": ["drag"],
      "description": "Drag the smaller box into the larger box."
    },
    {
      "id": "wob.mini.DragCube-v0",
      "filename": "drag-cube",
      "tags": ["drag"],
      "description": "Drag a 3D cube to show a specific face."
    },
    {
      "id": "wob.mini.DragItem-v0",
      "filename": "drag-item",
      "tags": ["drag"],
      "description": "Drag an item in a specified direction."
    },
    {
      "id": "wob.mini.DragItems-v0",
      "filename": "drag-items",
      "tags": ["drag"],
      "description": "Drag items in a list, in a specified direction"
    },
    {
      "id": "wob.mini.DragItemsGrid-v0",
      "filename": "drag-items-grid",
      "tags": ["drag"],
      "description": "Drag items in a 2D grid around."
    },
    {
      "id": "wob.mini.DragShapes-v0",
      "filename": "drag-shapes",
      "tags": ["drag"],
      "description": "Drag shapes into a box."
    },
    {
      "id": "wob.mini.DragSortNumbers-v0",
      "filename": "drag-sort-numbers",
      "tags": ["drag"],
      "description": "Drag numbers into sorted ascending order."
    },
    {
      "id": "wob.mini.EmailInbox-v0",
      "filename": "email-inbox",
      "tags": ["mouse"],
      "description": "Navigate through an email inbox and perform some actions."
    },
    {
      "id": "wob.mini.EnterDate-v0",
      "filename": "enter-date",
      "tags": [],
      "description": "Use the date input to pick the correct date."
    },
    {
      "id": "wob.mini.EnterPassword-v0",
      "filename": "enter-password",
      "tags": ["drag"],
      "description": "Enter the password into the form."
    },
    {
      "id": "wob.mini.EnterText-v0",
      "filename": "enter-text",
      "tags": ["drag"],
      "description": "Enter given text to a textfield."
    },
    {
      "id": "wob.mini.EnterText2-v0",
      "filename": "enter-text-2",
      "tags": [],
      "description": "Convert given text to upper or lower case."
    },
    {
      "id": "wob.mini.EnterTextDynamic-v0",
      "filename": "enter-text-dynamic",
      "tags": ["drag"],
      "description": "Enter dynamically generated text to a textfield."
    },
    {
      "id": "wob.mini.EnterTime-v0",
      "filename": "enter-time",
      "tags": [],
      "description": "Enter the specified time into the input."
    },
    {
      "id": "wob.mini.FindMidpoint-v0",
      "filename": "find-midpoint",
      "tags": ["click"],
      "description": "Find the shortest mid-point of two points."
    },
    {
      "id": "wob.mini.FindWord-v0",
      "filename": "find-word",
      "tags": ["mouse"],
      "description": "Find nth word in a block of text."
    },
    {
      "id": "wob.mini.FocusText-v0",
      "filename": "focus-text",
      "tags": ["click"],
      "description": "Focus into a text input."
    },
    {
      "id": "wob.mini.FocusText2-v0",
      "filename": "focus-text-2",
      "tags": ["click"],
      "description": "Focus on a specific text input."
    },
    {
      "id": "wob.mini.GridCoordinate-v0",
      "filename": "grid-coordinate",
      "tags": ["click"],
      "description": "Find the Cartesian coordinates on a grid."
    },
    {
      "id": "wob.mini.GuessNumber-v0",
      "filename": "guess-number",
      "tags": ["click"],
      "description": "Guess the number."
    },
    {
      "id": "wob.mini.HighlightText-v0",
      "filename": "highlight-text",
      "tags": ["drag"],
      "description": "Highlight all the text."
    },
    {
      "id": "wob.mini.HighlightText2-v0",
      "filename": "highlight-text-2",
      "tags": ["drag"],
      "description": "Highlight the specified paragraph."
    },
    {
      "id": "wob.mini.IdentifyShape-v0",
      "filename": "identify-shape",
      "tags": ["click"],
      "description": "Identify a randomly generated shape."
    },
    {
      "id": "wob.mini.LoginUser-v0",
      "filename": "login-user",
      "tags": ["drag"],
      "description": "Enter user login details into the form."
    },
    {
      "id": "wob.mini.MovingItems-v0",
      "filename": "moving-items",
      "tags": ["drag"],
      "description": "Click moving items before they disappear."
    },
    {
      "id": "wob.mini.NavigateTree-v0",
      "filename": "navigate-tree",
      "tags": ["click"],
      "description": "Navigate a file tree to find a specified file or folder."
    },
    {
      "id": "wob.mini.NumberCheckboxes-v0",
      "filename": "number-checkboxes",
      "tags": ["click"],
      "description": "Draw a given number using checkboxes."
    },
    {
      "id": "wob.mini.ReadTable-v0",
      "filename": "read-table",
      "tags": ["drag"],
      "description": "Read information out from a table."
    },
    {
      "id": "wob.mini.ReadTable2-v0",
      "filename": "read-table-2",
      "tags": ["drag"],
      "description": "Read multiple pieces of information out from a table."
    },
    {
      "id": "wob.mini.ResizeTextarea-v0",
      "filename": "resize-textarea",
      "tags": ["drag"],
      "description": "Resize a textarea in a given direction."
    },
    {
      "id": "wob.mini.RightAngle-v0",
      "filename": "right-angle",
      "tags": ["click"],
      "description": "Given two points, add a third point to create a right angle."
    },
    {
      "id": "wob.mini.ScrollText-v0",
      "filename": "scroll-text",
      "tags": ["mouse"],
      "description": "Scroll through a text area element and enter last word into text area."
    },
    {
      "id": "wob.mini.ScrollText2-v0",
      "filename": "scroll-text-2",
      "tags": ["mouse"],
      "description": "Scroll through a text area in a given direction."
    },
    {
      "id": "wob.mini.SearchEngine-v0",
      "filename": "search-engine",
      "tags": ["drag"],
      "description": "Search through a bunch of results to find a specified link."
    },
    {
      "id": "wob.mini.SimonSays-v0",
      "filename": "simon-says",
      "tags": ["click"],
      "description": "Push the buttons in the order shown."
    },
    {
      "id": "wob.mini.SimpleAlgebra-v0",
      "filename": "simple-algebra",
      "tags": [],
      "description": "Solve for X."
    },
    {
      "id": "wob.mini.SimpleArithmetic-v0",
      "filename": "simple-arithmetic",
      "tags": [],
      "description": "Perform some arithmetic math operations."
    },
    {
      "id": "wob.mini.SocialMedia-v0",
      "filename": "social-media",
      "tags": ["mouse"],
      "description": "Interact with a social media feed."
    },
    {
      "id": "wob.mini.Terminal-v0",
      "filename": "terminal",
      "tags": [],
      "description": "Use the terminal to delete a file."
    },
    {
      "id": "wob.mini.TextEditor-v0",
      "filename": "text-editor",
      "tags": ["drag"],
      "description": "Modify a text\"s style in a text-editor."
    },
    {
      "id": "wob.mini.TextTransform-v0",
      "filename": "text-transform",
      "tags": [],
      "description": "Enter slightly transformed text into a text box."
    },
    {
      "id": "wob.mini.TicTacToe-v0",
      "filename": "tic-tac-toe",
      "tags": ["click"],
      "description": "Win a game of tic-tac-toe."
    },
    {
      "id": "wob.mini.UseAutocomplete-v0",
      "filename": "use-autocomplete",
      "tags": [],
      "description": "Use autocomplete element efficiently."
    },
    {
      "id": "wob.mini.UseColorwheel-v0",
      "filename": "use-colorwheel",
      "tags": ["click"],
      "description": "Use a color wheel."
    },
    {
      "id": "wob.mini.UseColorwheel2-v0",
      "filename": "use-colorwheel-2",
      "tags": ["click"],
      "description": "Use a color wheel given specific random color."
    },
    {
      "id": "wob.mini.UseSlider-v0",
      "filename": "use-slider",
      "tags": ["click"],
      "description": "Use a slider to select a particular value."
    },
    {
      "id": "wob.mini.UseSlider2-v0",
      "filename": "use-slider-2",
      "tags": ["click"],
      "description": "Use sliders to create a given combination."
    },
    {
      "id": "wob.mini.UseSpinner-v0",
      "filename": "use-spinner",
      "tags": ["click"],
      "description": "Use a spinner to select given number."
    },
    {
      "id": "wob.mini.VisualAddition-v0",
      "filename": "visual-addition",
      "tags": [],
      "description": "Count the total number of blocks."
    }
  ]
}
// END_DEF

// The functions below are used to help validate that the data above
// is sorted correctly, and contains the correct properties (id, filename, desc).
// If anything is invalid, the errors will show up in index.html

miniwobs.checkErrors = function(wobJson){
  // check for invalid tags
  var invalidTags = miniwobs.checkTags(wobJson);
  miniwobs.displayInvalidTags(invalidTags);

  // check for invalid envs
  var invalidEnvs = miniwobs.checkEnvs(wobJson);
  miniwobs.displayInvalidEnvs(invalidEnvs);

  var nonAlphabetical = miniwobs.checkSorted(wobJson);
  miniwobs.displaySortError(nonAlphabetical);
}


// check that all tags for each env in miniwobs.js are defined in
// the set defined by the miniwobs.TAGS array.
miniwobs.checkTags = function(wobJson){
  var invalidTags = [];
  for(var i=0;i<wobJson.envs.length;i++){
    var wobEnv = wobJson.envs[i];
    var envTags = wobEnv.tags;

    for(var t=0;t<envTags.length;t++){
      var currentTag = envTags[t];
      if(wobJson.TAGS.indexOf(currentTag) === -1){
        invalidTags.push({env: wobEnv, tag: currentTag});
        break;
      }
    }
  }

  return invalidTags;
}

// check that the `id`, `filename`, `description` properties all
// exist, and that they aren't empty strings.
miniwobs.checkEnvs = function(wobJson){
  var invalidEnvs = [];
  for(var i=0;i<wobJson.envs.length;i++){
    var wobEnv = wobJson.envs[i];
    var envKeys = Object.keys(wobEnv);
    if(envKeys.indexOf('id') === -1 || envKeys.indexOf('filename') === -1
      || envKeys.indexOf('tags') === -1 || envKeys.indexOf('description') === -1){
      invalidEnvs.push(wobEnv);
    } else if([wobEnv.id, wobEnv.filename, wobEnv.description].indexOf('') !== -1){
      invalidEnvs.push(wobEnv);
    }
  }

  return invalidEnvs;
}

// check that the envs are alphabetically sorted by env ID.
miniwobs.checkSorted = function(wobJson){
  var invalidEnvs = [];
  var sortedEnvs = wobJson.envs.slice().sort(
    function(a, b){ return (a.id < b.id) ? -1 : 1; }
  );

  for(var i=0;i<sortedEnvs.length;i++){
    if(sortedEnvs[i].id !== wobJson.envs[i].id){
      invalidEnvs.push(wobJson.envs[i]);
      break;
    }
  }

  return invalidEnvs;
}


miniwobs.displayInvalidTags = function(tags){
  var errors = document.getElementById('errors');
  if(tags.length > 0){
    errors.setAttribute('style', 'display: block;');

    var div = document.createElement('div');
    div.innerHTML = 'These envs have tags not defined in the miniwobs.TAGS array (in miniwobs.js):';
    div.setAttribute('style', 'font-weight: bold; color: red;');
    errors.append(div);
  }

  for(var i=0;i<tags.length;i++){
    var div = document.createElement('div');
    div.innerHTML = '- ' + tags[i].env.id + ' has the invalid tag "' + tags[i].tag +'".';

    errors.append(div);
  }
}

miniwobs.displayInvalidEnvs = function(tags){
  var errors = document.getElementById('errors');
  if(tags.length > 0){
    errors.setAttribute('style', 'display: block;');

    var div = document.createElement('div');
    div.innerHTML = 'These envs have missing properties or invalid data:';
    div.setAttribute('style', 'font-weight: bold; color: red;');
    errors.append(div);
  }

  for(var i=0;i<tags.length;i++){
    var div = document.createElement('div');
    div.innerHTML = '- ' + JSON.stringify(tags[i]);
    errors.append(div);
  }
}

miniwobs.displaySortError = function(unsortedEnvs){
  var errors = document.getElementById('errors');
  if(unsortedEnvs.length > 0){
    errors.setAttribute('style', 'display: block;');

    var div = document.createElement('div');
    div.innerHTML = 'These envs are not sorted alphabetically by env "ID":';
    div.setAttribute('style', 'font-weight: bold; color: red;');"
"    errors.append(div);"
"  }"
"
  for(var i=0;i<unsortedEnvs.length;i++){
    var div = document.createElement('div');
    div.innerHTML = '- ' + JSON.stringify(unsortedEnvs[i]);
    errors.append(div);
  }

}
