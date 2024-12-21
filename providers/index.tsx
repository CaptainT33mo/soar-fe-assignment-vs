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
import { usePathname } from "next/navigation";



const sidebarItems = [
  { title: "Dashboard", href: "/", icon: <HomeIcon width={25} height={25} />, headerTitle: "Overview" },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <TransactionIcon width={25} height={25} />,headerTitle: "Transactions"
  },
  { title: "Accounts", href: "/accounts", icon: <AccountsIcon width={25} height={25} />,headerTitle: "Accounts" },
  { title: "Investments", href: "/investments", icon: <InvestmentIcon width={25} height={25} />,headerTitle: "Investments" },
  {
    title: "Credit Cards",
    href: "/credit-cards",
    icon: <CreditCardIcon width={25} height={25} />,headerTitle: "Credit Cards"
  },
  { title: "Loans", href: "/loans", icon: <LoansIcon width={25} height={25} />,headerTitle: "Loans" },
  { title: "Services", href: "/services", icon: <ServicesIcon width={25} height={25} />,headerTitle: "Services" },
  {
    title: "My Privileges",
    href: "/my-privileges",
    icon: <PrivilagesIcon width={25} height={25} />,headerTitle: "My Privileges"
  },
  { title: "Settings", href: "/settings", icon: <SettingsIcon width={25} height={25} />,headerTitle: "Settings" },
];

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
   // Find the sidebar item that matches the current route
  const currentSidebarItem = sidebarItems.find(item => item.href === pathname);

  // Get the headerTitle for the current route
  const headerTitle = currentSidebarItem ? currentSidebarItem.headerTitle : "";
  
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <GlobalSidebar items={sidebarItems} />
        <main className="flex-1 bg-white md:bg-background">
          <Header title={headerTitle} />
          {children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}