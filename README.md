# vue-drag-drop-file
A VueJS plugin that prevents drag and drop files avoiding the browser from loading the file.

## How to use

Add this code to your main file:

```
import Vue from 'vue'
import preventDragDropFile from 'path/to/prevent-drag-drop-file'

Vue.use(preventDragDropFile)
```

The plugin behaviour will not be applied if the target element contains the class **droppable** (If it consists of several nested elements, you need to add the **droppable** class for each of them).
