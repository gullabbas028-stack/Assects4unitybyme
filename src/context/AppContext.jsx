// context/AppContext.js
import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [page, setPage]           = useState("home");
  const [cart, setCart]           = useState([]);
  const [cartOpen, setCartOpen]   = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn]   = useState(false);
  const [username, setUsername]   = useState("");

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const cartCount = cart.length;
  const cartTotal = cart.reduce((s, i) => s + i.price, 0);

  const login = (user) => { setLoggedIn(true); setUsername(user); setLoginOpen(false); };
  const logout = () => { setLoggedIn(false); setUsername(""); };

  return (
    <AppContext.Provider value={{
      page, setPage,
      cart, addToCart, removeFromCart,
      cartOpen, setCartOpen,
      loginOpen, setLoginOpen,
      loggedIn, username, login, logout,
      cartCount, cartTotal,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
