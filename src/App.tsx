import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import AuthLayout from "@layouts/AuthLayout";
import LoginPage from "@pages/LoginPage";
import HomePage from "@pages/HomePage";
import TodosPage from "@pages/TodosPage";
import ShopPage from "@pages/ShopPage";
import { CartProvider } from "@context/CartProvider";
import { ProductsProvider } from "@context/ProductsProvider";
import { AuthProvider, useAuth } from "@context/AuthProvider";

const AppRoutes = () => {
  const { authenticated, loading } = useAuth();
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/">
        <Route
          element={
            <MainLayout
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
          }
        >
          <Route
            index
            element={!authenticated ? <Navigate replace to="/login" /> : <HomePage />}
          />
          <Route
            path="todos"
            element={!authenticated ? <Navigate replace to="/login" /> : <TodosPage />}
          />
          <Route
            path="shop"
            element={
              !authenticated ? (
                <Navigate replace to="/login" />
              ) : (
                <ProductsProvider>
                  <CartProvider>
                    <ShopPage />
                  </CartProvider>
                </ProductsProvider>
              )
            }
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path="login"
            element={
              authenticated ? <Navigate replace to="/" /> : <LoginPage />
            }
          />
        </Route>
      </Route>

      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
