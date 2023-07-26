import { styled } from "styled-components";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    
    .editor {
        color: var(--text-color) !important;
        background-color: white;
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
        <main className="px-24 py-10">
            <h1><b>데이터 수정하기</b> {id}</h1>
            <FormContainer action={``}>
                <Editor className="editor"
                    initialValue={JSON.stringify(placeHolder)}
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                />
            </FormContainer>
        </main>
    )
}

export default Update;
