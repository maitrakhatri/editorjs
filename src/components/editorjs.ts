import EditorJS from "@editorjs/editorjs";
// import ToggleBlock from 'editorjs-toggle-block';

// const Header = require("@editorjs/header");
const Header = require('editorjs-header-with-anchor');
const Quote = require("@editorjs/quote");
// const List = require("@editorjs/list");
const Warning = require('@editorjs/warning');
const Paragraph = require('editorjs-paragraph-with-alignment');
// const List = require('@editorjs/list');
const nestedList = require('@editorjs/nested-list')
const Checklist = require('@editorjs/checklist');
const SimpleImage = require('@editorjs/simple-image')

export const editorInstance = () => {
    const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Let's get this party started",
        tools: {
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 1,
              allowAnchor: true,
              anchorLength: 100,
            },
          },
          quote: Quote,
          list: {
            class: nestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            }
          },
          warning: Warning,
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          image: SimpleImage,
        },
        onChange() {
          editor.save().then((data) => localStorage.setItem('editorJS', JSON.stringify(data)))
        },
        data: JSON.parse(localStorage.getItem('editorJS')!)
    });
    return editor
}
