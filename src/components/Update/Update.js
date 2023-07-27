import { styled } from "styled-components";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from "@mui/material";
const EditorContainer = styled.main`
    & form {
        display: flex;
        justify-content: center;

        .ProseMirror, .toastui-editor-md-preview p, .ProseMirror.toastui-editor-contents p{
            color: var(--text-color);
        }

        .toastui-editor-main.toastui-editor-ww-mode {
            .ProseMirror {
                background-color: rgb(var(--background-rgb));
            }
        }
    }
`

const Update = (props) => {
    const { id } = props;
    const placeHolder = {
        lecName: "과정 ID",
        cardinalName: "과정 명",
        lecStatus: "모집여부 (true/false)",
        lecInfo: "내용"
      }
      
    return (
        <EditorContainer className="px-24 py-10">
            <h1><b>데이터 수정하기</b> {id}</h1>
            <form action={``}>
                <Editor className="editor"  
                    initialValue={JSON.stringify(placeHolder)}
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                />
            </form>
            <Button> 수정하기 </Button>
        </EditorContainer>
    )
}

export default Update;
