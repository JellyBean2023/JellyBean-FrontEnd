// 샘플 유저 데이터
const sampleUsers = [
  {
    id: 1,
    email: "user1@example.com",
    password: "!!!111qqq"
  },
  {
    id: 2,
    email: "user2@example.com",
    password: "@@@222www"
  }
];

export const POST = async (request) => {
  try {
    const { username, password } = await request.json();

    const authenticatedUser = sampleUsers.find(
      (user) => user.email === username && user.password === password
    );

    if (authenticatedUser) {
      return new Response(
        JSON.stringify({ message: "로그인 성공.", user: authenticatedUser }),
        {
          status: 201,
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "잘못된 입력값으로 인한 오류가 발생했습니다.",
      }),
      {
        status: 401,
      }
    );
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
