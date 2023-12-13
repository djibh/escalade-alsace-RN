import { useEffect, useState } from 'react';

type Crag = {
  id: string;
  label: string;
  region: string;
};

export const useCrags = () => {
    const [setLoading] = useState(true);
    const [data, setData] = useState<Crag[]>([]);
    
    const getCrags = async () => {
        try {
            const response = await fetch('http://localhost:5000/crags');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }        
    };

    useEffect(() => {
        getCrags();
    }, []);

    return { data }
}



 
