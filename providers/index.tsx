"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalSidebar from "@/components/global-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import HomeIcon from "@/components/icons/sidebar/home";
import TransactionIcon from "@/components/icons/sidebar/transactions";
import AccountsIcon from "@/components/icons/sidebar/accounts";
import InvestmentIcon from "@/components/icons/sidebar/investment";
import CreditCardIcon from "@/components/icons/sidebar/credit-card";
import LoansIcon from "@/components/icons/sidebar/loans";
import ServicesIcon from "@/components/icons/sidebar/services";
import PrivilagesIcon from "@/components/icons/sidebar/privilages";
import SettingsIcon from "@/components/icons/sidebar/settings";



const sidebarItems = [
  { title: "Dashboard", href: "/", icon: <HomeIcon /> },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <TransactionIcon />,
  },
  { title: "Accounts", href: "/accounts", icon: <AccountsIcon /> },
  { title: "Investments", href: "/investments", icon: <InvestmentIcon /> },
  {
    title: "Credit Cards",
    href: "/credit-cards",
    icon: <CreditCardIcon />,
  },
  { title: "Loans", href: "/loans", icon: <LoansIcon /> },
  { title: "Services", href: "/services", icon: <ServicesIcon /> },
  {
    title: "My Privileges",
    href: "/my-privileges",
    icon: <PrivilagesIcon />,
  },
  { title: "Settings", href: "/settings", icon: <SettingsIcon /> },
];

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <GlobalSidebar items={sidebarItems} />
        <main className="flex-1 bg-white md:bg-background">{children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}