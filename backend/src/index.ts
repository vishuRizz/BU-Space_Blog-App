import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign } from 'hono/jwt'

interface CloudflareBindings {
  DATABASE_URL: string;
}

const app = new Hono<{ Bindings: CloudflareBindings, Env: { DATABASE_URL: string } }>()


app.post('/api/v1/signup',async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl:  c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
      }
    })
    const token = await sign({id: user.id}, "crazzzyy")
    return c.json({ jwt: token });
  } catch (error) {
    console.log("error baby fuck you", error)
    console.error('Detailed error:', JSON.stringify(error, null, 2));
  return c.json({ error: 'Error during signup' }, 500);
  }
 
})
app.post('/api/v1/signin',async (c)=>{
  try {
    const prisma = new PrismaClient({
      datasourceUrl:  c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,    
      }
    })
    if (user && user.password == body.password) {
      const token = await sign({id: user.id}, "crazzzyy")
      return c.json({ jwt: token });
    }

    return c.json({ error: 'incorrect cerdentials' }, 401);

    
  } catch (error) {
    console.log("error while singin", error)
  }
 
})

export default app