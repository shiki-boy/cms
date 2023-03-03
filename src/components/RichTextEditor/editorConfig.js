/* eslint-disable sort-keys */
const editorConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'fontfamily',
      'fontsize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'outdent',
      'indent',
      '|',
      'link',
      'blockquote',
      'uploadImage',
      'insertTable',
      'mediaEmbed',
      '|',
      'undo',
      'redo',
    ],
  },
  image: {
    resizeUnit: 'px',
    toolbar: [
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
    ],
  },
  simpleUpload: {
    // TODO: The URL that the images are uploaded to.
    uploadUrl: 'http://localhost:8000',

    // Enable the XMLHttpRequest.withCredentials property.
    // withCredentials: true,

    // Headers sent along with the XMLHttpRequest to the upload server.
    // headers: {
    //   Authorization: 'Bearer <JSON Web Token>',
    //   'X-CSRF-TOKEN': 'CSRF-Token',
    // },
  },
  table: { contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ] },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
}

export default editorConfig