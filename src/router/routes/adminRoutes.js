import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactivateSellers = lazy(() =>
  import("../../views/admin/DeactivateSellers")
);
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  { path: "admin/dashboard/category", element: <Category />, role: "admin" },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactivate-sellers",
    element: <DeactivateSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
];
