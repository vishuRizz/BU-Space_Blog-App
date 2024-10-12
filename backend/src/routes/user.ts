import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@vishurizz/medium-blog";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

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
      const { success } = signinInput.safeParse(body)
      if (!success) {
        return c.json({ error: 'Invalid input, zod validation failed' }, 400);
      }
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

  userRouter.post('/profile', async (c) => {
    try {
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      
      const body = await c.req.json();
      const { bio, avatarUrl, website, socialHandles } = body;
      
      const token = c.req.header('Authorization')?.split(' ')[1];
      if (!token) return c.json({ error: 'Unauthorized' }, 401);
  
      const decodedToken = await verify(token, c.env.JWT_SECRET);
      const userId = decodedToken.id as number;
  
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });
  
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      let profile = await prisma.profile.findUnique({
        where: { userId: userId }
      });
  
      if (profile) {
        profile = await prisma.profile.update({
          where: { userId: userId },
          data: {
            bio,
            avatarUrl,
            website,
            socialHandles: socialHandles ? JSON.stringify(socialHandles) : undefined,
          }
        });
        return c.json({ message: 'Profile updated', profile }, 200);
      } else {
        profile = await prisma.profile.create({
          data: {
            bio,
            avatarUrl,
            website,
            socialHandles: socialHandles ? JSON.stringify(socialHandles) : undefined,
            user: { connect: { id: userId } }
          }
        });
        return c.json({ message: 'Profile created', profile }, 201);
      }
  
    } catch (error) {
      console.log("Error creating/updating profile:", error);
      return c.json({ error: 'Error during profile creation/updation' }, 500);
    }
  });

  


