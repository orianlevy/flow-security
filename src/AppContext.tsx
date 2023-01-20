import React, {createContext, useState} from 'react';

const AppContext = createContext<any>(null);

export function AppProvider ({ children } : any) {
    const [items, setItems] = useState<any>([]);
    const deletePost = (postId: any) => {
        const newItems = items.filter((item : any) => item.id!==postId)
        setItems(newItems);
    }

    return (
        <AppContext.Provider value={{items, setItems, deletePost}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;