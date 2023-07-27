import { styled } from "styled-components";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from "@mui/material";
import { useState } from "react";
const EditorContainer = styled.main`
    padding: 2rem;

    h1 {
        b{
            font-size: 20px;
        }
    }

    & form {
        display: flex;
        flex-direction: column;
        
        & > div:nth-child(1) {
            width: 100%;
            margin: 20px 0;

            .ProseMirror,
            .toastui-editor-md-preview p,
            .ProseMirror.toastui-editor-contents p{
                color: var(--text-color);
            }

            .toastui-editor-main.toastui-editor-ww-mode {
                .ProseMirror {
                    background-color: rgb(var(--background-rgb));
                }
            }

            .toastui-editor-contents pre,
            .toastui-editor-md-code-block-line-background{
                background-color: rgb(var(--background-rgb));
            }

            .toastui-editor.ww-mode {
                .toastui-editor-contents pre {
                    border: 1px solid var(--text-color);
                }
            }

            .toastui-editor-popup-body {
                color: black;
            }
        }

        #btn {
            border: 1px solid var(--text-color);
            width: 15%;
        }
    }
`

const Edit = (props) => {
    const { id } = props;
    const [formData, setFormData] = useState({
        lecName: "과정 ID",
        cardinalName: "과정 명",
        lecStatus: "모집 여부 (true/false)",
        lecInfo: "내용"
    });

    const handleChange = (value) => {
        setFormData({
            ...formData,
            lecInfo: value
        });
    };

    const removeBackticks = (data) => { //백틱제거 함수
        const lecInfoWithoutBackticks = data.lecInfo.replace(/`/g, '');
        return {
            ...data,
            lecInfo: lecInfoWithoutBackticks
        };
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const editedData = {
            ID: { id: id },
            DATA: removeBackticks(formData)
        };
        console.log(editedData);
    };

    const ph_Curriculum = `
    {
      lecName: "과정 ID",
      cardinalName: "과정 명",
      lecStatus: 모집 여부 (true/false),
      lecInfo: "내용"
    }
    `;

    const ph_Section1 = `
        {
            name: "이름",
            contents: "내용"
        }
    `

    //ID에 따른 placeholder 지정
    let placeholder;
    if (id === 'CurriculumBox')
        placeholder = ph_Curriculum;
    else if (id === 'Section1')
        placeholder = ph_Section1;
    else
        placeholder = "";

    return (
        <EditorContainer className="px-24 py-10">
            <h1><b>데이터 수정하기</b> {id}</h1>
            <form onSubmit={submitHandler}>
                <Editor
                    className="editorss"
                    initialValue={placeholder}
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                    onChange={handleChange}
                />
                <Button id="btn" type="submit"> 수정하기 </Button>
            </form>
        </EditorContainer>
    );
};

export default Edit;  