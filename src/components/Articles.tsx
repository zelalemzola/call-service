'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurFade from '@/components/ui/blur-fade'

interface Blog {
    _id: string
    title: string
    thumbnailUrl: string
    date: string
}

export default function Articles() {
    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([])

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                const response = await axios.get('/api/blogs')
                const sortedBlogs = response.data.blogs
                    .sort((a: Blog, b: Blog) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 3)
                setLatestBlogs(sortedBlogs)
            } catch (error) {
                console.error('Error fetching latest blogs:', error)
            }
        }

        fetchLatestBlogs()
    }, [])

    if (!latestBlogs.length) return null

    return (
        <section className="py-12 bg-gray-50 md:h-screen">
            <div className="container mx-auto px-4">
                <div className='flex flex-col md:flex-row gap-2 md:gap-0 md:items-center justify-between px-5 md:px-10'>
                <div className='flex flex-col gap-1'>
                <h2 className="text-3xl md:text-4xl  text-start ">Our Latest Articles</h2>
                <p className="text-md text-gray-500 mb-1">Discover the latest blog posts from our team.</p>
                </div>
                    <Link href="/blogs" className="inline-flex items-center text-white bg-secondary rounded-full  hover:shadow-2xl font-semibold transition-colors duration-300 px-3 py-2 w-fit">
                        View all articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 px-6 md:px-0">
                    {latestBlogs.map((blog,index) => (
                        <BlurFade delay={0.25 + index*0.05} inView={true} key={index}>
                        <Link key={blog._id} href={`/blogs/${blog._id}`} className="group">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-300">
                                <img src={blog.thumbnailUrl} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">{blog.title}</h3>
                                    <p className="text-sm text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </Link>
                        </BlurFade>
                    ))}
                </div>
                
            </div>
            
        </section>
    )
}

