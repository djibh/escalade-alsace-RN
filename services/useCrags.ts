import { useEffect, useState } from 'react';

type Crag = {
  id: string;
  label: string;
  region: string;
};

export const useCrags = () => {
    const [data, setData] = useState<Crag[]>([]);
    
    const getCrags = async () => {
        try {
            const response = await fetch('http://localhost:5000/crags');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
            // Used for Expo Go rendering on phone
            // const response = await fetch('http://192.168.1.55:5000/crags');
            const response = await fetch('http://192.168.1.16:5000/crags');
            const json = await response.json();
            setData(json);
        }        
    };

    useEffect(() => {
        getCrags();
    }, []);

    return { data }
}



 
