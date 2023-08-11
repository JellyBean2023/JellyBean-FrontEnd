import { styled } from "styled-components";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const EditorContainer = styled.main`
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

            .toastui-editor-contents pre {
                border: 1px solid var(--text-color);
            }

            .toastui-editor-popup-body {
                color: black;
            }
        }

        #btn {
            border: 1px solid var(--text-color);
            width: 15%;
            color: var(--text-color);
        }
    }
`

const Edit = (props) => {
    const { id } = props;
    const router = useRouter();
    const [formData, setFormData] = useState({
        lecName: "과정 ID",
        cardinalName: "과정 명",
        lecStatus: "모집 여부 (true/false)",
        lecInfo: "내용"
    });

    //ID값에 따른 필요 데이터
    const [page_Curriculum, setPhCurriculum] = useState(`
    [
        {
          lecName: "과정 ID",
          cardinalName: "과정 명",
          lecStatus: true,
          lecInfo: "내용"
        },
        {
          lecName: "과정 ID",
          cardinalName: "과정 명",
          lecStatus: false,
          lecInfo: "내용"
        }
        {
          lecName: "과정 ID",
          cardinalName: "과정 명",
          lecStatus: true,
          lecInfo: "내용"
        }
      ]
    `);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin?${id}`);
            console.log(response.data)
            const cleanedData = JSON.stringify(response.data).replace(/'/g, '"');
        
            console.log(cleanedData);
            setPhCurriculum(formattedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };    

    useEffect(() => {
        fetchData();
    }, [])

    
    const page_Section1 = `
    {
        name: "이름",
        contents: "내용"
    }
    `

    //ID에 따른 placeholder 지정
    let placeholder;
    if (id === 'CurriculumBox')
        placeholder = page_Curriculum;
    else if (id === 'Section1')
        placeholder = page_Section1;
    else
        placeholder = "";

    const editorRef = useRef();

    const removeBackticks = (data) => {
        const lecInfoWithoutBackticks = data.replace(/`/g, ''); // 백틱 제거
        return lecInfoWithoutBackticks;
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        const editedData = editorRef.current.getInstance().getMarkdown();
        const formData = JSON.parse(removeBackticks(editedData));
        const response = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/member/${id}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("accessToken"),
            },
        }).then(response => {
            alert("수정이 완료되었습니다");
            console.log(response);
        }).catch(error => {
            alert("수정에 실패했습니다.");
            console.log(error.response);
        });
    };
    

    return (
        <EditorContainer className="p-5">
            <button onClick={() => router.back()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-1/8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                뒤로 가기
            </button>
            <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"}>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <h2 className="font-semibold text-5xl my-4">데이터 수정하기<b>{id}</b></h2>
                    </div>
                </div>
                <form onSubmit={submitHandler}>
                    <Editor
                        className="editorss"
                        initialValue={placeholder}
                        previewStyle="vertical"
                        height="450px"
                        initialEditType="wysiwyg"
                        ref={editorRef}
                    />
                    <Button id="btn" type="submit"> 수정하기 </Button>
                </form>
            </div>
        </EditorContainer >
    );
};

export default Edit;  