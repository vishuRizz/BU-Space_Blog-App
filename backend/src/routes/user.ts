import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupInput } from "@vishurizz/medium-blog";
import { Hono } from "hono";
import { sign } from "hono/jwt";

interface CloudflareBindings {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
  
export const userRouter = new Hono<{ Bindings: CloudflareBindings, Env: { DATABASE_URL: string } }>()

userRouter.post('/signup',async (c) => {
    try {
      const prisma = new PrismaClient({
        datasourceUrl:  c.env.DATABASE_URL
      }).$extends(withAccelerate())
      const body = await c.req.json()
      const { success } = signupInput.safeParse(body)
      if (!success) {
        return c.json({ error: 'Invalid input, zod validation failed' }, 400);
      }
      const user = await prisma.user.create({
        data: {
          name: body.name,
          username: body.username,
          password: body.password
        }
      })
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
      return c.json({ jwt: token });
    } catch (error) {
      console.log("error baby fuck you", error)
      console.error('Detailed error:', JSON.stringify(error, null, 2));
    return c.json({ error: 'Error during signup' }, 500);
    }
   
  })
  userRouter.post('/signin',async (c)=>{
    try {
      const prisma = new PrismaClient({
        datasourceUrl:  c.env.DATABASE_URL
      }).$extends(withAccelerate())
      const body = await c.req.json()
      const user = await prisma.user.findUnique({
        where: {
          username: body.username,    
        }
      })
      if (user && user.password == body.password) {
        const token = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json({ jwt: token });
      }
  
      return c.json({ error: 'incorrect cerdentials' }, 401);
  
      
    } catch (error) {
      console.log("error while singin", error)
    }
   
  })
  


