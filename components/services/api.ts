import { useEffect, useState } from 'react';

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
};

export const usePosts = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Post[]>([]);
    
    const getPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/articles');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }        
    };

    useEffect(() => {
        getPosts();
    }, []);

    return { data }
}



 
