import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

interface CloudflareBindings {
  DATABASE_URL: string;
  JWT_SECRET: string;
}

const app = new Hono<{ Bindings: CloudflareBindings, Env: { DATABASE_URL: string } }>()

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

app.use('/api/v1/blog/*', async(c, next)=>{
  const header = c.req.header("Authorization")
 const token = header?.split(" ")[1]
 if (token) {
  const response = await verify(token, c.env.JWT_SECRET)
 if (response.id){
  return next()
 } else{
  return c.json({ error: 'invalid token' }, 401);
 }
 }
})

export default app