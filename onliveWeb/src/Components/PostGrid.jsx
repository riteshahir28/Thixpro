import React from "react";

const posts = [
  {
    id: 1,
    title: "Design Brilliance at Your Doorstep: Onlive Technologies, Your Local Web Designer Near Me",
    date: "February 3, 2024",
    image: "web-designer-near-me.jpg",
    excerpt: "In our increasingly digital world, the importance of a strong online presence cannot be overstated. Its design can either captivate visitors and draw them in or leave them unimpressed and clicking away. This is where…",
    link: "https://www.onlivetechnologies.com/design-brilliance-at-your-doorstep-onlive-technologies-your-local-web-designer-near-me/",
  },
  {
    id: 2,
    title: "Shaping Digital Futures with Website Designer Near Me: Onlive Technologies",
    date: "January 29, 2024",
    image: "image_2023_12_06T10_17_35_048Z-2048x1365.png",
    excerpt: "In the ever-evolving landscape of the digital world, businesses are constantly striving to establish a strong online presence. With the increasing importance of the internet in our lives, having a well-designed website is no longer…",
    link: "https://www.onlivetechnologies.com/shaping-digital-futures-with-website-designer-near-me-onlive-technologies/",
  },
  {
    id: 3,
    title: "E-Commerce Website Design: The Blueprint to Online Success",
    date: "January 25, 2024",
    image: "Blue-Modern-Web-Hosting-Promotions-Instagram-Post.png",
    excerpt: "In the current digital era, a company’s online presence frequently determines its level of success. With the rapid growth of e-commerce, having a well-designed website is no longer a luxury but a necessity. It’s not…",
    link: "https://www.onlivetechnologies.com/e-commerce-website-design-the-blueprint-to-online-success/",
  },
];

const PostGrid = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <figure className="w-full h-60 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-4 flex flex-col flex-1">
              <time className="text-gray-500 text-sm mb-2">{post.date}</time>
              <h2 className="text-lg font-semibold mb-2">
                <a href={post.link} className="hover:text-orange-500" target="_blank" rel="noreferrer">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-700 text-sm flex-1">{post.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostGrid;
