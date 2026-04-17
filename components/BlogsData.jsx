// "use client";
import { client } from "@/lib/sanity";
import React from 'react'

const BlogsData = async () => {
    const data = await client.fetch(`*[_type == "blogPost"]`);
    console.log(data);
    return (
        <div>
            <h1>Sanity Test</h1>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default BlogsData
