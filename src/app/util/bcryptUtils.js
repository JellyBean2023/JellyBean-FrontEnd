const bcrypt = require('bcryptjs');
const saltRounds = parseInt(process.env.NEXT_PUBLIC_SECRET_SALT, 10);

export const HashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('비밀번호를 암호화하는 데 실패했습니다.');
    }
};