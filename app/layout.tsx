// import "./globals.css";
// import {
//   ClerkProvider,
//   Show,
//   SignInButton,
//   SignUpButton,
//   UserButton,
// } from "@clerk/nextjs";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <ClerkProvider>
//           <header>
//             <Show when="signed-in">
//               <UserButton />
//             </Show>
//             <Show when="signed-out">
//               <SignInButton>Sign In</SignInButton>
//               <SignUpButton>Sign Up</SignUpButton>
//             </Show>
//           </header>

//           <Show when="signed-out">Hello</Show>

//           <Show when="signed-in">{children}</Show>

//           {children}
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
