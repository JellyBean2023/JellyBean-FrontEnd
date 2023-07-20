import axios from 'axios';

export const POST = async (request) => {
  try {
    const { username, password } = await request.json(); //로그인에서 입력한 데이터

    const loginData = {
      username: username,
      password: password,
    };

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(response.status === 200) {
      return new Response(
        JSON.stringify({ message: "로그인 성공.", data: loginData, result: response.data }),
        {
          status: 201,
        }
      );
    }
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};