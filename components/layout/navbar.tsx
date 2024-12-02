"use client";

import * as React from "react";
import Link from "next/link";

import { categories, cn } from "@/lib/utils/utils";
import camelCase from "camelcase";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const newsSource: string[] = [
  "Antara",
  "CNBC",
  "CNN",
  "JPNN",
  "Kumparan",
  "Merdeka",
  "Okezone",
  "Republika",
  "SINDOnews",
  "Suara",
  "Tempo",
  "Tribun",
];

export const Navbar: React.FC = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 mx-24">
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Icon className="h-7 w-7" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-trigger relative hover:after:scale-x-100 after:absolute after:left-4 after:bottom-1 after:w-[15px] after:h-[4px] after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out text-md">
              Sumber Berita
            </NavigationMenuTrigger>
            <NavigationMenuContent className="custom-content">
              <ul className="grid w-[50px] gap-3 p-4 md:w-[150px] md:grid-cols-2 lg:w-[250px]">
                {newsSource.map((news) => (
                  <ListItem
                    key={news}
                    title={news}
                    href={`/source/${news.toLowerCase()}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-trigger relative hover:after:scale-x-100 after:absolute after:left-4 after:bottom-1 after:w-[15px] after:h-[4px] after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-200 after:ease-out text-md">
              Kategori{" "}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="custom-content">
              <ul className="grid w-[650px] gap-3 p-4 md:w-[850px] md:grid-cols-6 lg:w-[1050px]">
                {categories.map((category) => (
                  <ListItem
                    key={category.title}
                    title={category.title}
                    href={`/category/${camelCase(
                      category.title.toLowerCase()
                    )}`}
                  >
                    <category.icon className={`${category.color}`} />
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink
                className="relative h-9 px-4 py-2 hover:after:scale-x-100 
                after:absolute after:left-4 after:bottom-0.5 after:w-[15px] after:h-[4px] 
                after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 
                after:origin-left after:transition-transform after:duration-200 after:ease-out text-md"
              >
                Tentang Kami
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className="relative h-9 px-4 py-2 hover:after:scale-x-100 
                after:absolute after:left-4 after:bottom-0.5 after:w-[15px] after:h-[4px] 
                after:rounded-lg after:bg-red-500 after:transform after:scale-x-0 
                after:origin-left after:transition-transform after:duration-200 after:ease-out text-md"
              >
                Kontak
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

function Icon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
    >
      <path
        d="M17.89 0h88.9c8.85 0 16.1 7.24 16.1 16.1v90.68c0 8.85-7.24 16.1-16.1 16.1H16.1c-8.85 0-16.1-7.24-16.1-16.1v-88.9C0 8.05 8.05 0 17.89 0zm9.39 31.06h24.77l9.43 36.97 9.46-36.97H95.6v60.76H80.24V45.5L68.38 91.82H54.47L42.64 45.5v46.32H27.28V31.06z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, href, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {children}
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
