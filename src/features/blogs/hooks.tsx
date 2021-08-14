import create from 'zustand'
import { Blog } from './types'

type BlogState = {
  blogs: Blog[]
  list: (blogs: Blog[]) => void
  addBlog: (blog: Blog) => void
  removeBlog: (id: number) => void
  likeBlog: (blog: Blog) => void
}

export const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  list: (blogs) =>
    set((state) => ({
      blogs: blogs
    })),
  addBlog: (blog) =>
    set((state) => ({
      blogs: [...state.blogs, blog]
    })),
  removeBlog: (id) =>
    set((state) => ({
      blogs: state.blogs.filter((blog) => blog.id !== id)
    })),
  likeBlog: (blog) =>
    set((state) => ({
      blogs: state.blogs.filter((blog) => blog.id !== blog.id).concat(blog)
    }))
}))
