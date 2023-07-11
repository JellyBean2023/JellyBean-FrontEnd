export const POST = async request => {
    try {
      const { email, password } = await request.json()
      const result = userDB.userLogin({ email, password })
      if (result == true) {
        return new Response(JSON.stringify({ message: "로그인 성공." }), {
          status: 201
        })
      }
      return new Response(JSON.stringify({ message: "잘못입력하셨습니다." }), {
        status: 401
      })
    } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 })
    }
  }
  