"use strict";

var _xstate = require("xstate");
const {
  actions,
  createMachine,
  assign
} = _xstate;
const {
  choose
} = actions;
const fetchMachine = createMachine({
  id: "fileupload",
  initial: "idle",
  context: {},
  on: {
    "FILES.SET": {
      actions: ["setFilesFromEvent"]
    },
    "FILE.DELETE": {
      actions: ["removeFile"]
    },
    "FILES.CLEAR": {
      actions: ["clearFiles"]
    },
    "REJECTED_FILES.CLEAR": {
      actions: ["clearRejectedFiles"]
    }
  },
  activities: ["preventDocumentDrop"],
  on: {
    UPDATE_CONTEXT: {
      actions: "updateContext"
    }
  },
  states: {
    idle: {
      on: {
        OPEN: {
          actions: ["openFilePicker"]
        },
        "DROPZONE.CLICK": {
          actions: ["openFilePicker"]
        },
        "DROPZONE.FOCUS": "focused",
        "DROPZONE.DRAG_OVER": "dragging"
      }
    },
    focused: {
      on: {
        "DROPZONE.BLUR": "idle",
        OPEN: {
          actions: ["openFilePicker"]
        },
        "DROPZONE.CLICK": {
          actions: ["openFilePicker"]
        },
        "DROPZONE.DRAG_OVER": "dragging"
      }
    },
    dragging: {
      on: {
        "DROPZONE.DROP": {
          target: "idle",
          actions: ["setFilesFromEvent"]
        },
        "DROPZONE.DRAG_LEAVE": "idle"
      }
    }
  }
}, {
  actions: {
    updateContext: assign((context, event) => {
      return {
        [event.contextKey]: true
      };
    })
  },
  guards: {}
});