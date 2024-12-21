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
import Header from "@/components/header";



const sidebarItems = [
  { title: "Dashboard", href: "/", icon: <HomeIcon width={25} height={25} /> },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <TransactionIcon width={25} height={25} />,
  },
  { title: "Accounts", href: "/accounts", icon: <AccountsIcon width={25} height={25} /> },
  { title: "Investments", href: "/investments", icon: <InvestmentIcon width={25} height={25} /> },
  {
    title: "Credit Cards",
    href: "/credit-cards",
    icon: <CreditCardIcon width={25} height={25} />,
  },
  { title: "Loans", href: "/loans", icon: <LoansIcon width={25} height={25} /> },
  { title: "Services", href: "/services", icon: <ServicesIcon width={25} height={25} /> },
  {
    title: "My Privileges",
    href: "/my-privileges",
    icon: <PrivilagesIcon width={25} height={25} />,
  },
  { title: "Settings", href: "/settings", icon: <SettingsIcon width={25} height={25} /> },
];

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <GlobalSidebar items={sidebarItems} />
        <main className="flex-1 bg-white md:bg-background">
          <Header title="" />
          {children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}