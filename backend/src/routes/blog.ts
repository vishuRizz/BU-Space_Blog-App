import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput } from "@vishurizz/medium-blog";
import { Hono } from "hono";
import { verify } from "hono/jwt";

declare module 'hono' {
  interface HonoRequest {
    userId?: number;
  }
}

export const blogRouter = new Hono<{ 
  Bindings: { DATABASE_URL: string; JWT_SECRET: string }, 
  Variables: { userId: string }
}>();

blogRouter.use('/*', async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json({ error: 'no token found' }, 401);
  }

  try {
    const token = authHeader.split(" ")[1];

    if (!token) {
      return c.json({ error: 'no token found after Bearer' }, 401);
    }

    console.log('Extracted Token:', token);

    const user = await verify(token, c.env.JWT_SECRET);
    console.log('Decoded User:', user);

    if (user && typeof user.id === 'number') {
      c.req.userId = user.id;
      await next(); 
      return;
    } else {
      return c.json({ error: 'invalid token' }, 401);
    }
  } catch (error) {
    console.error('Token verification error:', error);
    return c.json({ error: 'failed to verify token' }, 500);
  }
});

blogRouter.post('/add-blog', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env.DATABASE_URL 
        }
      }
    }).$extends(withAccelerate());
    const autherId = c.req.userId;

    if (autherId === undefined) {
      throw new Error('User ID is required');
    }
    const body = await c.req.json() || "";
    const { success } = createBlogInput.safeParse(body)
    if (!success) {
      return c.json({ error: 'Invalid input, zod validation failed' }, 400);
    }
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        autherId: autherId
      }
    });
    return c.json({
      id: blog.id,
      message: "blog added successfully"
    });
  } catch (error) {
    console.log("error while adding blog", error);
    return c.json({ error: "Failed to add blog" }, 500);
  }
});

blogRouter.put('/update-blog', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env.DATABASE_URL 
        }
      }
    }).$extends(withAccelerate());
    const autherId = c.req.userId;
    const body = await c.req.json();
    const blogId = body.id;

    if (!blogId) {
      return c.json({ error: 'Blog ID is required' }, 400);
    }

    const blog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        title: body.title,
        content: body.content
      }
    });

    return c.json({
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    console.log("error while updating blog", error);
    return c.json({ error: 'Failed to update blog' }, 500);
  }
});

blogRouter.get('/bulk', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env.DATABASE_URL 
        }
      }
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany();

    return c.json(blogs);
  } catch (error) {
    console.log("error while fetching all blogs", error);
    return c.json({ error: 'Failed to fetch blogs' }, 500);
  }
});


blogRouter.get('/:id', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env.DATABASE_URL 
        }
      }
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id)
      }
    });

    return c.json({
      blog: blog
    });
  } catch (error) {
    console.log("error while fetching blog", error);
    return c.json({ error: 'Failed to fetch blog' }, 500);
  }
});

