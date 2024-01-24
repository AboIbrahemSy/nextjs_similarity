"use client"
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { FC } from "react";

// interface postsProps {}

// const posts = [
//   { id: 1, title: "hi", paragraph: "llololololololo" },
//   { id: 2, title: "hi", paragraph: "llololololololo" },
//   { id: 3, title: "hi", paragraph: "llololololololo" },
//   { id: 4, title: "hi", paragraph: "llololololololo" },
//   { id: 5, title: "hi", paragraph: "llololololololo" },
//   { id: 6, title: "hi", paragraph: "llololololololo" },
//   { id: 7, title: "hi", paragraph: "llololololololo" },
//   { id: 8, title: "hi", paragraph: "llololololololo" },
//   { id: 9, title: "hi", paragraph: "llololololololo" },
//   { id: 10, title: "hi", paragraph: "llololololololo" },
// ];

// const mockFetchPosts = async (page: number) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return posts.slice((page - 1) * 2, page * 2);
// };

// const Posts: FC<postsProps> = () => {
//   const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
//     ["posts"],
//     async ({ pageParam = 1 }) => {
//       const response = await mockFetchPosts(pageParam);
//       return response;
//     },
//     {
//       getNextPageParam: (_, pages) => {
//         return pages.length + 1;
//       },
//       initialData: {
//         pages: [posts.slice(0, 2)],
//         pageParams: [1],
//       },
//     }
//   );
//   return (
//     <div>
//       {data?.pages.map((page, i) => (
//         <div key={i}>
//           {page.map((post) => (
//             <div key={post.id}>{post.paragraph}</div>
//           ))}
//         </div>
//       ))}
//       <button onClick={()=>fetchNextPage()} disabled={isFetchingNextPage}>
//         {isFetchingNextPage
//           ? "Loading more ..."
//           : (data?.pages.length ?? 0) < 3
//           ? "Load more"
//           : "nothing more to load"}
//       </button>
//     </div>
//   );
// };

// export default Posts;


import { useInfiniteQuery } from "@tanstack/react-query";
import { FC ,useEffect,useRef} from "react";
import {useIntersection} from '@mantine/hooks'

interface postsProps {}

const posts = [
  { id: 1, title: "hi", paragraph: "llololololololo" },
  { id: 2, title: "hi", paragraph: "llololololololo" },
  { id: 3, title: "hi", paragraph: "llololololololo" },
  { id: 4, title: "hi", paragraph: "llololololololo" },
  { id: 5, title: "hi", paragraph: "llololololololo" },
  { id: 6, title: "hi", paragraph: "llololololololo" },
  { id: 7, title: "hi", paragraph: "llololololololo" },
  { id: 8, title: "hi", paragraph: "llololololololo" },
  { id: 9, title: "hi", paragraph: "llololololololo" },
  { id: 10, title: "hi", paragraph: "llololololololo" },
];

const mockFetchPosts = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts.slice((page - 1) * 2, page * 2);
};

const Posts: FC<postsProps> = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["posts"],
    async ({ pageParam = 1 }) => {
      const response = await mockFetchPosts(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [posts.slice(0, 2)],
        pageParams: [1],
      },
    }
  );
  const lastPostRef = useRef<HTMLElement>(null);
  const {ref,entry} = useIntersection({
    root:lastPostRef.current,
    threshold:1
  })
  useEffect(()=>{
    if(entry?.isIntersecting) fetchNextPage()
  },[entry])
  const _posts = data?.pages.flatMap((page)=>page)
  return (
    <div>
      {/* {data?.pages.map((page, i) => (
        <div key={i}>
          {page.map((post) => (
            <div key={post.id}>{post.paragraph}</div>
          ))}
        </div>))} */}
        {_posts?.map((post,i)=>{
            // if(i === _posts.length) <div ref={ref}></div>
            return (i === _posts.length) 
            ? <div  key={post.id} ref={ref}>{post.paragraph}</div> 
            : <div key={post.id}>{post.paragraph}</div>
        })}
      <button>
        {isFetchingNextPage
          ? "Loading more ..."
          : (data?.pages.length ?? 0) < 3
          ? "Load more"
          : "nothing more to load"}
      </button>
    </div>
  );
};

export default Posts;
