import { Suspense } from "react";

export default async function UserPage() {
      // await waitSeconds(3);
      return (
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                  <UserComponent />
            </div>
      )
}

function UserComponent() {
      return (
            <Suspense fallback={<UserComponentSkeleton />}>
                  <UserComponentContent />
            </Suspense>
      )
}

function UserComponentSkeleton() {
      return (
            <div>
                  <p>User Component Skeleton, displayed BEFORE delay</p>
            </div>
      );
}

async function UserComponentContent() {
      await waitSeconds(7);
      return (
            <div>
                  <p>User Component Content, displayed AFTER delay</p>
            </div>
      );
}


function waitSeconds(seconds: number): Promise<void> {
      return new Promise(resolve => {
            setTimeout(() => {
                  resolve();
            }, seconds * 1000); // Convert seconds to milliseconds
      });
}