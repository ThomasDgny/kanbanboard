import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../assets/textEditorStyle/TextEditorStyle.css'

const TextEditor = ({ content, setContent, readOnly, toolBarIsVisble, height }) => {

  const modules = {

    toolbar: toolBarIsVisble ? [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
      [{ 'header': 1 }, { 'header': 2 }],
      ['code-block']
    ] : [],

  };


  return (
    <div>
      <ReactQuill
        value={content}
        readOnly={readOnly}
        onChange={(value) => setContent(value.trim())}
        modules={modules}
        style={{ height: `${height}` }}
        placeholder='Description'
      />
    </div>
  );
};

export default TextEditor;
