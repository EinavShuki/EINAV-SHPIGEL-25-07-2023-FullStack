import { v4 as uuidv4 } from 'uuid';
const isProd = process.env.NODE_ENV === 'production';

const cookieHandler = (req, res, next) => {
  const { userId } = req.cookies;
  if (!userId) {
    console.log('setting a cookie');
    res.cookie('userId', uuidv4(), { maxAge: 90000000, httpOnly: isProd });
    return res.json({});
  }
  next();
};

export default cookieHandler;
