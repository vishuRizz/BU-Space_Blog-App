import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'

interface CloudflareBindings {
  DATABASE_URL: string;
}

const app = new Hono<{ Bindings: CloudflareBindings, Env: { DATABASE_URL: string } }>()

app.use('/api/v1/blog/*', async(c, next)=>{
  const header = c.req.header("Authorization")
 const token = header?.split(" ")[1]
 if (token) {
  const response = await verify(token, "crazzzyy")
 if (response.id){
  return next()
 } else{
  return c.json({ error: 'invalid token' }, 401);
 }
 }
})

app.post('/api/v1/signup',async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl:  c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const user = await prisma.user.create({
      data: {
        name: body.name,
        username: body.username,
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
        username: body.username,    
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