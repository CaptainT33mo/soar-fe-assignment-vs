"use client";

import { EditProfile } from "@/components/pages/settings/edit-profile";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabs = [
  { value: "profile", label: "Edit Profile", content: <EditProfile /> },
  { value: "preferences", label: "Preferences", content: <>Preferences</> },
  { value: "security", label: "Security", content: <>Security</> },
];

export default function Settings() {
  return (
    <>
      <div className="bg-background w-full p-6 md:px-10 md:py-6">
        <section className="w-full p-4 md:p-7 bg-white rounded-3xl">
          <Tabs defaultValue="profile">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger value={tab.value} key={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent value={tab.value} key={tab.value}>
                {tab.content}
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
    </>
  );
}